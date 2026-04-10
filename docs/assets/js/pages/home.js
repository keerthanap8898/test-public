import { section } from '../components/page.js';
import { renderCard } from '../components/card.js';
import { path, resolveUrl } from '../utils.js';

export function renderHome(root, state) {
  const works = state.works.filter(w=>w.featured).slice(0,3);
  const upcoming = state.events.filter(e=>new Date(e.date) >= new Date()).sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(0,3);
  const heroLinks = (state.profile.heroLinks || []).map(l => `<a class="chip" href="${l.url}" target="_blank" rel="noreferrer">${l.label}</a>`).join('');
  root.innerHTML = `
    <section class="hero">
      <img src="${resolveUrl(state.profile.photo || 'images/profile-placeholder.svg')}" alt="Keerthana Purushotham portrait" />
      <div><h1>${state.profile.name || 'Keerthana Purushotham'}</h1>
      <p>${state.profile.tagline || ''}</p>
      <p class="muted">${state.profile.summary || ''}</p>
      <div class="chips">${heroLinks}</div></div>
    </section>
    ${section('Focus', `<div class="chips">${(state.profile.affiliations||[]).map(a=>`<span class="chip">${a}</span>`).join('')}</div><p>${state.profile.headline||''}</p>`)}
    ${section('Featured Resume & Portfolio', `<div class="grid focus-grid"><a class="card" href="${path('resume/')}"><h3>Resume</h3><p class="muted">Role trajectory, security depth, and technical breadth.</p></a><a class="card" href="${path('portfolio/')}"><h3>Portfolio</h3><p class="muted">Selected systems work, research, and writing samples.</p></a></div>`)}
    ${section('Highlighted Work', works.length?`<div class="grid focus-grid">${works.map(w=>renderCard(w)).join('')}</div>`:'<div class="empty">No featured works yet.</div>')}
    ${section('Upcoming Events', upcoming.length?`<div class="grid focus-grid">${upcoming.map(e=>renderCard({title:e.title,summary:e.summary,year:e.date,tags:e.tags,thumbnail:''})).join('')}</div>`:'<div class="empty">No upcoming events currently listed.</div>')}
  `;
}
