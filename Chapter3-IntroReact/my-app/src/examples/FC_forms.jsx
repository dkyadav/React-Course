import { useState } from "react"

export default function FormExample() {

    const style_margin = {
        margin: "15px"
    }

    const [inputs, setInputs] = useState('');

    function submitme(e){
        e.preventDefault();
        console.log(inputs);
        console.log(JSON.stringify(inputs));
    }

    function handleChange(event){
        const curName = event.target.name;
        const curValue= event.target.value;
        setInputs({...inputs,[curName]:curValue});
    }

    function handleCheck(event){
        const name = event.target.name;
        const value = event.target.value;
        const isChecked = event.target.checked;
        var get_Check_Val = inputs.hobbies;
        
        if(isChecked){
            //added hobbies in array
            if(!get_Check_Val)
                setInputs({...inputs,[name]:[value]});
            else{
                var hobbies_val_arr = get_Check_Val;
                hobbies_val_arr.push(value);
                setInputs({...inputs,[name]:hobbies_val_arr});
            }
        } else{
            //remove hobby from array
            console.log('remove');
            var new_hobbies = get_Check_Val.filter(v=>v!=value);
            setInputs({...inputs,[name]:new_hobbies});
        }

    }

    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={submitme}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="fullname" 
                    value={inputs.fullname || ""} 
                    onChange={handleChange}
                    style={{"margin":"10px"}}
                />
                <br/>
                <label>Age</label>
                <input 
                    type="text" 
                    name="age" 
                    value={inputs.age || ""} 
                    onChange={handleChange}
                    style={style_margin}
                />

                <br/>
                <label>Education</label>
                <select name="education" onChange={handleChange} style={style_margin}>
                    <option value="">--Select--</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Grad">Grad</option>
                    <option value="post-grad">Post-Grad</option>
                </select>

                <br/>
                <label>Gender</label>
                <input type="radio" name="gender" value="male" onChange={handleChange}/>Male 
                <input type="radio" name="gender" value="female" onChange={handleChange}/>Female 
                
                <br/><br/>
                <label>Hobbies</label><br/>
                <input type="checkbox" name="hobbies" value="playing" onChange={handleCheck}/>Playing, 
                <input type="checkbox" name="hobbies" value="reading" onChange={handleCheck}/>Reading,  
                <input type="checkbox" name="hobbies" value="travel" onChange={handleCheck}/>Traveling,  
                <input type="checkbox" name="hobbies" value="singing" onChange={handleCheck}/>Singing, 

                <br/>
                <label>AboutMe</label>
                <textarea 
                    name="aboutme" 
                    style={style_margin} 
                    onChange={handleChange}
                    value={inputs.aboutme||""}
                    rows="5"
                    cols={20}
                ></textarea>
                <br/>
                <input type="submit" name="submit" value="submit" style={style_margin}/>
            </form>
        </>
    )
}