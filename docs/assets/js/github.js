export async function fetchGithubRepos(user, fallback = []) {
  try {
    const r = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`);
    if (!r.ok) throw new Error('api');
    const data = await r.json();
    return data.map((d) => ({ name:d.name, url:d.html_url, description:d.description || '' }));
  } catch { return fallback; }
}
