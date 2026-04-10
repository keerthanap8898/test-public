import { esc, resolveUrl } from '../utils.js';
export function renderCard(item = {}, opts = {}) {
  const img = item.thumbnail ? `<img src="${resolveUrl(item.thumbnail)}" alt="${esc(item.title || 'preview')}" loading="lazy"/>` : '';
  const tags = (item.tags || []).slice(0, 4).map((t) => `<span class="chip">${esc(t)}</span>`).join('');
  return `<article class="card" ${opts.dataId ? `data-id="${opts.dataId}"`:''}>${img}<h3>${esc(item.title || 'Untitled')}</h3>
  <p class="muted">${esc(item.year || item.date || '')}</p>
  <p>${esc(item.summary || item.description || 'No summary available yet.')}</p>
  <div class="chips">${tags}</div></article>`;
}
