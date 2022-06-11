
import { Storage } from '@capacitor/storage';

import { createAsyncThunk } from '@reduxjs/toolkit'
import {CONST} from "../../const/const";


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
const _initializeUserV1Storage = async () => {

    let first_time = await Storage.get({ key: CONST.STORAGE.V1.FIRST_TIME.KEY });

    if( first_time.value === null ) {
        await Storage.set({
            key: CONST.STORAGE.V1.FIRST_TIME.KEY,
            value: CONST.STORAGE.V1.FIRST_TIME.DEFAULT
        });
        first_time = await Storage.get({ key: CONST.STORAGE.V1.FIRST_TIME.KEY });
    }

    let userid = await Storage.get({ key: CONST.STORAGE.V1.USERID.KEY });

    if( userid.value === null ) {
        await Storage.set({
            key: CONST.STORAGE.V1.USERID.KEY,
            value: CONST.STORAGE.V1.USERID.DEFAULT
        });
        userid = await Storage.get({ key: CONST.STORAGE.V1.USERID.KEY });
    }

    return {
        [CONST.STORAGE.V1.FIRST_TIME.KEY] : first_time?.value,
        [CONST.STORAGE.V1.USERID.KEY] : userid?.value
    }
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const loadUserStoredData = createAsyncThunk(
    'users/loadUserStoredData',
    async (payload, thunkAPI) => {

        let version = await Storage.get({ key: CONST.STORAGE.LATEST.VERSION.KEY });

        if( version.value === null ) {
            await Storage.set({
                key: CONST.STORAGE.LATEST.VERSION.KEY,
                value: CONST.STORAGE.LATEST.VERSION.VALUE
            });
            version = await Storage.get({ key: CONST.STORAGE.LATEST.VERSION.KEY });
        }

        if( version.value === CONST.STORAGE.V1.VERSION.VALUE ) {

            return _initializeUserV1Storage();
        }
        else {
            console.error("E202203030102: User Storage Initialization Error");
            return _initializeUserV1Storage();
        }

    }
)


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const storeIsFirstTime = createAsyncThunk(
    'user/storeIsFirstTime',
    async (payload : any, thunkAPI) => {
        await Storage.set({
            key: CONST.STORAGE.LATEST.FIRST_TIME.KEY,
            value: payload.toString()
        });
        return payload
    }
);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const storeUserId = createAsyncThunk(
    'user/storeUserId',
    async (payload : any, thunkAPI) => {
        await Storage.set({
            key: CONST.STORAGE.LATEST.USERID.KEY,
            value: payload.toString()
        });
        return payload
    }
);


