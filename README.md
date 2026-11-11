# Murugan Athmagnanam — Portfolio

A polished, responsive professional portfolio for **Murugan Athmagnanam, Senior UI Engineer**. Built as a static site to run **free on GitHub Pages**, with **no npm packages, build step, hosting fees, or backend**.

## Features

- Premium editorial design using paper, ink, burgundy, and steel tones.
- Responsive layout and accessible desktop and mobile navigation.
- Consolidated career history with one complete narrative for each company.
- Shared professional expertise covering OAuth, accessibility, architecture, testing, observability, and production ownership.
- **Hire me** dialog that collects the visitor's name, company, position, and message before preparing an email to `1murugan23@gmail.com`.
- Single page PDF résumé, editable print source, and original Word résumé in `resume/`.
- Contact links, GitHub profile, SEO metadata, and social preview artwork.

## Publish to GitHub Pages — easiest option

1. Sign in to GitHub and create a **public** repository named `MURUGAN96.github.io` under the **MURUGAN96** account for a root-domain portfolio, or use `murugan-portfolio` for a project site.
2. Upload **all files inside this folder** to the repository root (including `index.html`, `styles.css`, `script.js`, `assets/`, `resume/`, and `.nojekyll`). You can upload these via **Add file → Upload files**, or use Git below.
3. Go to repository **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, then click **Save**.
5. Visit `https://murugan96.github.io/` if using `MURUGAN96.github.io`, or `https://murugan96.github.io/murugan-portfolio/` if using the repository name `murugan-portfolio`.

GitHub Pages deployments may take a few minutes to become available. On GitHub Free, the repository must be public. See https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site .

## Publish from the command line (alternative)

From inside this folder:

```bash
git init
git branch -M main
git add .
git commit -m "Launch professional portfolio"
git remote add origin https://github.com/MURUGAN96/MURUGAN96.github.io.git
git push -u origin main
```

Create the matching empty GitHub repository before pushing, and change the `origin` URL if using a different repository name.

## Edit and personalize

- `index.html` — content, links, contact email, professional history.
- `styles.css` — typography, layout, colors, responsive styles.
- `script.js` — mobile navigation, footer year, contact dialog, and prepared email behavior.
- `resume/` — single page PDF résumé, print source, and original Word résumé.
- `assets/` — favicon and social preview graphic.

### How "Hire me" works

The **Hire me** buttons open a short dialog. After the visitor enters their details, the site prepares a `mailto:` message containing their name, company, position, and note. This works on GitHub Pages without a server, but visitors need a configured email client. It does not send messages automatically.

### Privacy note

Your résumé includes contact details including a phone number. Publishing this repository **makes the documents publicly downloadable**. Remove anything you do not want on the public internet before publishing.

### Local preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000 .

## License

Portfolio content belongs to Murugan Athmagnanam. The template code may be customized for personal use.
