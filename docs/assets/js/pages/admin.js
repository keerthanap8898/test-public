export function renderAdmin(root) {
  root.innerHTML = `<section class="section"><h1>Admin Information</h1><p>This site is a static GitHub Pages website.</p>
  <p>Updates happen by editing the repository.</p>
  <ol><li>Upload media to <code>docs/images/</code>.</li><li>Edit JSON content files in <code>docs/assets/js/data/</code>.</li><li>Commit and push to <code>main</code>.</li><li>GitHub Pages redeploys automatically.</li></ol>
  <p><a href="../admin/edit/">Go to edit workflow notes</a></p></section>`;
}
