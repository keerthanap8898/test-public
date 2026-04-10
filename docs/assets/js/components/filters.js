export function renderFilters(tags = []) {
  const uniq = [...new Set(tags)].filter(Boolean).sort();
  return `<div class="controls"><input id="searchInput" placeholder="Search works" aria-label="Search works"/>
    <select id="tagFilter"><option value="">All tags</option>${uniq.map((t)=>`<option>${t}</option>`).join('')}</select>
    <select id="sortBy"><option value="newest">Newest</option><option value="oldest">Oldest</option><option value="title">Title</option></select></div>`;
}
