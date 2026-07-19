import { getSettings } from "../storage/settings";
import { runFilters } from "./filters"; 
import { debug } from "../utils/debug";

let observer: MutationObserver | null = null;
let scheduled = false; // Prevent multiple filter runs during the same animation frame 🏃🏻‍➡️

async function runCurrentFilters() {
    const settings = await getSettings();
    runFilters(settings);
}

export function startObserver() {
    if (observer) {
        return;
    }
    debug("Braaaap observer started!");

    observer = new MutationObserver(() => {
        if (scheduled) {
            return;
        }
        scheduled = true;

        requestAnimationFrame(async () => {
            try {
            await runCurrentFilters();
        } finally {
            scheduled = false;
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

   void runCurrentFilters();
}

export function stopObserver() {
    if (!observer) {
        return;
    }
    
    debug("Observer has stopped");
    observer.disconnect();
    observer = null;
    scheduled = false;
}