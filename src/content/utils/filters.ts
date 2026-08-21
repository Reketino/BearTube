import type { BearTubeSettings } from "../../types/settings";

export function hasActiveFilters(settings: BearTubeSettings): boolean {
  return (
    settings.hideShorts ||
    settings.hideShortsFeed ||
    settings.hideShortsNotifications ||
    settings.hideShortsSearch ||
    settings.hideShortsSidebar
  );
}
