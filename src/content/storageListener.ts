import { getSettings } from "../storage/settings";
import { startObserver, stopObserver } from "./observer";
import { debug } from "../utils/debug";

export function initializeStorageListener() {
    chrome.storage.onChanged.addListener(async (changes, areaName) => {
        if (areaName !== "sync") {
            return;
        }
        debug("Settings changed:", changes);

        const settings = await getSettings();

        const hasActiveFilters = 
        settings.hideShorts ||
        settings.hideShortsFeed ||
        settings.hideShortsNotifications;

        if (hasActiveFilters) {
            startObserver();
        } else {
            stopObserver();
        }
    });
    }