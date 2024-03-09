import { useState } from "react"
import TC from "./third"

export default function SecondComp(props) {
    const [count,setCount] = useState(props.firstCounter);
    return (
        <>
            {/* <h1>Second FC {count}</h1> */}
            {/* <button onClick={()=>setCount(count=>count+1)}>+</button> */}
            <h1>Second FC {props.firstCounter}</h1>
            <button onClick={()=>props.change()}>+</button>
            
            <TC counter={count}/>
        </>
    )
}