import { useState } from "react"
import TC from "./third"

export default function SecondComp(props) {
    const [count,setCount] = useState(props.firstCounter);
    return (
        <>
            {/* <h1>Second FC {count}</h1> */}
            <hr/>
            <h1>Second FC {props.firstCounter}</h1>
            <button onClick={()=>props.change()}>Incr Parent Count +</button>
            <button onClick={()=>setCount(count=>count+1)}>Incr Current State Count +</button>
            <TC counter={count}/>
        </>
    )
}