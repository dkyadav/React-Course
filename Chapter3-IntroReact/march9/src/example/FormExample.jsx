import { useState } from "react"


export default function FEx() {

    // const [name,setName] = useState("");
    // const [age,setAge] = useState(0);

    const [inputs, setInputs] = useState('');

    function handlechange(event) {
        //setInputs(event.target.value);
        const cur_name = event.target.name;
        const cur_val = event.target.value;
        const get_Check_Val = inputs.hobbies;

        if (event.target.type !== "checkbox") {
            setInputs({ ...inputs, [cur_name]: cur_val });
        } else {
            if (event.target.checked) {
                //added hobbies in array
                if (!get_Check_Val)
                    setInputs({ ...inputs, [cur_name]: [cur_val] });
                else {
                    var hobbies_val_arr = get_Check_Val;
                    hobbies_val_arr.push(cur_val);
                    setInputs({ ...inputs, [cur_name]: hobbies_val_arr });
                }
            } else {
                //remove hobby from array
                console.log('remove');
                var new_hobbies = get_Check_Val.filter(v => v != cur_val);
                setInputs({ ...inputs, [cur_name]: new_hobbies });
            }

        }

    }

    function submitform(e){
        e.preventDefault();

        console.log(JSON.stringify(inputs));
    }



    return (
        <>
            <h1>Form example</h1>
            <form onSubmit={submitform}>
                <label>Name</label>
                <input
                    type="text"
                    name="fullname"
                    value={inputs.fullname || ""}
                    onChange={handlechange}
                />
                <br />
                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    value={inputs.age || 0}
                    onChange={handlechange}
                />
                <br />
                <label>Education</label>
                <select name="education" onChange={handlechange}>
                    <option value="">--select one--</option>
                    <option value="10th">10th</option>
                    <option value="10th">12th</option>
                    <option value="Grad">Grad</option>
                    <option value="PG">PG</option>
                </select>

                <br />

                <label>Gender</label>
                <input type="radio" name="gender" value="male" onChange={handlechange} />Male
                <input type="radio" name="gender" value="female" onChange={handlechange} />Female
                <br />

                <label>Hobbies</label>
                <input type="checkbox" name="hobbies" value="Playing" onChange={handlechange} />Playing
                <input type="checkbox" name="hobbies" value="Reading" onChange={handlechange} />Reading
                <input type="checkbox" name="hobbies" value="Singing" onChange={handlechange} />Singing
                <input type="checkbox" name="hobbies" value="Travel" onChange={handlechange} />Travelling

                <input type="submit"/>
            </form>
        </>
    )
}