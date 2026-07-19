import { filterShorts } from "./shorts";
import { filterNotifications } from "./notifications";
import { filterShelf } from "./shelf";

import type { BearTubeSettings } from "../../types/settings";

export function runFilters(settings: BearTubeSettings) {
    if (settings.hideShorts) {
    filterShorts();
    }

    if (settings.hideShortsFeed) {
        filterShelf();
    }

    if (settings.hideShortsNotifications) {
        filterNotifications();
    }
}