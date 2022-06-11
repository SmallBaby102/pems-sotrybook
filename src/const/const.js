// ############################################################
/**
 * @todo Document this
 */
// ############################################################

import {RUN_MODE_CONST} from "./run-mode-const";
import {STORAGE_CONST} from "./storage-const";
import {ROUTES_CONST} from "./routes-const";
import {DATA_FIRESTORE_CONST} from "./data/firestore-const";
import {UI_SHOWS_CONST} from "./ui/ui-shows-const";
import {USE_MODE_CONST} from "./use-mode";
import {UI_EVENTS_CONST} from "./ui/ui-events-const";
import {UI_HOME_CONST} from "./ui/ui-home-const";
import {COMPONENTS_CONST} from "./components/components-const";

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const CONST = {
    RUN_MODE: RUN_MODE_CONST,
    USE_MODE: USE_MODE_CONST,
    STORAGE: STORAGE_CONST,
    ROUTES: ROUTES_CONST,
    DATA: {
        FIRESTORE: DATA_FIRESTORE_CONST
    },
    UI: {
        HOME: UI_HOME_CONST,
        UPCOMING_EVENTS : null,
        UPCOMING_FILTERS: null,
        SHOWS: UI_SHOWS_CONST,
        EVENTS: UI_EVENTS_CONST
    },
    COMPONENTS: COMPONENTS_CONST
};


