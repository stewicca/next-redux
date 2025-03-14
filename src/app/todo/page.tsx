import {getAllTodo} from "@/service";
import TodoClientComponent from "@/features/todo/TodoClientComponent";

export default async function TodoPage() {
    const todos = await getAllTodo();

    return (
        <TodoClientComponent todosData={todos}>
            { todos ? todos.map((todo, index) => <div key={index}>{todo.title}</div>) : <div>Loading,,,</div> }
        </TodoClientComponent>
    );
}
