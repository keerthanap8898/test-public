import { renderPDFViewer, bindPDFViewer } from '../components/pdfViewer.js';
import { renderAudioPlayer, bindAudioPlayer } from '../components/audioPlayer.js';

export function renderResume(root, state) {
  const pdf = state.resume.pdf || '';
  root.innerHTML = `<section class="section"><h1>Resume</h1><p class="muted">${state.resume.summary || ''}</p>
    ${renderPDFViewer('resume', pdf)}
    <p><a href="${pdf}" target="_blank" rel="noreferrer">Open resume PDF</a></p>
    <h2>Audio summary</h2>${renderAudioPlayer('resume-audio', state.resume.audio || '')}</section>`;
  bindPDFViewer('resume', pdf);
  bindAudioPlayer('resume-audio');
}
