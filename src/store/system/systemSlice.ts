// ############################################################
/**
 * @todo Document this
 */
// ############################################################

import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../store";
import {loadSystemStoredData, storeDarkMode, storeOfflineMode, storeUseMode} from "./systemThunk";
import {CONST} from "../../const/const";

const initialSystemState : any = {
    darkMode : null,
    offlineMode: false,
    storageVersion: null,
    useMode: CONST.USE_MODE.COMPETITOR
}

const systemSlice = createSlice({
    name: 'system',
    initialState: initialSystemState,
    reducers: {
        setDarkMode(state, { payload }) {
            state.darkMode = payload;
        },
        setOfflineMode(state, {payload}) {
            state.offlineMode = payload
        },
        setStorageVersion(state, {payload}) {
            state.storageVersion = payload
        },
        setUserMode(state, {payload}) {
            state.useMode = payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(loadSystemStoredData.fulfilled,(state, action) => {
            state.storageVersion = action.payload[CONST.STORAGE.LATEST.VERSION.KEY];
            state.darkMode = action.payload[CONST.STORAGE.LATEST.DARK_MODE.KEY] === 'true';
            state.offlineMode = action.payload[CONST.STORAGE.LATEST.OFFLINE_MODE.KEY] === 'true';
        });

        builder.addCase(storeDarkMode.fulfilled, (state, action) => {
            state.darkMode = action.payload
        });

        builder.addCase(storeOfflineMode.fulfilled, (state, action) => {
            state.offlineMode = action.payload
        });

        builder.addCase(storeUseMode.fulfilled, (state, action) => {
            state.useMode = action.payload
        });
    }
});

export {
    loadSystemStoredData,
    storeDarkMode,
    storeOfflineMode,
    storeUseMode,
};

export const {
    setDarkMode,
    setOfflineMode,
    setStorageVersion,
    setUserMode,
} = systemSlice.actions;

export const selectDarkMode = (state: RootState) => state.system.darkMode;
export const selectOfflineMode = (state: RootState) => state.system.offlineMode;
export const selectStorageVersion = (state: RootState) => state.system.storageVersion;
export const selectUseMode = (state:RootState) => state.system.useMode;

export default systemSlice.reducer;
