import { path } from '../utils.js';
export function renderNotFound(root) {
  root.innerHTML = `<section class="section"><h1>404</h1><p class="muted">The page you requested was not found.</p><p><a href="${path('')}">Return to main page</a></p></section>`;
}
