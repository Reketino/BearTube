import { removeElement } from "../utils/dom";
import { debug } from "../../utils/debug";

export function filterSidebar() {
  const shortsLink = document.querySelector<HTMLAnchorElement>(
    'ytd-guide-entry-renderer a[title="Shorts"]',
  );

  if (!shortsLink) {
    return;
  }

  const sidebarEntry = shortsLink.closest<HTMLElement>(
    "ytd-guide-entry-renderer",
  );

  debug("Found Shorts sidebar entry");

  removeElement(sidebarEntry);
}
