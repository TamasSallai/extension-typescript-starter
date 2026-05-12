# Browser Extension Boilerplate

This is a starter repo for creating a browser extension with typescript and react

## Features

- 🚀 TypeScript support
- ⚛️ React popup
- 📦 Webpack bundling
- 🔄 Watch builds during development
- 🌐 Cross-browser support (Chrome & Firefox)
- 🎨 CSS and asset handling
- 🔧 Manifest V3 compliant

## Getting Started

1. Install dependencies: `pnpm install`
2. Development mode:

- For Chrome: `pnpm run dev:chrome`
- For Firefox: `pnpm run dev:firefox`

3. Production build:

- For Chrome: `pnpm run build:chrome`
- For Firefox: `pnpm run build:firefox`

## Loading the extension in Chrome

1. Open Chrome and navigate to chrome://extensions/
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select the dist folder from this project

## Loading the extension in Firefox

1. Open Firefox and navigate to about:debugging
2. Click "This Firefox" in the sidebar
3. Click "Load Temporary Add-on"
4. Select the manifest.json file from the dist folder
