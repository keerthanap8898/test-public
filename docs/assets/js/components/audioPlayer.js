import { SPEEDS } from '../config.js';
import { resolveUrl } from '../utils.js';
export function renderAudioPlayer(id, src) {
  if (!src) return '<div class="empty">No audio summary yet.</div>';
  return `<div class="card"><audio id="${id}-audio" src="${resolveUrl(src)}"></audio>
  <div class="controls"><button id="${id}-toggle">Play</button><label>Speed
  <select id="${id}-speed">${SPEEDS.map((s)=>`<option value="${s}" ${s===1?'selected':''}>${s}x</option>`).join('')}</select></label></div></div>`;
}
export function bindAudioPlayer(id) {
  const audio = document.getElementById(`${id}-audio`); if (!audio) return;
  const btn = document.getElementById(`${id}-toggle`); const speed = document.getElementById(`${id}-speed`);
  btn.onclick = async () => { if (audio.paused) { await audio.play().catch(()=>{}); btn.textContent='Pause'; } else { audio.pause(); btn.textContent='Play'; } };
  speed.onchange = () => { audio.playbackRate = Number(speed.value); };
}
