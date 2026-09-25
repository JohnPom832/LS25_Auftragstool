// Wenn der Build in GitHub Actions läuft, hängen wir den Repository-Namen
// als Pfad-Präfix an, weil GitHub Pages ein Projekt standardmäßig unter
// https://DEIN-NAME.github.io/DEIN-REPO/ ausliefert (nicht unter "/").
const istGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";
let assetPrefix = "";

if (istGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.replace(/.*\//, "") ?? "";
  basePath = `/${repoName}`;
  assetPrefix = `/${repoName}/`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Erzeugt bei "npm run build" einen rein statischen Ordner "out/",
  // der ohne eigenen Server auskommt – genau das, was GitHub Pages braucht.
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix,
};

export default nextConfig;
