import { renderHome } from './pages/home.js';
import { renderResume } from './pages/resume.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderWorks } from './pages/works.js';
import { renderEvents } from './pages/events.js';
import { renderAdmin } from './pages/admin.js';
import { renderAdminEdit } from './pages/admin-edit.js';
import { renderNotFound } from './pages/notfound.js';

export const routes = {
  home: renderHome,
  resume: renderResume,
  portfolio: renderPortfolio,
  works: renderWorks,
  events: renderEvents,
  admin: renderAdmin,
  'admin-edit': renderAdminEdit,
  'not-found': renderNotFound
};
