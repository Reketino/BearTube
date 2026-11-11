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
    const existingStyles = document.getElementById(STYLE_ID);
}