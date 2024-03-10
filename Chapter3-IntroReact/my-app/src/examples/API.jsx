import { useState } from "react";
import { useEffect } from "react";

export default function API() {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <h3>API content will be displayed below:</h3>
            <hr />
            <p>Total list count: {data.length}</p>
            {/* {data && data.map((v, i, a) => {
                return(
                    <p key={v.id}>{v.title}</p>
                )
            })} */}
            {
                data && data.map(v => <p key={v.id}>{v.title}</p>)
            }
        </>
    )
};