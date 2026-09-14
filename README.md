# Benito × Ōura — Circadian Brew

A responsive, scroll-driven concept website adapted from the original Canva presentation.

## Included

- Responsive desktop, tablet, and mobile layouts
- Scroll progress and reveal animations
- Pinned three-step ritual sequence
- Expanded product, value, opportunity, and negotiation narrative
- Circadian Brew product moodboard and ring detail imagery
- Illustrative economics and lifetime-value section
- Three-phase pitch path and decision-maker roles
- Reduced-motion support and a visible motion control
- Local image and font assets
- GitHub Pages deployment workflow
- No framework, package manager, or build step required

## Preview locally

You can open `index.html` directly. For consistent local asset loading, run a basic static server from the project folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy with GitHub Pages

1. Create an empty GitHub repository.
2. Upload all files in this folder, including `.github` and `.nojekyll`.
3. Use `main` as the default branch.
4. In **Settings → Pages**, select **GitHub Actions** under **Build and deployment**.
5. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

GitHub will publish the website at the URL shown in the completed workflow.

## Deploy elsewhere

Upload the repository contents to any static host, including Cloudflare Pages, Netlify, Vercel, or an ordinary web server. Set the publish directory to the repository root. No build command is needed.

## Edit

- `index.html` contains the page structure and copy.
- `styles.css` controls layout, visual design, breakpoints, and motion styles.
- `motion.js` controls scroll progress, parallax, section reveals, the ritual sequence, and the motion toggle.
- `assets/` contains the local images and fonts.

The page now follows eight narrative sections: the ritual, story, product, connection, value, opportunity, route to agreement, and closing statement.

## Asset notice

The supplied images and fonts came from the source design at:

https://team24.my.canva.site/benito-x-ura

Confirm that you have the appropriate rights for public distribution and commercial use. The package does not grant separate rights to Bad Bunny's likeness, Ōura trademarks, photography, or font files.

## Reference preview

https://benito-oura-circadian.movonte-8329.chatgpt.site
