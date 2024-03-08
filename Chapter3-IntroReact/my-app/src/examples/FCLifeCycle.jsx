import { useState, useEffect } from "react";

export default function FCCycle() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log("FC => ComponentDidMount")
    }, [total]);


    // equivalent to componentDidUpdate() when count is changed
    // useEffect(()=>{
    //     console.log("FC => ComponentDidMount & ComponentDidUpdate")
    // },[count])

    useEffect(() => {
        return () => {
            console.log("ComponentWillUnmount");
        };
    }, []);

    const change = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        setCount(count => count + 1);
    }

    useEffect(() => {
        console.log("ComponentWillUnmount");
        window.addEventListener('mousemove', () => {});
      
        // returned function will be called on component unmount 
        return () => {
          window.removeEventListener('mousemove', () => {})
        }
      }, [])

    return (
        <>
            <h1>Click to change state: {count}</h1>
            <button onClick={change}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

