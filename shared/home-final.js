/* Blackwood CFS System Home — exact approved Directions diamond + original folded map.
   Leaves the operational app and shared ribbon untouched. */
(() => {
  'use strict';
  const DIAMOND = `<svg class="diamond-icon" viewBox="0 0 64 64" aria-hidden="true"><path class="road-sign-outline" d="M32 4c1.5 0 2.6.5 3.6 1.5L58.5 28.4a5.1 5.1 0 0 1 0 7.2L35.6 58.5a5.1 5.1 0 0 1-7.2 0L5.5 35.6a5.1 5.1 0 0 1 0-7.2L28.4 5.5A5.1 5.1 0 0 1 32 4z"/><path class="turn-shaft" d="M23.4 43.2v-6.4C23.4 28.5 28.4 24 36.5 24h3.2"/><path class="turn-head" d="M36.6 16.6 47.3 24 36.6 31.4z"/></svg>`;
  const FOLDED_MAP = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20zM9 4v13.5M15 6.5V20"/></svg>`;
  const CHEVRON = `<svg viewBox="0 0 12 24" aria-hidden="true"><path d="M3 5l6 7-6 7"/></svg>`;
  function moduleByTitle(modules,title){
    return Array.from(modules.querySelectorAll(':scope > .home-module')).find(m => m.querySelector('.home-module-label')?.textContent.trim() === title);
  }
  function refreshHome(home){
    const modules=home.querySelector('.home-modules'); if (!modules) return;
    const directions=moduleByTitle(modules,'Directions Book');
    const hydrants=moduleByTitle(modules,'Live Hydrants');
    let maps=moduleByTitle(modules,'Maps');
    if (!maps && hydrants){
      maps=document.createElement('section');
      maps.className='home-module';maps.setAttribute('aria-label','Maps');
      maps.innerHTML=`<a class="home-module-link home-maps" href="maps/index.html"><span class="home-module-icon" aria-hidden="true">${FOLDED_MAP}</span><span class="home-module-label">Maps</span><span class="home-module-arrow" aria-hidden="true">${CHEVRON}</span></a>`;
      modules.insertBefore(maps,hydrants);
    }
    // Keep the order from the approved HTML; retain the existing clickable operational controls.
    if (maps && directions && directions.nextElementSibling !== maps) modules.insertBefore(maps,directions.nextElementSibling);
    if (directions){
      const holder=directions.querySelector('.home-module-icon');
      if (holder && holder.dataset.approvedHomeIcon !== 'diamond-v4'){
        holder.innerHTML=DIAMOND;holder.dataset.approvedHomeIcon='diamond-v4';
      }
    }
    if (maps){
      const holder=maps.querySelector('.home-module-icon');
      if (holder && holder.dataset.approvedHomeIcon !== 'folded-original'){
        holder.innerHTML=FOLDED_MAP;holder.dataset.approvedHomeIcon='folded-original';
      }
    }
    const tagline=home.querySelector('.home-tagline');
    if (tagline && !tagline.textContent.includes('Maps')){
      tagline.innerHTML='Inventory <span aria-hidden="true">|</span> Directions <span aria-hidden="true">|</span> Maps <span aria-hidden="true">|</span> Hydrants';
    }
  }
  const observed=new WeakSet();
  function watchHome(home){
    refreshHome(home);
    if(observed.has(home))return;
    observed.add(home);
    const observer=new MutationObserver(() => refreshHome(home));
    observer.observe(home,{childList:true,subtree:true});
  }
  function update(){document.querySelectorAll('.v2-appliance-home').forEach(watchHome)}
  function start(){
    update();
    // The operational app can recreate System Home, so detect replacement root nodes.
    new MutationObserver(update).observe(document.body,{childList:true});
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
