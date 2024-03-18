import { useContext } from "react";
import { createContext, useState } from "react";

const userContext = createContext();

export default function MainFunction() {
    const [uname, setUname] = useState("Deepak");
    
    return (
        <userContext.Provider value={[uname,setUname]}>
            <h1>Main Component {uname}</h1>
            <hr/>
            {/* <Sub1C name={uname}/> */}
            <Sub1C/>
        </userContext.Provider>
    )
}

function Sub1C(props) {
    return (
        <>
            <h2>Sub 1 component</h2>
            {/* <Sub2C name={props.name}/> */}
            <hr/>
            <Sub2C/>

        </>
    )
}

function Sub2C(props) {
    const [uname,setUname] = useContext(userContext);
    
    function changeName(e){
        //console.log('change called')
        const val = e.target.value;
        console.log(e.target.name, val);
        setUname(val);
    }
    return (
        <>
            {/* <h3>Sub 3 component: {props.name}: {user_name}</h3> */}
            <h3>Sub 3 component: {uname}</h3>
            {/* <input onChange={(e)=>changeName(e)} name="from_name"/> */}
            <input onChange={(e)=>setUname(e.target.value)} name="from_name"/>
            {/* <input onChange={changeName} name="from_name"/> */}
        </>
    )
}