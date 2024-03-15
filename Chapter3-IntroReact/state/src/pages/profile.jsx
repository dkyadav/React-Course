import { useState } from "react"

export default function Profile({ appst, username, changeEmail }) {
    const [email, setEmail] = useState(appst.profile.email);
    const [showeditemail, setShoweditemail] = useState(false);
    const [phone, setPhone] = useState(appst.profile.phone);
    const [showeditphone, setShoweditphone] = useState(false);

    const [uname, setUname] = useState(appst.profile.name);
    const [showeditName, setShowEditname] = useState(false);

    function handleClick(e, changekey, changevalue) {
        if(changekey === "phone")
            setShoweditphone(!showeditphone);
        else
            setShowEditname(!showeditName);
            
        changeEmail(changekey, changevalue);
    }


    return (
        <>
            <h1>Profile</h1>
            <h3>Name:
                {
                    !showeditName ?
                        <>
                            {username}
                            <button onClick={() => setShowEditname(!showeditName)}>Edit</button>
                        </>
                        :
                        <>
                            <input type="text" onChange={(event) => setUname(event.target.value)} value={uname} />
                            <button onClick={(event) => handleClick(event, 'name', uname)}>Save</button>
                        </>
                    
                }
            </h3>

            <h3>Email:
                {
                    !showeditemail ?
                        <>
                            {email}
                            <button onClick={() => setShoweditemail(!showeditemail)}>Edit</button>
                        </>
                        :
                        <>
                            <input type="text" name="email_txt" onChange={(event) => setEmail(event.target.value)} value={email} />
                            <button onClick={(event) => { setShoweditemail(!showeditemail); changeEmail('email', email) }}>Save</button>
                        </>
                }
            </h3>
            <h3>Phone:
                {
                    !showeditphone ?
                        <>
                            {phone}
                            <button onClick={() => setShoweditphone(!showeditphone)}>Edit</button>
                        </>
                        :
                        <>
                            <input type="text" name="phone_txt" onChange={(event) => setPhone(event.target.value)} value={phone} />
                            <button onClick={(event) => handleClick(event, 'phone', phone)}>Save</button>
                        </>
                }
            </h3>
        </>
    )
};