import { fetchJSON } from './utils.js';

export const state = { site:{}, profile:{}, links:{}, works:[], events:[], resume:{}, portfolio:{}, github:{} };

export async function hydrateState() {
  const [site, profile, links, works, events, resume, portfolio, github] = await Promise.all([
    fetchJSON('site.json'), fetchJSON('profile.json'), fetchJSON('links.json'), fetchJSON('works.json'),
    fetchJSON('events.json'), fetchJSON('resume.json'), fetchJSON('portfolio.json'), fetchJSON('github.json')
  ]);
  Object.assign(state, {
    site, profile, links,
    works: works.works || [],
    events: events.events || [],
    resume, portfolio,
    github: github.repos || []
  });
  return state;
}
