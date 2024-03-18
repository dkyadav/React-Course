import { useState } from "react"
import TC from "./third"

export default function SecondComp(props) {
    const [count,setCount] = useState(2);
    return (
        <>
            {/* <h1>Second FC {count}</h1> */}
            <hr/>
            <h1>Second FC parent counter: {props.firstCounter}</h1>
            <h1>Second FC self counter: {count}</h1>
            <button onClick={()=>props.changefn()}>Incr Parent Count +</button>
            
            <button onClick={()=>setCount(count=>count+1)}>Incr Current State Count +</button>
            <hr/>
            <TC counter={count}/>

        </>
    )
}