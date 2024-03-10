import { useEffect } from "react";
import { useState } from "react"

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

export default function UE() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(100);

    //called everytime
    // useEffect(()=>{
    //     console.log(`Comp rendered eseEffect called: ${count}`);
    // });

    //called once upon page load
    useEffect(()=>{
        console.log(`Comp rendered eseEffect called: ${count}`);

        //on unmount or cleanup
        return () => {
            console.log(' component UNMOUNTED');
        };

    },[]);

    //called when binded
    // useEffect(()=>{
    //     console.log(`Comp rendered eseEffect called: ${count}`);
    // },[count1]);

    function MainPge(){
        return(
            <h1>main page</h1>
        )
    }

    function SubPage(){

        useEffect(()=>{
            console.log('use effect of sub page called');

            return () => {
                console.log('unmounted sub page');
              };
              
            
        },[]);

        return(
            <h3>sub page</h3>
        )
    }

    return (
        <>
            <h1>Use effect practice</h1>
            <p>Count is: {count}</p>
            <p>Count1 is: {count1}</p>
            <button onClick={()=>setCount(c=>c+1)}>Count +</button>
            <button onClick={()=>setCount1(c=>c+1)}>Count1 +</button>

            <hr/>

            <BrowserRouter>
                <nav>
                    <Link to="/main">main page</Link> | 
                    <Link to="/sub">sub page</Link>

                </nav>

                <Routes>
                    <Route path="/main" element={<MainPge/>}/>
                    <Route path="/sub" element={<SubPage/>}/>
                    
                </Routes>
            </BrowserRouter>
            
        </>
    )
}