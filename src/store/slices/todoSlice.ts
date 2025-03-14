import {createSlice} from '@reduxjs/toolkit';
import {getAllTodoAction} from "@/store/actions/todoAction";

const initialState = {
    todos: [],
    selectedTodo: null,
};

const todoSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        setSelectedTodo: (state, action) => {
            state.selectedTodo = action.payload;
        },
        clearSelectedTodo: (state) => {
            state.selectedTodo = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllTodoAction.fulfilled, (state, action) => {
            state.todos = action.payload || [];
        });
    },
});

export const {setSelectedTodo, clearSelectedTodo} = todoSlice.actions;
export default todoSlice.reducer;
