import { path } from '../utils.js';

const primary = [
  ['Main', ''], ['Resume', 'resume/'], ['Portfolio', 'portfolio/']
];
const more = [['All Works', 'works/'], ['Events', 'events/'], ['Admin', 'admin/']];

export function renderHeader(active='') {
  const link = (label, href) => `<a href="${path(href)}" ${active===label.toLowerCase()?'aria-current="page"':''}>${label}</a>`;
  return `<header class="site-header"><div class="header-inner">
    <div class="brand"><strong>Keerthana Purushotham</strong><small>Seattle, WA • Software Engineer, Amazon Linux Vulnerability Management (AWS)</small></div>
    <nav aria-label="Primary"><div class="nav-row">${primary.map(([l,h])=>link(l,h)).join('')}
      <div class="menu" id="more-menu"><button class="menu-btn" id="menuBtn" aria-haspopup="true" aria-expanded="false">More ▾</button>
      <div class="menu-list">${more.map(([l,h])=>link(l,h)).join('')}</div></div></div></nav>
    <button class="menu-btn" id="mobileBtn" aria-label="Toggle navigation" aria-expanded="false">☰</button>
  </div></header>`;
}

export function bindHeader() {
  const menu = document.getElementById('more-menu');
  const menuBtn = document.getElementById('menuBtn');
  const mobileBtn = document.getElementById('mobileBtn');
  const nav = document.querySelector('.nav-row');
  menuBtn?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  mobileBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    mobileBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') menu?.classList.remove('open'); });
}
