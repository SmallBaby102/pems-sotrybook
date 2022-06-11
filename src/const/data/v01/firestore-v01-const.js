
import {DATA_FIRESTORE_V01_USERS} from "./users/firestore-v01-users-const";
import {DATA_FIRESTORE_V01_EVENTS} from "./events/firestore-v01-events-const";
import {DATA_FIRESTORE_V01_EVENT_DETAILS} from "./event-details/firestore-v01-event-details-const";
import {DATA_FIRESTORE_V01_EVENT_STAFF} from "./event-staff/firestore-v01-event-staff-const";
import {DATA_FIRESTORE_V01_EVENT_POSTS} from "./event-posts/firestore-v01-event-posts-const";
import {DATA_FIRESTORE_V01_EVENT_PRIZE_LIST} from "./event-prize-list/firestore-v01-event-prize-list-const";
import {DATA_FIRESTORE_V01_EVENT_SCORING} from "./event-scoring/firestore-v01-event-scoring-const";
import {DATA_FIRESTORE_V01_EVENT_FEES} from "./event-fees/firestore-v01-event-fees-const";
import {DATA_FIRESTORE_V01_EVENT_PAPERWORK} from "./event-paperwork/firestore-v01-event-paperwork-const";
import {DATA_FIRESTORE_V01_EVENT_SPONSORS} from "./event-sponsors/firestore-v01-event-sponsors-const";
import {DATA_FIRESTORE_V01_EVENT_SCHEDULING} from "./event-scheduling/firestore-v01-event-scheduling-const";
import {DATA_FIRESTORE_V01_EVENT_VENDORS} from "./event-vendors/firestore-v01-event-vendors-const";
import {DATA_FIRESTORE_V01_USER_PROFILES} from "./user-profiles/firestore-v01-user-profiles-const";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const DATA_FIRESTORE_V01_CONST = {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    COLLECTIONS : {

        EVENTS:{
            ...DATA_FIRESTORE_V01_EVENTS
        },

        EVENT_POSTS: {
            ...DATA_FIRESTORE_V01_EVENT_POSTS
        },

        EVENT_DETAILS : {
            ...DATA_FIRESTORE_V01_EVENT_DETAILS
        },

        EVENT_STAFF : {
            ...DATA_FIRESTORE_V01_EVENT_STAFF
        },

        EVENT_PRICE_LISTS: {
            ...DATA_FIRESTORE_V01_EVENT_PRIZE_LIST
        },

        EVENT_SCORING: {
            ...DATA_FIRESTORE_V01_EVENT_SCORING
        },

        EVENT_SCHEDULING: {
            ...DATA_FIRESTORE_V01_EVENT_SCHEDULING
        },

        EVENT_FEES: {
            ...DATA_FIRESTORE_V01_EVENT_FEES
        },

        EVENT_PAPERWORK: {
            ...DATA_FIRESTORE_V01_EVENT_PAPERWORK
        },

        EVENT_SPONSORS: {
            ...DATA_FIRESTORE_V01_EVENT_SPONSORS
        },

        EVENT_VENDORS: {
            ...DATA_FIRESTORE_V01_EVENT_VENDORS,
        },

        USERS: {
            ...DATA_FIRESTORE_V01_USERS
        },

        USER_PROFILES: {
            ...DATA_FIRESTORE_V01_USER_PROFILES
        },

    },

}
