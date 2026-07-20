# 🐻 BearTube

**Hide Shorts. Keep Uploads.**

BearTube is a browser extension designed to create a cleaner YouTube experience by removing Shorts content while keeping the videos and uploads you actually want to watch.

Built with React, TypeScript, Vite, and the Chrome Extension Manifest V3 API.

## Features

- Hide Shorts across YouTube
- Hide the Shorts shelf from the YouTube home feed
- Hide Shorts notifications
- Hide Shorts shelves from YouTube search results
- Enable or disable filters from the extension popup
- Settings are synchronized using Chrome Storage
- Automatically filters dynamically loaded YouTube content

## Tech Stack

- React
- TypeScript
- Vite
- CRXJS
- Chrome Extension Manifest V3
- Chrome Storage API
- MutationObserver

## How It Works

BearTube runs a content script on YouTube and observes changes to the DOM using `MutationObserver`.

When YouTube dynamically loads new content, BearTube runs the enabled filters and removes matching Shorts content.

```text
YouTube DOM
    ↓
MutationObserver
    ↓
BearTube Filters
    ├── Shorts
    ├── Shorts Feed
    └── Shorts Notifications
    └── Shorts Search
```

Settings are controlled through the React popup and stored using `chrome.storage.sync`.

## Project Structure

```text
src/
├── content/
│   ├── filters/
│   │   ├── index.ts
│   │   ├── notifications.ts
│   │   ├── search.ts
│   │   ├── shelf.ts
│   │   └── shorts.ts
│   ├── index.ts
│   ├── observer.ts
│   └── storageListener.ts
├── popup/
│   ├── hooks/
│   ├── App.tsx
│   └── main.tsx
├── storage/
│   └── settings.ts
├── types/
│   └── settings.ts
└── utils/
    ├── debug.ts
    └── dom.ts
```

## Development

Clone the repository and install the dependencies:

```bash
npm install
```

Build the extension:

```bash
npm run build
```

The production build will be generated in the `dist` directory.

### Load BearTube in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the generated `dist` directory
5. Open YouTube

After making changes, rebuild the extension and reload it from the Extensions page.

## Roadmap

- [x] Hide Shorts across YouTube
- [x] Hide Shorts feed
- [x] Hide Shorts notifications
- [x] Configurable filters
- [x] Persistent settings
- [ ] Hide Shorts sidebar navigation
- [ ] Block direct Shorts navigation
- [ ] Improve popup UI
- [ ] Add BearTube branding and logo

## Status

BearTube is currently under active development.

Current version: `0.1.0`

## License

License to be determined.