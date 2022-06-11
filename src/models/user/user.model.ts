// ############################################################
/**
 * Contains the model to hold the events (and perform migrations
 * if it comes the case)
 */
// ############################################################


import {IUserInterface} from "./user.interface";
import {ModelBaseModel} from "../model-base/model-base.model";
import {IModelBaseModel} from "../model-base/model-base.interface";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * Holds the models to store events
 */
export class UserModel extends ModelBaseModel implements IModelBaseModel {

    public v: number;
    public id: string | null;
    public email: string;
    public displayName: string;
    public username: string;
    public createdAt: Date;
    public modifiedAt: Date;

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * Constructs an instance of the class with an object that adheres to the
     * IUserInterface interface
     *
     * @param obj
     * Object that adheres to the IUserInterface interface
     */
    public constructor(obj? : IUserInterface) {
        super();
        this.v = obj?.v ?? 1;
        this.id = obj?.id ?? null;
        this.email = obj?.email ?? "";
        this.displayName = obj?.displayName ?? "";
        this.username = obj?.username ?? "";
        this.createdAt = obj?.createdAt ?? new Date();
        this.modifiedAt = obj?.modifiedAt ?? new Date();
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * @todo Dcocument this
     */
    static fromFirebaseDoc(doc : any) {

        return new UserModel({
            id: doc.id,
            v:doc.data().v,
            email: doc.data().email,
            displayName: doc.data().displayName,
            username: doc.data().username,
            createdAt: doc.data().createdAt,
            modifiedAt: doc.data().modifiedAt,
        })
    }

}
