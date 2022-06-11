// ############################################################
/**
 * Contains the model to hold the events (and perform migrations
 * if it comes the case)
 */
// ############################################################

import {CONST} from "../../const/const";
import {IEventPostInterface } from "./event-post.interface";
import {ModelBaseModel} from "../model-base/model-base.model";
import {IModelBaseModel} from "../model-base/model-base.interface";

const COLLECTIONS_EVENTS_LATEST = CONST.DATA.FIRESTORE.LATEST.COLLECTIONS.EVENT_POSTS;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * Holds the models to store events
 */
export class EventPostModel extends ModelBaseModel implements IModelBaseModel {

    public v: number;
    public id: string | null;
    public type: string;
    public subType: string | null;
    public eventName: string;
    public eventPriceUSD: number;
    public eventStartDate: Date;
    public eventEndDate: Date;
    public isPublished: boolean;
    public isLicensed: boolean;
    public registeredCount: number;
    public registrationAvailableCount: number;
    public registrationCloseDate: Date;


    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * Constructs an instance of the class with an object that adheres to the
     * IEventPostInterface interface
     *
     * @param obj
     * Object that adheres to the IEventPostInterface interface
     */
    public constructor(obj? : IEventPostInterface) {
        super();
        this.id = obj?.id ?? null;
        this.v = obj?.v ?? 1;
        this.type = obj?.type ?? COLLECTIONS_EVENTS_LATEST.FIELDS.TYPE.VALUE.REGULAR;
        this.subType = obj?.subType ?? null;
        this.eventName = obj?.eventName ?? "";
        this.eventPriceUSD = obj?.eventPriceUSD ?? 0;
        this.eventStartDate = obj?.eventStartDate ?? new Date();
        this.eventEndDate = obj?.eventEndDate ?? new Date();
        this.isPublished = obj?.isPublished ?? false;
        this.isLicensed = obj?.isLicensed ?? false;
        this.registeredCount = obj?.registeredCount ?? 0;
        this.registrationAvailableCount = obj?.registrationAvailableCount ?? 0;
        this.registrationCloseDate = obj?.registrationCloseDate ?? new Date();
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * @todo Dcocument this
     */
    static fromFirebaseDoc(doc : any) {

        return new EventPostModel({
            id: doc.id,
            v:doc.data().v,
            eventName: doc.data().eventName,
            type: doc.data().type,
            subType: doc.data().subType,
        })
    }


}
