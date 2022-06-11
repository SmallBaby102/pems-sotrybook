// ############################################################
/**
 * @todo Document this
 */
// ############################################################

import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../store";
import {loadUserStoredData, storeIsFirstTime, storeUserId} from "./userThunk";
import {CONST} from "../../const/const";

const initialUserState : any = {
    userId: null,
    email: null,
    isLoggedIn: false,
    isFirstTime: false,

    username : null,
    role: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUserId(state, { payload }) {
            state.userId = payload
        },
        clearUserId(state) {
            state.userId = null
        },
        setEmail(state, { payload }) {
            state.email = payload;
        },
        clearEmail(state, {payload}) {
            state.email = null
        },
        setIsLoggedIn(state, {payload}) {
            state.isLoggedIn = payload
        },
        setIsFirstTime(state, {payload}) {
            state.isFirstTime = payload
        },


        setUsername(state, { payload }) {
            state.username = payload;
        },
        clearUsername(state) {
            state.username = null;
        },
        setRole(state, {payload }) {
            state.role = payload;
        },
        clearRole(state) {
            state.role = null
        }
    },
    extraReducers: (builder) =>{

        builder.addCase(loadUserStoredData.fulfilled, (state,action) =>{
           state.userId = action.payload[CONST.STORAGE.LATEST.USERID.KEY];
           state.isFirstTime = action.payload[CONST.STORAGE.LATEST.FIRST_TIME.KEY] === 'true';
        });

        builder.addCase(storeUserId.fulfilled, (state, action) => {
            state.userId = action.payload;
        });

        builder.addCase(storeIsFirstTime.fulfilled, (state, action) => {
           state.isFirstTime = action.payload;
        });
    }
});

export {
    loadUserStoredData,
    storeUserId,
    storeIsFirstTime
};


export const {
    setUserId,
    clearUserId,
    setEmail,
    clearEmail,
    setIsLoggedIn,
    setIsFirstTime,
    setUsername,
    clearUsername,
    setRole,
    clearRole
} = userSlice.actions;

export const selectUserId = (state: RootState) => state.user.isLoggedIn;
export const selectEmail = (state: RootState) => state.user.email;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectIsFirstTime = (state: RootState) => state.user.isFirstTime;

export const selectUsername = (state: RootState) => state.user.username;
export const selectRole = (state: RootState) =>state.user.role;

export default userSlice.reducer;
