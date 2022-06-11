
import { Storage } from '@capacitor/storage';

import { createAsyncThunk } from '@reduxjs/toolkit'
import {CONST} from "../../const/const";


const _initializeSystemV1Storage = async(version : any | null) => {

    let dark_mode = await Storage.get({ key: CONST.STORAGE.V1.DARK_MODE.KEY });

    if( dark_mode.value === null) {
        await Storage.set({
            key: CONST.STORAGE.V1.DARK_MODE.KEY,
            value: CONST.STORAGE.V1.DARK_MODE.DEFAULT
        });
        dark_mode = await Storage.get({ key: CONST.STORAGE.V1.DARK_MODE.KEY });
    }

    let offline_mode = await Storage.get({ key: CONST.STORAGE.V1.OFFLINE_MODE.KEY });

    if( offline_mode.value === null ) {

        await Storage.set({
            key: CONST.STORAGE.V1.OFFLINE_MODE.KEY,
            value: CONST.STORAGE.V1.OFFLINE_MODE.DEFAULT
        });
        offline_mode = await Storage.get({ key: CONST.STORAGE.V1.OFFLINE_MODE.KEY });
    }

    let use_mode = await Storage.get({ key: CONST.STORAGE.V1.USE_MODE.KEY });

    if( use_mode.value === null ) {

        await Storage.set({
            key: CONST.STORAGE.V1.USE_MODE.KEY,
            value: CONST.STORAGE.V1.USE_MODE.DEFAULT
        });
        offline_mode = await Storage.get({ key: CONST.STORAGE.V1.USE_MODE.KEY });
    }

    return {
        [CONST.STORAGE.V1.VERSION.KEY]: version?.value,
        [CONST.STORAGE.V1.DARK_MODE.KEY] : dark_mode?.value,
        [CONST.STORAGE.V1.OFFLINE_MODE.KEY] : offline_mode?.value,
        [CONST.STORAGE.V1.USE_MODE.KEY]: offline_mode?.value
    }
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const loadSystemStoredData = createAsyncThunk(
    'system/loadSystemStoredData',
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

            return _initializeSystemV1Storage(version);
        }
        else {

            console.error("E202203021122: System Storage Initialization Error");
            return _initializeSystemV1Storage(version);
        }

    }
);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const storeDarkMode = createAsyncThunk(
    'system/storeDarkMode',
    async (payload : any, thunkAPI) => {
        await Storage.set({
            key: CONST.STORAGE.LATEST.DARK_MODE.KEY,
            value: payload.toString()
        });
        return payload
    }
);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const storeOfflineMode = createAsyncThunk(
    'system/storeOfflineMode',
    async (payload : any, thunkAPI) => {
        await Storage.set({
            key: CONST.STORAGE.LATEST.OFFLINE_MODE.KEY,
            value: payload.toString()
        });
        return payload
    }
)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */
export const storeUseMode = createAsyncThunk(
    'system/storeUseMode',
    async (payload : any, thunkAPI) => {
        await Storage.set({
            key: CONST.STORAGE.LATEST.USE_MODE.KEY,
            value: payload.toString()
        });
        return payload
    }
)
