import { resolveUrl } from '../utils.js';
export function renderMediaGrid(items = []) {
  if (!items.length) return '<div class="empty">No media available.</div>';
  return `<div class="grid">${items.map((m, i) => `<button class="card media-item" data-media-index="${i}">${m.type==='image' ? `<img src="${resolveUrl(m.src)}" alt="${m.alt || m.title || 'media'}"/>`:''}<h3>${m.title || 'Untitled media'}</h3><p class="muted">${m.caption || m.type}</p></button>`).join('')}</div>`;
}
export function renderMediaDetail(m={}) {
  if (m.type === 'image') return `<img src="${resolveUrl(m.src)}" alt="${m.alt || m.title || 'image'}" style="width:100%;border-radius:10px"/><p>${m.caption || ''}</p>`;
  if (m.type === 'video' || m.type === 'embed' || m.type === 'drive') return `<iframe src="${resolveUrl(m.src)}" title="${m.title || 'embed'}" style="width:100%;height:60vh;border:1px solid #223"></iframe>`;
  if (m.type === 'pdf') return `<iframe src="${resolveUrl(m.src)}" title="${m.title || 'pdf'}" style="width:100%;height:70vh;border:1px solid #223"></iframe>`;
  if (m.type === 'audio') return `<audio src="${resolveUrl(m.src)}" controls style="width:100%"></audio>`;
  return `<a href="${resolveUrl(m.src)}" target="_blank" rel="noreferrer">Open media</a>`;
}
