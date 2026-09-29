# Remote website

The public, static website for Remote, a local TV remote for iPhone and iPad. This repository contains only website code and approved public artwork. The iOS app source remains in its separate private repository.

Live URL: <https://jtvargas.github.io/remote-website/>

## Develop and build

Use Node.js 24 (`nvm use`) and npm. Astro is pinned to 7.3.5, the current npm release checked when this site was created.

```sh
npm ci
npm run dev
```

The committed `package-lock.json` keeps installs reproducible. Open the local address printed by Astro with the `/remote-website/` base path.

```sh
npm run build
npm run preview
```

The production output is `dist/`. The site needs no runtime server, client JavaScript, cookies, analytics, external font service, or secrets.

## Deploy

The public repository is `jtvargas/remote-website`. In **Settings → Pages → Build and deployment**, select **GitHub Actions**. A push to `main` or a manual workflow run builds and deploys the site with the [official Astro Pages approach](https://docs.astro.build/en/guides/deploy/github/): `actions/checkout@v7`, `withastro/action@v6` with Node 24, and `actions/deploy-pages@v5`.

`astro.config.mjs` sets the host to `https://jtvargas.github.io`, the base to `/remote-website`, and trailing slashes for pages. Links, canonical URLs, social metadata, sitemap, and robots output use this configuration. If the host or repository path changes, update the config and the live URL in this README.

The sitemap is `/remote-website/sitemap.xml`. The project also serves `/remote-website/robots.txt`; crawlers normally discover robots rules only at the host root (`https://jtvargas.github.io/robots.txt`), which this project repository does not control. The page heads link the sitemap directly. Do not claim the project-level robots file controls other repositories on this host.

## Pages and metadata

- `/remote-website/`: overview, setup/sharing/shortcuts, compatibility limits, and QR safety.
- `/remote-website/privacy/`: local storage, Keychain, permissions, QR exports, optional diagnostics, and hosting privacy.
- `/remote-website/support/`: practical setup help and the [public support tracker](https://github.com/jtvargas/remote-website/issues). Keep repository issues enabled.

The shared layout provides unique titles/descriptions, canonical URLs, Open Graph, and Twitter image metadata. The homepage includes factual `SoftwareApplication` JSON-LD without price, ratings, release date, or a download URL. The site intentionally has no App Store badge or download link until a real listing exists. Once published, update the availability copy and link to the actual listing; do not imply universal TV compatibility.

## Public artwork

`public/favicon.svg` is a simple letterform. `public/social.png` is a 1200 × 630 typography-only social card; no TV identifiers or access material are present.

The homepage expects these **1320 × 2868** PNGs in `public/images/`:

- `remote.png`: a populated remote, used in the hero.
- `setup.png`: the Add a TV choices.
- `sharing.png`: safe receiving/import UI, without a valid access QR.
- `customize.png`: the per-TV shortcut editor.
- `library.png`: the library with several sample TV cards.

These are genuine iOS simulator screenshots, with temporary sample TV data authorized only for capture, not fabricated phone UI. Use a 9:41 status bar and full battery. A visible caption identifies sample TVs. Never ship the temporary simulator data or injection code in the app or this website repository. Screenshot HTML includes intrinsic dimensions, descriptive alt text, and lazy loading except for the hero. If captures change, update dimensions and alt text to match their actual contents.

Capture status was set with `xcrun simctl status_bar booted override --time "9:41" --batteryState charged --batteryLevel 100`. All five images were captured from an iPhone 17 Pro Max simulator at 1320 × 2868. The isolated sample app was uninstalled and its temporary source/build directory removed after capture; no real TV pairing was used.

Before publication, visually inspect every image. No real access QR, pairing credential, personally identifying TV name, network address, diagnostic identifier, or other sensitive data may appear. Review all files being published; never copy the private app repository or its build output into this repository.

## Verify a release

After installing dependencies and adding the approved screenshots, build once and use `npm run preview`. Check home, privacy, and support at the configured base path on narrow and wide viewports; inspect screenshots, keyboard focus, skip navigation, text contrast, links, and overflow. Confirm images load, canonical and social URLs use the public host, and sitemap/robots resolve under the base. The site is fully usable with JavaScript disabled and does not add motion when reduced motion is requested.

Observed locally: production build succeeded; desktop (1440 px) and mobile (390/320 px) layouts rendered without horizontal overflow; all five screenshots loaded at their expected dimensions; support/privacy navigation, keyboard skip navigation, and feature navigation with JavaScript disabled worked. These checks do not establish TV firmware compatibility or App Store approval.
