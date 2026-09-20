import { getSettings } from "../storage/settings";
import { debug } from "../utils/debug";

const RULESET_ID = "ads";

async function updateAdBlocking(): Promise<void> {
    const settings = await getSettings();

    if (settings.blockAds) {
        await chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: [RULESET_ID],
            disableRulesetIds: [],
        });

        debug("Ad blocking enabled");
        return;
    }

    await chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: [],
        disableRulesetIds: [RULESET_ID],
    });

    debug("Ad blocking disabled")
}

async function initialize(): Promise<void> {
    debug("🐻 BearTube background initializing")

    await updateAdBlocking();

    const settings = await getSettings();

    debug("Background settings.", settings)
}

void initialize();