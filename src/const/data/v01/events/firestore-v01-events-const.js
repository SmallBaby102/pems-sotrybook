
export const DATA_FIRESTORE_V01_EVENTS = {
    NAME: "v01_events",

    FIELDS: {

        VERSION: {
            KEY: "v",
            DEFAULT: 1
        },

        TYPE: {
            KEY: "type",
            VALUE: {
                REGULAR: "regular",
                COMPETITION: "competition",
            }
        },

        SUBTYPE: {
            KEY: "subtype",
            VALUE: {
                SHOW_JUMPING: "show_jumping",
                EVENTING: "eventing",
                DRESSAGE: "dressage",
                HUNTER_JUMPER: "hunter_jumper"
            }
        },

        IS_LICENSED: {
            KEY: "isLicensed"
        },

        REGISTERED: {
            KEY: "registeredNumber"
        },

        REGISTRATION_CLOSE_DATE: {
            KEY: "registrationCloseDate"
        },

        SALES: {
            KEY: "sales"
        }
    }
}
