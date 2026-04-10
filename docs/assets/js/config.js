export const CONFIG = {
  basePath: (() => {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const idx = parts.indexOf('test-public');
    return idx >= 0 ? `/${parts[idx]}/` : '/';
  })(),
  dataDir: 'assets/js/data'
};

export const SPEEDS = [0.5, 0.75, 1, 1.2, 1.4, 1.6];
