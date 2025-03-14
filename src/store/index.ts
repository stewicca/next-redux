import {configureStore} from "@reduxjs/toolkit";
import asyncActionMiddleware from "@/store/middlewares/asyncActionMiddleware";
import uiReducer from "@/store/slices/uiSlice";
import todoReducer from "@/store/slices/todoSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            ui: uiReducer,
            todo: todoReducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(asyncActionMiddleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
