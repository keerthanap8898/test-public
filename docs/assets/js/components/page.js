export function section(title, body, cls='') {
  return `<section class="section ${cls}"><h2>${title}</h2>${body}</section>`;
}
