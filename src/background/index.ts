import { getSettings } from "../storage/settings";
import { debug } from "../utils/debug";

const RULESET_ID = "ads";

async function updateAdBlocking(): Promise<void> {
    const settings = await getSettings();
}

async function initialize() {
    debug("🐻 BearTube background initializing")

    const settings = await getSettings();

    debug("Background settings.", settings)
}

void initialize();