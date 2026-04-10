import { CONFIG } from './config.js';

export const path = (p = '') => `${CONFIG.basePath}${p}`.replace(/([^:]\/)\/+/, '$1');
export const safe = (v, fb = '') => (v ?? fb);
export const fmtDate = (d) => {
  if (!d) return 'TBA';
  const dt = new Date(d);
  return Number.isNaN(dt.getTime()) ? d : dt.toLocaleDateString(undefined, { month:'short', day:'numeric', year:'numeric' });
};
export async function fetchJSON(rel) {
  try { const r = await fetch(path(`${CONFIG.dataDir}/${rel}`)); if (!r.ok) throw new Error(r.status); return await r.json(); }
  catch { return {}; }
}
export const esc = (s='') => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export const resolveUrl = (u='') => (!u ? '' : (/^(https?:|mailto:|\/\/)/.test(u) ? u : path(u.replace(/^\.\//,''))));
