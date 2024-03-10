import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";

export default function ApiCall() {

    const [apidata, setapidata] = useState('');

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => setapidata(data))
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setapidata(res.data))
    }, [])

    return (
        <>
            <h1>APi call </h1>

            {
                apidata &&
                apidata.map(v => {
                    return (
                        <div key={v.id}>
                            Id: {v.id}<br />
                            Title: {v.title}<br />
                            Desc: {v.body}<br />
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}