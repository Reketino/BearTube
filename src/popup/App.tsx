import "./App.css";

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
  return (
    <main className="app">
      <header className="header">
        <h1>🐻 BearTube</h1>
        <p>Hide shorts. Keep Uploads.</p>
      </header>

      <section className="section">
        <h2>Content</h2>

        <label className="toggle">
          <input 
          type="checkbox"
          checked={settings.hideShorts}
          onChange={(event) => 
            update("hideShorts", event.target.checked)
          } 
           />
          <span>Hide Shorts</span>
        </label>

        <label className="toggle">
             <input 
          type="checkbox"
          checked={settings.hideShortsFeed}
          onChange={(event) => 
            update("hideShortsFeed", event.target.checked)
          } 
           />
          <span>Hide Shorts Feed</span>
        </label>

        <label className="toggle">
             <input 
          type="checkbox"
          checked={settings.hideShortsNotifications}
          onChange={(event) => 
            update("hideShortsNotifications", event.target.checked)
          } 
           />
          <span>Hide Shorts Notifications</span>
          </label>

             <label className="toggle">
             <input 
          type="checkbox"
          checked={settings.hideShortsSearch}
          onChange={(event) => 
            update("hideShortsSearch", event.target.checked)
          } 
           />
          <span>Hide Shorts Search</span>
        </label>
         </section>

        <footer>BearTube v0.1.0</footer>
     
    </main>
  );
}
