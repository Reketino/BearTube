import { getSettings } from "../storage/settings";
import { startObserver } from "./observer";
import { initializeStorageListener } from "./storageListener";
import { debug } from "../utils/debug";

async function initialize() {
  debug("🐻 BearTube initializing");

  initializeStorageListener();

  const settings = await getSettings();
  debug(" Settings:", settings);

  const hasActiveFilters =
    settings.hideShorts ||
    settings.hideShortsFeed ||
    settings.hideShortsNotifications;

  if (hasActiveFilters) {
    startObserver();
  }
}

void initialize();
