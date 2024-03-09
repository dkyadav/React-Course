import { useState } from "react"
import SC from "./Second"

export default function FirstComp() {
    const [fcounter,setFCounter] = useState(1);

    function handleState(){
        setFCounter(fcounter=>fcounter+1);
    }

    return (
        <>
            <h1>First FC - {fcounter}</h1>
            <button onClick={()=>setFCounter(fcounter=>fcounter+1)}>+</button>
            <SC firstCounter={fcounter} change={handleState}/>
            
        </>
    )
}