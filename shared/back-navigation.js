/* RC16: one same-document history guard, reused across nested operational layers.
 * Existing close handlers remain responsible for cleanup and persistence.
 */
(function () {
  'use strict';
  function install(win, doc, getLayer) {
    const marker = '__blackwoodBackRC16';
    const page = win.location.pathname;
    const history = win.history;
    const isGuard = () => history.state?.[marker] === page;
    let armed = isGuard();
    let handling = false;
    function sync() {
      if (handling) return;
      armed = isGuard();
      if (!armed && getLayer()) {
        try {
          history.pushState({ ...(history.state || {}), [marker]: page }, '');
          armed = true;
        } catch (error) { /* Native browser navigation remains available. */ }
      }
    }
    function onPop() {
      const wasArmed = armed;
      armed = isGuard();
      if (armed || !wasArmed || handling) return;
      const layer = getLayer();
      if (!layer) {
        // A layer was closed manually. Skip its unused guard, not a real page.
        history.back();
        return;
      }
      handling = true;
      try { layer(); } finally { handling = false; }
      sync();
    }
    win.addEventListener('popstate', onPop);
    win.addEventListener('pageshow', sync);
    // Observe only the operational layer nodes, not every rendered inventory item.
    const watched = new WeakSet();
    const observer = new win.MutationObserver(sync);
    function watch() {
      sync();
      doc.querySelectorAll('[data-cfs-back-layer]').forEach(node => {
        if (watched.has(node)) return;
        watched.add(node);
        observer.observe(node, { attributes: true, attributeFilter: ['class', 'hidden', 'aria-expanded'] });
      });
    }
    const children = new win.MutationObserver(watch);
    children.observe(doc.body, { childList: true });
    doc.addEventListener('click', watch);
    doc.addEventListener('input', sync);
    doc.addEventListener('change', sync);
    watch();
    return { sync };
  }
  function selectLayer(doc, entries) {
    for (const [selector, close] of entries) {
      const node = doc.querySelector(selector);
      if (!node || node.classList.contains('v2-app-hidden-for-home')) continue;
      const control = node.querySelector(close) || doc.querySelector(close);
      if (control && !control.disabled) return () => control.click();
    }
    return null;
  }
  if (typeof module !== 'undefined' && module.exports) { module.exports = { install, selectLayer }; return; }
  const doc = document;
  const page = doc.body.dataset.cfsBackPage;
  const entries = {
    inventory: [
      ['.v2-global-search-modal.open', '.v2-global-search-close'],
      ['#photoModal.open', '#photoModalClose'],
      ['#issueModal.open', '#issueModalClose'],
      ['#quizModal.open', '#quizCloseBtn'],
      ['#learnerGuideModal.open', '#learnerGuideCloseBtn'],
      ['#itemModal.open', '#modalClose'],
      ['#drawer.open #optionsPanel:not([hidden])', '#optionsToggleBtn'],
      ['#drawer.open', '#closeDrawerBtn']
    ],
    directions: [
      ['#directionIssueModal.open', '#directionIssueClose'],
      ['#mapViewerModal.open', '#mapViewerClose'],
      ['#mapListModal.open', '#mapListClose'],
      ['#modal.open', '#closeBtn']
    ],
    hydrants: [['#streetPicker.open', '#streetPickerButton']]
  }[page];
  if (!entries) return;
  const getLayer = () => {
    // Dynamic global search/home nodes are marked when discovered.
    if (page === 'inventory') doc.querySelectorAll('.v2-global-search-modal,.v2-appliance-home').forEach(n => { n.dataset.cfsBackLayer = ''; });
    const layer = selectLayer(doc, entries);
    if (layer) return layer;
    if (page === 'inventory' && !doc.querySelector('.v2-appliance-home.open')) {
      const home = doc.getElementById('systemHomeHeaderBtn');
      if (home) return () => home.click();
    }
    return null;
  };
  install(window, doc, getLayer);
})();
