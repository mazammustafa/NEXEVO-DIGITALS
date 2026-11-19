# Nexevo Digitals — Static Website (HTML / CSS / JS)

This is a static version of the Nexevo Digitals website. It does not use WordPress, PHP or a database.

## Folder structure

```
indi-creative-website/
├── index.html                  ← Home page
├── about-us/index.html         ← Each page has its own folder, so the URLs
├── contact-us/index.html          stay the same as the WordPress site (good for SEO)
├── services/…                  ← Services + every sub-service page
├── google-ads-new-york/ …      ← City pages (Google Ads / SEO / Meta Ads): New York, Los Angeles, Chicago, Miami, Houston, Dallas
├── blog/, case-studies/, category/…  ← Blog, case studies, category pages
├── assets/
│   ├── css/style.css           ← Shared styles (header, footer, design system)
│   ├── js/main.js              ← Reviews slider, contact form, mobile menu
│   └── images/
│       ├── blog/               ← Blog post images
│       ├── case-studies/       ← Case study photos
│       ├── cities/             ← Old Australian city photos (no longer used)
│       ├── icons/              ← Site icon (favicon) and Google icon
│       ├── logos/              ← Client logos
│       ├── reviews/            ← Google reviewer photos
│       ├── social/             ← Image shown when a page is shared (og-image)
│       └── team/               ← Team and office photos
├── sitemap.xml, robots.txt, .htaccess
```

### Colours, fonts and font sizes (design tokens)

All colours, font families and font sizes are CSS variables in one `:root` block at the top of `assets/css/style.css` ("0. DESIGN TOKENS"). Change a value there and it updates everywhere, including inline styles on the pages.

- Colours: `--color-primary` (brand yellow), `--color-dark`, `--color-cream`, `--color-text`, `--color-border`, and so on. Transparent versions use `rgba(var(--rgb-primary), .25)`.
- Fonts: `--font-display` (Bebas Neue headings), `--font-body` (DM Sans), `--font-hand` (Caveat).
- Font sizes: fixed sizes are `--fs-15`, `--fs-16_5` (16.5px), and so on. Fluid heading sizes are `--fs-fluid-34-58` (34px min, 58px max). Shortcuts: `--fs-body`, `--fs-h1`, `--fs-h2`.

### Header and footer (global)

The header and footer live in one place: `assets/js/layout.js`. Edit them there and every page updates. Each page only has two lines where they appear:

```html
<script src="assets/js/layout.js" data-part="header"></script>
<script src="assets/js/layout.js" data-part="footer"></script>
```

Inner pages put `../` (or `../../`) in front of `assets/`, the same as for `style.css`. Inside `layout.js`, write links relative to the site root as `${R}about-us/`, and use `${H}` for the home page; the script fills in the right path for each page.

There is no CSS inside the pages: no `<style>` blocks and no `style=""` attributes. All CSS lives in `assets/css/style.css`:

- Section 13 holds each page's own styles, scoped by a class on `<body>` (`page-about-us`, or a shared template class like `tpl-service`, `tpl-city-a`).
- Section 14 holds element styles as small classes (`s-1a2b3c4`), used where a page needs a one-off style.

### Class names

| Class | What it is |
|---|---|
| `site-header`, `site-footer` | Header and footer, the same on every page |
| `page-section` + `section-1`, `section-2`… | Each full-width band of a page, numbered top to bottom. Its spacing and background are set in section 13 of `style.css` |
| `page-section__inner` (`is-boxed` = centred, max 1140px) | Inner wrapper of a section |
| `page-block` | One content block inside a section |
| `indi`, `wrap`, `btn`, `kick`… | Design system (shared buttons, headings and layout) |
| `ui-…` | Small reusable parts: post cards, form fields, post navigation |

## Viewing it locally

Open `index.html` by double-clicking it. Links between pages work offline because `main.js` adds `index.html` to links when a page is opened from disk.

## Hosting

Upload the **contents** of this folder to your web host's root (`public_html`). It also works on Netlify, Vercel, Cloudflare Pages and GitHub Pages without any setup.

## Contact form — one setting to change

Open `assets/js/main.js`. Near the top you'll see:

```js
var FORM_ENDPOINT = '';
```

- **Left empty (the default):** clicking "Send it through" opens the visitor's email app with the message already written, addressed to admin@nexevo digitalsagency.com.au.
- **Recommended:** create a free form at https://formspree.io or https://web3forms.com, then paste its URL here (for example `'https://formspree.io/f/abcd1234'`). After that, messages go straight to your inbox and the visitor stays on the page.

## Things that changed from WordPress

| Before | Now |
|---|---|
| Trustindex review plugin | Static Google review cards with a slider (`main.js` section 3). New reviews have to be added to the HTML by hand. |
| Elementor contact form | Plain HTML form (see above) |
| Elementor sticky header (JS) | CSS `position: sticky` |
| Blog / case-study grids | Fixed HTML. When you publish a new post, add its card to `blog/`, `case-studies/` and the home page yourself. |

The Google tag (GT-5M3G6TRH), meta titles and descriptions, canonical URLs, Open Graph tags and schema (JSON-LD) are all kept.

## Pages in the menu

The header, mobile menu and footer link only to these 11 pages:

| Page | Folder |
|---|---|
| Home | `/` |
| About | `about-us/` |
| Contact | `contact-us/` |
| Web Design | `services/website-development/` |
| Web Development | `services/web-development/` |
| Ecommerce Website Development | `services/website-development/ecommerce/` |
| Shopify Website Development | `services/shopify-website-development/` |
| Social Media Management | `services/social-media-management/` |
| SEO | `services/search-engine-optimisation/` |
| Logo Design | `services/logo-design/` |
| Google Ads | `services/google-ads/` |

All other folders (blog, case studies, city pages, packages, Meta Ads, Terms, Privacy and so on) are still here but nothing on the site links to them. To bring one back, add a link to it in the header and footer.
