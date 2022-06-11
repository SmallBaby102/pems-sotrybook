// ############################################################
/**
 * Contains the model base
 */
// ############################################################

import { cloneDeep } from 'lodash';

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * Holds the models to store events
 */
export class ModelBaseModel {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * Makes a copy of the object.
     */
    toObject() {
        return Object.assign({},this);
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    /**
     * Makes a copy of the object.
     */
    cloneDeep() {
        return cloneDeep(this);
    }
}
