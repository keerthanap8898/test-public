import { renderCard } from '../components/card.js';
import { renderFilters } from '../components/filters.js';
import { openModal } from '../components/modal.js';

export function renderWorks(root, state) {
  const works = state.works || [];
  root.innerHTML = `<section class="section"><h1>All Works</h1>${renderFilters(works.flatMap(w=>w.tags||[]))}<div id="worksGrid" class="grid focus-grid"></div></section>`;
  const grid = root.querySelector('#worksGrid');
  const search = root.querySelector('#searchInput'); const tag = root.querySelector('#tagFilter'); const sort = root.querySelector('#sortBy');
  const draw = () => {
    let list = [...works];
    const q = (search.value || '').toLowerCase();
    if (q) list = list.filter(w => `${w.title} ${w.summary} ${(w.tags||[]).join(' ')}`.toLowerCase().includes(q));
    if (tag.value) list = list.filter(w => (w.tags||[]).includes(tag.value));
    list.sort((a,b)=> sort.value==='title'?String(a.title).localeCompare(String(b.title)) : sort.value==='oldest' ? Number(a.year)-Number(b.year) : Number(b.year)-Number(a.year));
    grid.innerHTML = list.length ? list.map(w => renderCard(w, { dataId: w.id })).join('') : '<div class="empty">No works match the current filters.</div>';
    grid.querySelectorAll('.card[data-id]').forEach(c => c.addEventListener('click', () => {
      const w = works.find(x => x.id === c.dataset.id) || {};
      openModal(`<h2>${w.title || ''}</h2><p>${w.description || w.summary || ''}</p><div class="chips">${(w.highlights||[]).map(h=>`<span class="chip">${h}</span>`).join('')}</div>`);
    }));
  };
  [search, tag, sort].forEach(el=>el.addEventListener('input', draw));
  draw();
}
