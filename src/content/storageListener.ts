import { getSettings } from "../storage/settings";
import { startObserver, stopObserver } from "./observer";
import { hasActiveFilters } from "./utils/filters";
import { debug } from "../utils/debug";

export function initializeStorageListener() {
    chrome.storage.onChanged.addListener(async (changes, areaName) => {
        if (areaName !== "sync") {
            return;
        }
        debug("Settings changed:", changes);

        const settings = await getSettings();

        if (settings.enabled && hasActiveFilters(settings)) {
            startObserver();
        } else {
            stopObserver();
        }
    });
    }