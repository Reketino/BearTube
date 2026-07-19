import { removeElement } from "../utils/dom";
import { debug } from "../../utils/debug";

export function filterShelf() {
    const shelves = document.querySelectorAll<HTMLElement>(
        "ytd-rich-shelf-renderer[is-shorts]"
    );

    debug(`Found ${shelves.length} Shorts shelves`);

    shelves.forEach((shelf) => {
        const section = shelf.closest<HTMLElement>(
            "ytd-rich-section-renderer"
        );

        removeElement(section);
    })
}