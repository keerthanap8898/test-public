import { resolveUrl } from '../utils.js';
export function renderPDFViewer(id, src) {
  return `<div class="pdf-wrap card"><div class="controls"><button id="${id}-prev">Prev</button><button id="${id}-next">Next</button>
    <button id="${id}-zoom-out">-</button><button id="${id}-zoom-in">+</button><span id="${id}-status">Page 1 / 1</span></div>
    <canvas id="${id}-canvas" aria-label="PDF viewer"></canvas><p id="${id}-error" class="muted"></p></div>`;
}

export async function bindPDFViewer(id, src) {
  if (!src) return;
  const canvas = document.getElementById(`${id}-canvas`);
  const status = document.getElementById(`${id}-status`);
  const errorEl = document.getElementById(`${id}-error`);
  if (!window.pdfjsLib) {
    errorEl.textContent = 'PDF.js unavailable. Use direct download link.';
    return;
  }
  try {
    const pdf = await window.pdfjsLib.getDocument(resolveUrl(src)).promise;
    let pageNo = 1; let scale = 1.1;
    const draw = async () => {
      const page = await pdf.getPage(pageNo);
      const vp = page.getViewport({ scale });
      canvas.width = vp.width; canvas.height = vp.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
      status.textContent = `Page ${pageNo} / ${pdf.numPages}`;
    };
    await draw();
    document.getElementById(`${id}-prev`).onclick = () => { pageNo = Math.max(1, pageNo - 1); draw(); };
    document.getElementById(`${id}-next`).onclick = () => { pageNo = Math.min(pdf.numPages, pageNo + 1); draw(); };
    document.getElementById(`${id}-zoom-in`).onclick = () => { scale = Math.min(2, scale + 0.1); draw(); };
    document.getElementById(`${id}-zoom-out`).onclick = () => { scale = Math.max(0.6, scale - 0.1); draw(); };
  } catch {
    errorEl.innerHTML = `Could not load PDF. <a href="${resolveUrl(src)}" target="_blank" rel="noreferrer">Open file</a>`;
  }
}
