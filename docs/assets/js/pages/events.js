import { renderCard } from '../components/card.js';

export function renderEvents(root, state) {
  const now = new Date();
  const events = state.events || [];
  const upcoming = events.filter(e=>new Date(e.date)>=now).sort((a,b)=>new Date(a.date)-new Date(b.date));
  const past = events.filter(e=>new Date(e.date)<now).sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,6);
  const asCard = (e)=>({title:e.title,year:e.date,summary:`${e.location} · ${e.org}. ${e.summary}`,tags:e.tags});
  root.innerHTML = `<section class="section timeline"><h1>Events</h1><h2>Upcoming</h2>${upcoming.length?`<div class="grid">${upcoming.map(e=>renderCard(asCard(e))).join('')}</div>`:'<div class="empty">No upcoming events available.</div>'}
    <h2>Selected Past</h2>${past.length?`<div class="grid">${past.map(e=>renderCard(asCard(e))).join('')}</div>`:'<div class="empty">No past events recorded.</div>'}</section>`;
}
