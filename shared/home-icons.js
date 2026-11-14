/* Keep home icons aligned with the approved v4 preview, including dynamically inserted Maps pill. */
(() => {
  const diamond = '<svg class="cfs-approved-diamond" viewBox="0 0 64 64" aria-hidden="true"><path class="road-sign-outline" d="M32 4c1.5 0 2.6.5 3.6 1.5L58.5 28.4a5.1 5.1 0 0 1 0 7.2L35.6 58.5a5.1 5.1 0 0 1-7.2 0L5.5 35.6a5.1 5.1 0 0 1 0-7.2L28.4 5.5A5.1 5.1 0 0 1 32 4z"/><path class="turn-shaft" d="M23.4 43.2v-6.4C23.4 28.5 28.4 24 36.5 24h3.2"/><path class="turn-head" d="M36.6 16.6 47.3 24 36.6 31.4z"/></svg>';
  const map = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20zM9 4v13.5M15 6.5V20"/></svg>';
  function update() {
    document.querySelectorAll('.home-module').forEach(section => {
      const title = section.querySelector('.home-module-label')?.textContent?.trim();
      const holder = section.querySelector('.home-module-icon');
      if (!holder) return;
      const desired = title === 'Directions Book' ? diamond : title === 'Maps' ? map : null;
      if (!desired) return;
      const expected = title === 'Directions Book' ? 'diamond' : 'folded';
      if (holder.dataset.cfsIcon !== expected || !holder.querySelector('svg')) {
        holder.innerHTML = desired;
        holder.dataset.cfsIcon = expected;
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true}); else init();
  function init() {
    update();
    const home = document.querySelector('.v2-appliance-home');
    if (home) new MutationObserver(update).observe(home, {childList:true,subtree:true});
  }
})();
