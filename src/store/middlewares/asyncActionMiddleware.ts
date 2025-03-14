import {Middleware} from "@reduxjs/toolkit";
import {error, loading, success} from "../slices/uiSlice";

type AsyncActionMeta = {
    type?: "fetching" | "submitting";
};

type AsyncAction = {
    type: string;
    meta?: AsyncActionMeta;
    payload?: {
        response?: {
            data?: {
                message?: string;
            };
        };
        message?: string;
    };
};

const asyncActionMiddleware: Middleware = ({dispatch}) => next => action => {
    if (typeof action !== "object" || action === null || !("type" in action)) {
        return next(action);
    }

    const typedAction = action as AsyncAction;

    if (typedAction.type.endsWith("/pending")) {
        const actionType = typedAction.meta?.type || "fetching";
        dispatch(loading({type: actionType}));
    }
    if (typedAction.type.endsWith("/fulfilled")) {
        const actionType = typedAction.meta?.type || 'fetching';
        dispatch(success());
    }
    if (typedAction.type.endsWith("/rejected")) {
        const actionType = typedAction.meta?.type || 'fetching';
        const errorMessage =
            typedAction.payload?.response?.data?.message ||
            typedAction.payload?.message ||
            "Unexpected error occurred";
        dispatch(error({errorMessage}));
    }

    return next(action);
};

export default asyncActionMiddleware;
