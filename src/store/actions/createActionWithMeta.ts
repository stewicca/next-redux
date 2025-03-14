import {AsyncThunkPayloadCreator, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "@/store";

type CreateActionWithMetaOptions = {
    conditionKey?: string;
    metaType?: string;
};

const createActionWithMeta = <Returned, ThunkArg>(
    typePrefix: string,
    asyncFunction: AsyncThunkPayloadCreator<Returned, ThunkArg, { state: RootState }>,
    options: CreateActionWithMetaOptions = {}
) =>
    createAsyncThunk<Returned, ThunkArg, { state: RootState }>(
        typePrefix,
        asyncFunction,
        {
            condition: (_, {getState}) => {
                if (!options.conditionKey) return true;
                const {ui} = getState();
                return !ui[options.conditionKey];
            },
            getPendingMeta: () => {
                if (!options.metaType) return {};
                return {type: options.metaType};
            },
        }
    );

export default createActionWithMeta;
