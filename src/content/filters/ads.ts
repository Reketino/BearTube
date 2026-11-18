const STYLE_ID = "beartube-ad-filter";

const AD_SELECTORS = [
  "ytd-ad-slot-renderer",
  "ytd-in-feed-ad-layout-renderer",
  "ytd-promoted-sparkles-web-renderer",
  "ytd-display-ad-renderer",
  "ytd-promoted-video-renderer",
  "masthead-ad",
  "#player-ads",
].join(",\n");

export function filterAds(enabled: boolean): void {
  const existingStyle = document.getElementById(STYLE_ID);

  if (!enabled) {
    existingStyle?.remove();
    return;
  }

  if (existingStyle) {
    return;
  }

  const style = document.createElement("style");

  style.id = STYLE_ID;
  style.textContent = `
    ${AD_SELECTORS} {
      display: none !important;
    }
  `;

  (document.head ?? document.documentElement).appendChild(style);
}
