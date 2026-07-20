import type { BearTubeSettings } from "../types/settings";

 export const DEFAULT_SETTINGS = {
    hideShorts: true,
    hideShortsFeed: true,
    hideShortsNotifications: true,
    hideShortsSearch: true,
} satisfies BearTubeSettings;

export async function getSettings(): Promise<BearTubeSettings> {
    const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);

    return {
        hideShorts: settings.hideShorts as boolean,
        hideShortsFeed: settings.hideShortsFeed as boolean,
        hideShortsNotifications: settings.hideShortsNotifications as boolean,
        hideShortsSearch: settings.hideShortsSearch as boolean,
    };
}

export async function saveSettings(
    settings: BearTubeSettings,
): Promise<void> {
    await chrome.storage.sync.set(settings);
}

export async function updateSettings(
    updates: Partial<BearTubeSettings>,
): Promise<void> {
    await chrome.storage.sync.set(updates);
}

export async function resetSettings(): Promise<void> {
    await chrome.storage.sync.set(DEFAULT_SETTINGS)
}