//The useRef Hook allows you to persist values between renders.
//It can be used to store a mutable value that does not cause a re-render when updated.
//It can be used to access a DOM element directly.

import { useEffect, useRef } from "react";
import { useState } from "react";

const UseRefFn = () => {

    const [inpval, setinpval] = useState("");
    const ref_obj = {
        name: "Deepak",
        totalrender: 0
    };
    const useRefRet = useRef(ref_obj);

    useEffect(() => {
        useRefRet.current.totalrender += 1;
        console.log(`Called useeffect`);
    });

    const inpElemRef = useRef();


    function focusme() {
        inpElemRef.current.focus();
    }

    const savestateref = useRef();
    const state_history = useRef([]);

    function getvalue() {
        console.log(inpElemRef.current.value);
    }

    function updatestate() {
        state_history.current.push(savestateref.current.value);
        //setinpval(savestateref.current.value);
        console.log(state_history.current);
    }

    return (
        <>
            <h1>Use Ref </h1>
            <input type="text" value={inpval} onChange={(event) => setinpval(event.target.value)} />
            <p>Render Count: {useRefRet.current.totalrender} for {useRefRet.current.name}</p>

            <hr />
            <h3>Manipulate/access direct Dom</h3>
            <input type="text" ref={inpElemRef} />
            <button onClick={focusme}>Focus ref input</button>
            <button onClick={getvalue}>Get value ref input</button>

            <hr />
            <h3>Track previos state</h3>
            <input type="text" ref={savestateref}></input>
            <button onClick={updatestate}>Append To Ref</button>
            <br/>
            Total length of history: {state_history.current.length}
            {
                state_history.current.map((v, i) => {
                    return (
                        <p key={i}>{v}</p>
                    )
                })
            }

        </>
    )
}

export default UseRefFn;