/*
useReducer(fn <reducer>, <initialState>)
The reducer function contains your custom logic to change initial state provided. 
Reducer function usually have two arguments. 1)state 2)action
The useReducer Hook returns the current state and a dispatch method.
*/

import { useReducer } from "react";

export default function UR() {

    const [todos, actionafn] = useReducer(red, initialTodos);

    const handleComplete = (todo) => {
        actionafn({ type: "COMPLETE123", id: todo.id });
    };

    return (
        <>
            <h1>useReducer example</h1>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    )
}

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: true,
    },
    {
        id: 3,
        title: "Todo 3",
        complete: false,
    },
];

//It takes two arguments, the current state and the action object, and it returns the next state
const red = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            let new_state = state.map((todo) => {
                if (todo.id === action.id) {
                    //console.log(todo);
                    return { ...todo, complete: !todo.complete, title:'new title'+action.id };
                } else {
                    return todo;
                }
            });
            return new_state;
        default:
            return state;
    }
    
};