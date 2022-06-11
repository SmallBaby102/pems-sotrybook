// ############################################################
/**
 * Contains an interface to store the event post
 */
// ############################################################

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * Contains an interface to hold event posts
 */
export interface IEventPostInterface {
    id?: string;
    v?: number;
    type?: string;
    subType?: string;
    eventName?: string;
    eventPriceUSD?: number;
    eventStartDate?: Date;
    eventEndDate?: Date;
    isPublished?: boolean;
    isLicensed?: boolean;
    registeredCount?: number;
    registrationAvailableCount?: number;
    registrationCloseDate?: Date;
}
