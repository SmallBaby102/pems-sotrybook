// ############################################################
/**
 * @todo Document this
 */
// ############################################################

import { configureStore } from '@reduxjs/toolkit';

import systemReducer from './system/systemSlice'
import userReducer from './user/userSlice'

const store = configureStore({
    reducer:
        {
            system: systemReducer,
            user: userReducer,
        },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
