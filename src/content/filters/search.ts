import { removeElement } from "../utils/dom";
import { debug } from "../../utils/debug"

export function filterSearch() {
    if (window.location.pathname !== "/results") {
        return;
    }

    const shelves = document.querySelectorAll<HTMLElement>(
        "grid-shelf-view-model"
    );

    const shortsShelves = [...shelves].filter((shelf) => {
        const title = shelf
        .querySelector("yt-section-header-view-model")
        ?.textContent
        ?.trim();

        return title === "Shorts";
    });

    debug(`Found ${shortsShelves.length} Shorts search shelves`)

    shortsShelves.forEach(removeElement);
    }