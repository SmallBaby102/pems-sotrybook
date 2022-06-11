// ############################################################
/**
 * Contains the model to hold the events (and perform migrations
 * if it comes the case)
 */
// ############################################################

import { cloneDeep } from 'lodash';

import {IEventInterface} from "./event.interface";
import {CONST} from "../../const/const";

const COLLECTIONS_EVENTS_LATEST = CONST.DATA.FIRESTORE.LATEST.COLLECTIONS.EVENTS;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * Holds the models to store events
 */
export class EventModel {

    public v: number;
    public id: string | null;
    public type: string;
    public briefDescription: string;

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * Constructs an instance of the class with an object that adheres to the
     * IEventsInterface interface
     *
     * @param obj
     * Object that adheres to the IEventsInterface interface
     */
    public constructor(obj? : IEventInterface) {
        this.v = obj?.v ?? 1;
        this.id = obj?.id ?? null;
        this.type = obj?.type ?? COLLECTIONS_EVENTS_LATEST.FIELDS.TYPE.VALUE.REGULAR;
        this.briefDescription = obj?.type ?? "";
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * Makes a copy of the object.
     */
    cloneDeep() {
        return cloneDeep(this);
    }
}
