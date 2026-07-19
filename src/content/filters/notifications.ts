import { removeElement } from "../utils/dom";
import { debug } from "../../utils/debug";

export function filterNotifications() {
    const notificationLinks = document.querySelectorAll<HTMLAnchorElement>(
        'a[href*="/shorts/"]'
    )
    debug(`Found ${notificationLinks.length} Shorts notifications`);

    notificationLinks.forEach((link) => {
        const notification = link.parentElement 

        if (
            notification instanceof HTMLElement &&
            notification.tagName === "YTD-NOTIFICATION-RENDERER"
        ) {
        removeElement(notification);
        }
    });
}