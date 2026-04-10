export function ensureModal() {
  let m = document.getElementById('global-modal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'global-modal';
    m.className = 'modal';
    m.innerHTML = '<div class="modal-body" role="dialog" aria-modal="true"></div>';
    document.body.appendChild(m);
    m.addEventListener('click', (e) => { if (e.target === m) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }
  return m;
}
export function openModal(html) {
  const m = ensureModal();
  m.querySelector('.modal-body').innerHTML = html;
  m.classList.add('open');
}
export function closeModal() { ensureModal().classList.remove('open'); }
