# MOTA landing page

A responsive static site for MOTA riders and drivers. The visual direction combines the earlier supplied Spiro references with mobility landing-page patterns, with original MOTA copy, illustrative app graphics, and an original generated motorcycle hero image.

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

## Account guide and checks

The rider and driver selector updates the introduction, fee, steps, document checklist and call to action together. The checklist is preparation guidance; the app remains the source of required account fields. Navigation closes consistently on Escape, outside clicks and section links. Escape returns focus to the relevant navigation control.

Run `node --check main.js` and `node tests/landing-interactions.test.cjs`. The interaction checks use a simulated DOM, not a browser or mobile device.

## Mobility landing redesign

Design research used the official Uber, Bolt and Revolut homepages on 6 October 2026:

- https://www.uber.com/us/en/: distinct rider/driver paths, journey explanation and app conversion.
- https://bolt.eu/en/: service cards, earning entry points and support navigation.
- https://www.revolut.com/: large benefit-led headings and focused feature sections.

These are prominent references, not a verified ranking of landing-page popularity. MOTA uses original copy and existing MOTA assets, with a red, white and black palette. Competitor services and adoption numbers are not presented as MOTA features or statistics.

The new hero includes an illustrative car/moto selector. Rider and driver links select the appropriate registration guide. The service grid links to ride guidance, driver onboarding, driver wallet and support. A practical journey checklist replaces the decorative impact grid. The page remains informational: it does not accept bookings, quote fares or promise emergency response.

`redesign.css` isolates this layout from the existing app illustration styles. Breakpoints adapt the hero and service grid, and expand mobile navigation to tablet widths. Reduced-motion preferences remain supported. Official release URLs must still be supplied in `config.js`; pending download status is explicit.

## Help discovery

The FAQ supports rider/driver categories and keyword searches across questions and answers. Shared account questions appear in both categories. With JavaScript unavailable, all questions remain visible. A count and empty state explain search results. Footer audience links select the matching signup guide. The download summary reflects configured HTTPS release URLs instead of always claiming both platforms are pending.
