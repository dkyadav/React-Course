import { useState } from "react";

function FunctionName() {
    //var [counter, setCounter] = useState(0);
    const [counter, setCounter] = useState(0);


    const [student,setStudent] = useState({
        name:"ABC",
        age:20,
        college: "Col name 1"
    })

    function incr(){
        //setCounter(++counter);
        const newcounter = counter + 1;
        //setCounter(()=>counter+2);
        setCounter(newcounter);
    }

    function incrage(){

        setStudent({...student,age:++student.age});
    }

    const {name:studentname,age,college} = student;

    return (
        <>
            <h1>Functional comp</h1>
            <h2> State color is: {counter}</h2>
            <button onClick={incr}>+</button>

            <hr/>
            {studentname}
            <p>{student.name}</p>
            <div>{student.age}</div><br/>
            {student.college}

            <button onClick={incrage}>Increment Age</button>

        </>
    )
}

export default FunctionName;