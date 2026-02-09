# dead-simple-js-sass-workflow

The smallest "just works" setup for writing vanilla ES6 + SASS with webpack.

- ES6 modules (imports/exports)
- SASS/SCSS support
- Dev server with live reload + source maps
- Copies static/ into dist/ so you can use a plain HTML file

## Requirements

- Node.js + npm

## Install

```sh
npm install
```

## Start (dev server)

```sh
npm start
```

Then open:

- http://localhost:8080

What to edit:

- src/index.js (your JS entry)
- src/style.scss (your styles)
- static/index.html (your HTML)

## Build (writes to dist/)

```sh
npm run build
```

Output:

- dist/index.js (bundled JS)
- dist/index.js.map (source map)
- dist/index.html (copied from static/index.html)

Want a production build without changing scripts?

```sh
npx webpack --mode=production
```

## How it works (60 seconds)

### JS / ES6 modules

Webpack starts at src/index.js and follows your imports.

Example patterns already in this repo:

- Named export import: import { AlertBox } from './alert-box/alert-box';
- Default export import: import writeText from './write-text/write-text';

To add more JS:

1. Create a file anywhere under src/.
2. Export something from it.
3. Import it from src/index.js (or from another imported module).

### SASS / SCSS

SASS is enabled via this line in src/index.js:

```js
import "./style.scss";
```

That import is the whole trick: it tells webpack to compile SASS and inject the resulting CSS into the page during dev.

### HTML

static/ is copied into dist/ on build, so static/index.html becomes dist/index.html.

## Project structure

```text
src/
  index.js        # JS entry point (webpack starts here)
  style.scss      # Global styles (imported by index.js)
  alert-box/      # Example ES6 module
  write-text/     # Example ES6 module

static/
  index.html      # Plain HTML template copied to dist/

dist/             # Build output (generated)
```

## Common tweaks

- Change dev server port: edit devServer.port in webpack.config.js.
- Add more static files (images, favicon, etc.): drop them into static/.
