import "./App.css";

import { SettingsToggle } from "./components/SettingsToggle";
import { useSettings } from "./hooks/useSettings";

export default function App() {
  const { settings, update, reset } = useSettings();

  if (!settings) {
    return (
      <main className="app">
        <p>Loading settings...</p>
      </main>
    );
  }

  const activeFilters =[ 
    settings.hideShorts,
    settings.hideShortsFeed,
    settings.hideShortsNotifications,
    settings.hideShortsSearch,
    settings.hideShortsSidebar,
   ].filter(Boolean).length;

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

      <section className="master-section">
        <SettingsToggle 
        title="BearTube Enabled"
        description="Enable or disable all BearTube filtering"
        checked={settings.enabled}
        onChange={(checked) => update("enabled", checked)}
        />
      </section>

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
            title="Hide Shorts Sidebar"
            description="Remove Shorts link from the Youtube sidebar"
            checked={settings.hideShortsSidebar}
            onChange={(checked) => update("hideShortsSidebar", checked)}
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
          <span
            className={`status-dot ${
              !settings.enabled || activeFilters === 0 ? "inactive" : ""
            }`}
            aria-hidden="true"
          />
        {settings.enabled
         ? `${activeFilters} ${activeFilters === 1 ? "filter" : "filters"} active`
         : "BearTube disabled"}
        </span>

        <button 
        className="reset-button"
        type="button"
        onClick={() => void reset()}
        >
          Reset
        </button>

        <span>BearTube v0.1.0</span>
      </footer>
    </main>
  );
}
