import { getSettings } from "../storage/settings";
import { debug } from "../utils/debug";

async function initialize() {
    debug("🐻 BearTube background initializing")

    const settings = await getSettings();

    
}