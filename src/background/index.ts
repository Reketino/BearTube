import { getSettings } from "../storage/settings";
import { debug } from "../utils/debug";

const RULESET_ID = "ads";

async function updateAdBlocking(): Promise<void> {
    const settings = await getSettings();

    if (settings.blockAds) {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: [RULESET_ID],
            disableRulesetIds: [],
        })
    }
}

async function initialize() {
    debug("🐻 BearTube background initializing")

    const settings = await getSettings();

    debug("Background settings.", settings)
}

void initialize();