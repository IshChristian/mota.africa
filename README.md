# MOTA landing page

A responsive static site for MOTA riders and drivers. The section layout follows the supplied Spiro visual references, with original MOTA copy, illustrative app graphics, and an original generated motorcycle hero image.

## Run locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173. No build step is required.

## Release links

Set the official HTTPS Android and iPhone distribution URLs in `config.js`. Until configured, download controls show a pending state and explain that a release link is unavailable.

## Content and imagery

Account copy reflects the MOTA workflow: phone verification, optional email verification, personal KYC for riders, and personal plus vehicle KYC and a 5,000 RWF registration fee for drivers. Riders have no registration fee. The map and app panels are illustrations, not coverage claims or production app screenshots. Product principles are not customer testimonials.

`assets/hero.webp` was generated with the built-in image tool using this prompt: two red and blue commercial motorcycle taxis on a modern Kigali boulevard, premium natural automotive photography, bikes in the lower middle, skyline space above, no text or brand logos. It is concept imagery rather than a photograph of MOTA's fleet.

The page includes responsive navigation, account tabs, map views, horizontally scrollable journey cards, FAQs, and accessible download feedback. JavaScript syntax, local asset paths and section anchors were checked. Browser rendering verification was blocked by the available preview environment.
