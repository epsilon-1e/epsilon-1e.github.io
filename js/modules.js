import { DATA } from './data.js';
import { state } from './state.js';
import { $, $$, escapeHtml } from './helpers.js';

export let MODULES = {};

export function buildModules(moduleListEl){
  MODULES = {};
  DATA.forEach(d=>{
    const mid = d.module || '00';
    if(!MODULES[mid]) MODULES[mid] = {moduleName: d.moduleName || ('Module ' + mid), color: d.moduleColor || '#777'};
  });
  if(!moduleListEl) return;
  const keys = Object.keys(MODULES).sort();
  moduleListEl.innerHTML = keys.map(k=>{
    const m = MODULES[k];
    return `<li class="module-item" data-module="${k}"><span class="module-dot" style="background:${m.color}"></span><span class="module-label">${escapeHtml(k)} ${escapeHtml(m.moduleName)}</span></li>`;
  }).join('');
  $$('.module-item', moduleListEl).forEach(li=>{
    li.addEventListener('click', ()=>{
      const id = li.dataset.module;
      if(state.filters.modules.has(id)){ state.filters.modules.delete(id); li.classList.remove('selected'); } 
      else { state.filters.modules.add(id); li.classList.add('selected'); }
    });
  });
}
