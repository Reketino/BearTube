import "./App.css";

import { SettingsToggle } from "./components/SettingsToggle";
import { useSettings } from "./hooks/useSettings";

export default function App() {
  const { settings, update } = useSettings();

  if (!settings) {
    return (
      <main className="app">
        <p>Loading settings...</p>
      </main>
    );
  }

  const activeFilters = Object.values(settings).filter(Boolean).length;
  return (
    <main className="app">
      <header className="header">
        <div className="brand">
          <span className="brand-icon" aria-hidden="true">
            🐻
          </span>

          <div>
            <h1>BearTube</h1>
            <p>Hide shorts. Keep Uploads.</p>
          </div>
        </div>

        <span className="version">v0.1</span>
      </header>

      <section className="section">
        <h2>Content filters</h2>

        <div className="settings">
          <SettingsToggle
            title="Hide Shorts"
            description="Remove Shorts content across Youtube"
            checked={settings.hideShorts}
            onChange={(checked) => update("hideShorts", checked)}
          />

          <SettingsToggle
            title="Hide Shorts Feed"
            description="Remove the Shorts shelf from your home feed"
            checked={settings.hideShortsFeed}
            onChange={(checked) => update("hideShortsFeed", checked)}
          />

          <SettingsToggle
            title="Hide Shorts Search"
            description="Remove Shorts shelves from search result"
            checked={settings.hideShortsSearch}
            onChange={(checked) => update("hideShortsSearch", checked)}
          />

          <SettingsToggle
            title="Hide Shorts Notifications"
            description="Remove notifications linking to Shorts"
            checked={settings.hideShortsNotifications}
            onChange={(checked) => update("hideShortsNotifications", checked)}
          />
        </div>
      </section>

      <footer className="footer">
        <span className="status">
          <span className="status-dot" aria-hidden="true" />
          {activeFilters} {activeFilters === 1 ? "filter" : "filters"} active
        </span>

        <span>BearTube v0.1.0</span>
      </footer>
    </main>
  );
}
