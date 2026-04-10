import { renderPDFViewer, bindPDFViewer } from '../components/pdfViewer.js';
import { renderMediaGrid, renderMediaDetail } from '../components/mediaRenderer.js';
import { openModal } from '../components/modal.js';

export function renderPortfolio(root, state) {
  const media = state.portfolio.media || [];
  root.innerHTML = `<section class="section"><h1>Portfolio</h1><p class="muted">${state.portfolio.summary || ''}</p>
    ${renderPDFViewer('portfolio', state.portfolio.deckPdf || '')}
    <h2>Gallery</h2>${renderMediaGrid(media)}</section>`;
  bindPDFViewer('portfolio', state.portfolio.deckPdf || '');
  root.querySelectorAll('.media-item').forEach(btn => btn.addEventListener('click', ()=>{
    const m = media[Number(btn.dataset.mediaIndex)] || {};
    openModal(renderMediaDetail(m));
  }));
}
