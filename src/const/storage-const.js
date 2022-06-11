import {USE_MODE_CONST} from "./use-mode";

export const STORAGE_CONST = {
    LATEST: {
        VERSION: {
            KEY: "STORAGE_VERSION",
            VALUE: "V1",
            DEFAULT: "V1"
        },
        DARK_MODE: {
            KEY: "DARK_MODE",
            DEFAULT: "false"
        },
        OFFLINE_MODE: {
            KEY: "OFFLINE_MODE",
            DEFAULT: "false"
        },
        USE_MODE: {
            KEY: "USE_MODE",
            DEFAULT: USE_MODE_CONST.COMPETITOR
        },
        FIRST_TIME: {
            KEY: "FIRST_TIME",
            DEFAULT: "true"
        },
        USERID: {
            KEY: "USERID",
            DEFAULT: ""
        },

    },
    V1 : {
        VERSION: {
            KEY: "STORAGE_VERSION",
            VALUE: "V1",
            DEFAULT: "V1"
        },
        DARK_MODE: {
            KEY: "DARK_MODE",
            DEFAULT: "false"
        },
        OFFLINE_MODE: {
            KEY: "OFFLINE_MODE",
            DEFAULT: "false"
        },
        USE_MODE: {
            KEY: "USE_MODE",
            DEFAULT: USE_MODE_CONST.COMPETITOR
        },
        FIRST_TIME: {
            KEY: "FIRST_TIME",
            DEFAULT: "true"
        },
        USERID: {
            KEY: "USERID",
            DEFAULT: ""
        },
    }
}
