import { DATA } from './data.js';
import { loadProgress } from './state.js';
import { escapeHtml } from './helpers.js';

const ICON_MAP = { quiz:'fa-list-check', lesson:'fa-book-open', video:'fa-play', meeting:'fa-users' };

export function getStatusTagHtml(item){
  const prog = loadProgress();
  const done = !!prog[item.id];
  if(item.mediaType === 'quiz'){
    const total = (item.questions||[]).length || 0;
    if(done){ const score = prog[item.id + '_score'] || `${total}/${total}`; return `<div class="status-tag status-complete"><span class="icon"><i class="fa-solid fa-circle-check"></i></span><span class="status-num">completed: ${escapeHtml(score)}</span></div>`; }
    return `<div class="status-tag status-incomplete"><span class="icon"><i class="fa-solid fa-circle-xmark"></i></span><span class="status-num">incomplete: -/${total}</span></div>`;
  } else {
    if(done) return `<div class="status-tag status-complete"><span class="icon"><i class="fa-solid fa-circle-check"></i></span><span class="status-num">completed</span></div>`;
    return `<div class="status-tag status-incomplete"><span class="icon"><i class="fa-regular fa-circle-xmark"></i></span><span class="status-num">incomplete</span></div>`;
  }
}

export function makeCard(item){
  const topColor = item.moduleColor || '#777';
  return `
    <article class="module-card" data-id="${escapeHtml(item.id)}" data-media="${escapeHtml(item.mediaType)}">
      <div class="top" style="background:${topColor}">
        <div class="unit">${escapeHtml(item.unit)} • ${escapeHtml(item.moduleName)}</div>
        <div class="media-icon"><i class="fa-solid ${ICON_MAP[item.mediaType]||'fa-file'}"></i></div>
      </div>
      <div class="body">
        <div class="title">${escapeHtml(item.title)}</div>
        ${getStatusTagHtml(item)}
        <div class="desc">${escapeHtml(item.description||'')}</div>
        <div class="chips">${(item.tags||[]).map(t=>`<div class="chip">${escapeHtml(t)}</div>`).join('')}</div>
      </div>
    </article>
  `;
}
