import { useState, useEffect } from "react";

export default function FCCycle() {
    const [count, setCount] = useState(0);
    const [student, setStudent] = useState({
        name: "stu1",
        subjects: ["science", "maths"],
        age: 20,
        parents: { 
            father: "father name",
            mother: "mother name" 
        },
        address: "123 main street"
    })

    useEffect(() => {
        console.log("FC => ComponentDidMount")
    }, [])

    const change = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Click to change state: {count}</h1>
            <button onClick={change}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <hr/>
            <h2>Student List</h2>
            
        </>
    )
}
