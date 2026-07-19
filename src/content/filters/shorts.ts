import { removeElement } from "../utils/dom";
import { debug } from "../../utils/debug";

export function filterShorts() {
    const shortsLinks = document.querySelectorAll<HTMLAnchorElement>(
        `a[href*="/shorts/"]`
    );

    debug(` Found ${shortsLinks.length} Shorts`);

    shortsLinks.forEach(removeShort);
    }
    function removeShort(link: HTMLAnchorElement) {
        const card = link.closest<HTMLElement>("ytd-rich-item-renderer");

        removeElement(card);
    }