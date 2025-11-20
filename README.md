# Hadi Khan ePortfolio

A focused Computer Engineering ePortfolio draft for Georgia Tech's ECE 1100. Built as a static site that can be deployed to GitHub Pages.

## Getting Started

```bash
cd docs
python3 -m http.server 8000
```

Then open `http://localhost:8000` to browse the tabbed layout.

## Structure

All site assets live in `/docs` so GitHub Pages can publish from the default `main /docs` combination:

- `docs/index.html` – Single-page ePortfolio covering summary, bio, goals, coursework, discovery project, skills, and contact information.
- `docs/styles.css` – Warm, modern palette and responsive layout inspired by the provided color guide.
- `docs/tabs.js` – Accessible tab interactions and keyboard support.

## Customization Notes

- Update the hero welcome text; the portrait now uses an initials-based placeholder to avoid shipping binary assets. If you want to point to a hosted photo later, swap the `src` in `docs/index.html` to a full image URL.
- Expand the coursework and projects sections as new artifacts are created (Discovery Project, future labs, etc.).
- Update contact links or add new sections (blog, gallery) as the portfolio grows.

## Publish to GitHub Pages

### Automatic (recommended)

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) deploys the contents of `docs/` to GitHub Pages on every push to `main`.

1. Push to `main`.
2. In the GitHub UI, open **Settings → Pages** once: set **Source** to **GitHub Actions**. (You only need to do this once per repo.)
3. After each push, the **Actions** tab will show the **Deploy GitHub Pages** run. When it completes, the run summary lists the live URL.
4. Visit the published URL to confirm. Changes to `docs/` will redeploy automatically on the next push.

### Manual (fallback)

1. Commit and push the latest version of this repository to GitHub (e.g., the `main` branch).
2. In the GitHub UI, navigate to **Settings → Pages** for this repository.
3. Under **Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and **Folder** to `/docs`, then click **Save**.
5. Wait ~1 minute for GitHub Pages to build; a success banner with the published URL will appear in the Pages settings card.
6. Visit the provided URL (e.g., `https://<username>.github.io/<repo>/`) to view the live site. Each new push to that branch will redeploy automatically.

Optional: If you own a domain, use the **Custom domain** section of the Pages settings to point it to this site and enable HTTPS.

## Add Other Images (coursework, projects, etc.)

1. Place your image file inside `docs/` (e.g., `docs/logic-diagram.png` or `docs/project/demo.jpg`). Keeping assets in this folder ensures GitHub Pages publishes them.
2. Reference the image in `docs/index.html` (or any other file in `docs/`) with a relative path, for example:
   ```html
   <img src="./logic-diagram.png" alt="Logic diagram of the state machine" loading="lazy" />
   ```
3. Commit the new image alongside your HTML update so the asset is available on GitHub Pages:
   ```bash
   git add docs/logic-diagram.png docs/index.html
   git commit -m "Add logic diagram image"
   git push
   ```
4. After the deploy finishes, refresh your GitHub Pages URL to confirm the image appears. If it does not, double-check that the filename and path in the `<img>` tag match the actual file.
