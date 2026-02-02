# Halō — Your Digital Guardian Angel for Focus

A static website replica of the Halo Framer landing page, built with HTML, CSS, and vanilla JavaScript.

## Structure

- **index.html** — Main page with hero, phone mockups, FAQ, and footer
- **privacy.html** — Privacy Policy
- **terms.html** — Terms & Conditions
- **styles.css** — Dark theme, typography, layout, and responsive styles
- **script.js** — Waitlist form handling (Google Sheets integration)

## Running Locally

Open `index.html` in a browser, or use a local server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Customization

- **Waitlist**: See `google-sheets-setup.md` for Google Sheets integration
- **Social links**: Update `href` attributes in the header and footer
- **Colors**: Edit CSS variables in `:root` in `styles.css`
