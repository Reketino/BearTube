import { getSettings } from "../storage/settings";
import { debug } from "../utils/debug";

const RULESET_ID = "ads";

async function updateAdBlocking(): Promise<void> {
  try {
  const settings = await getSettings();
  const shouldBlockAds = settings.enabled && settings.blockAds;

  await chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: [],
    disableRulesetIds: [RULESET_ID],
  });
}
  debug(shouldBlockAds
    ? "ad blocking enabled"
    : "Ad blocking disabled"
  );
}

async function initialize(): void {
  debug("🐻 BearTube background initializing");

  void updateAdBlocking();

  chrome.storage.onChanged.addListener(async (changes, areaName) => {
    if (areaName !== "sync") {
      return;
    }

    if (!changes.enabled && !changes.blockAds) {
      return;
    }

    debug("Block Ads setting changed");

    void updateAdBlocking();
  });
}

void initialize();