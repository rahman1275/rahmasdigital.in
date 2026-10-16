# Rahmas Digital Marketing — GitHub Pages landing page

Professional responsive landing page for Rahmas Digital Marketing (Chennai, India).

## Files
- `index.html` — all landing page content and SEO metadata
- `style.css` — responsive layout, colors and animations
- `script.js` — mobile navigation, automatic service selection, WhatsApp enquiry form
- `favicon.svg` — small branded website icon
- `.nojekyll` — disables unnecessary Jekyll processing on GitHub Pages

No build step, Node.js, or paid hosting is needed. Google Fonts requires an internet connection; system fonts are used when unavailable.

## Publishing at https://rahmasdigital.github.io/

GitHub Pages only assigns `rahmasdigital.github.io` to a user or organization with the **exact GitHub name `rahmasdigital`**. Your existing personal username `rahman1275` will not get this URL just by naming a repository `rahmasdigital.github.io`.

1. Check whether the GitHub organization name `rahmasdigital` is available. Create a **free organization** with that exact name at https://github.com/organizations/plan, or rename an account to `rahmasdigital` if appropriate.
2. Within that organization/account, create a **public** repository named exactly `rahmasdigital.github.io`.
3. Use **Add file → Upload files** and upload `index.html`, `style.css`, `script.js`, `favicon.svg`, `.nojekyll` to the **root**, not in a subfolder. Commit changes.
4. Under the repository's **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)`, and save.
5. After deployment finishes, open https://rahmasdigital.github.io/.

**Alternative using your current username:** Create a public repository named `rahmasdigital`, upload the files, enable Pages and access `https://rahman1275.github.io/rahmasdigital/`. Relative CSS/JS paths already support this alternative. If using this alternative permanently, update `<link rel="canonical">` and `og:url` in `index.html` to that URL.

## How enquiries work
The contact form creates a prefilled WhatsApp message for **+91 91505 79130**, opens WhatsApp in a new browser tab and leaves the visitor in control of sending it. No lead database, email server or backend is included. Test the contact form and mobile links before sharing.

## Edit your details
- Business name and service text: `index.html`
- WhatsApp number: replace `919150579130` everywhere in `index.html` and `script.js`
- Colors and layout: edit `:root` CSS variables in `style.css`
- Social sharing URL: `og:url` and canonical URL in `index.html`

Site does not claim unverified awards, client counts or guaranteed marketing results.
