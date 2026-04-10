import { hydrateState } from './state.js';
import { routes } from './router.js';
import { renderHeader, bindHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

async function boot() {
  const page = document.body.dataset.page || 'home';
  const root = document.getElementById('site-root');
  root.className = 'site-shell';
  root.insertAdjacentHTML('afterbegin', renderHeader(page));
  root.insertAdjacentHTML('beforeend', renderFooter());
  bindHeader();

  const app = document.getElementById('app');
  const state = await hydrateState();
  const route = routes[page] || routes['not-found'];
  route(app, state);
}

(function loadPDFJs(){
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
  s.onload = () => {
    if (window.pdfjsLib) window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  };
  document.head.appendChild(s);
})();

boot();
