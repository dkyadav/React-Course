/*
The useCallback and useMemo Hooks are similar. 
The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
*/

import { useState, useCallback } from "react";
import Todos from "./UseCallback_todo";

const UseCB = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo in CB"]);
    }, [todos]);
    
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // }

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default UseCB;

