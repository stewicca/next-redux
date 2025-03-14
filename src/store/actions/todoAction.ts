import createActionWithMeta from "@/store/actions/createActionWithMeta";

export const getAllTodoAction = createActionWithMeta(
    'todos/getTodos',
    async (payload, thunkAPI) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
    {conditionKey: "isFetching", metaType: "fetching"},
);
