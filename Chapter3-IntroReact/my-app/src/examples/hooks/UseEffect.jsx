import { useEffect } from "react";
import { useState } from "react"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function UF() {

    const [count, setCount] = useState(0);
    const [countSquare, setCountSQ] = useState(count * count);

    //called everytime
    // useEffect(() => {
    //     console.log(`useEffect called: ${count}`);
    // })

    //called once
    useEffect(() => {
        console.log(`useEffect called: ${count}`);

        return () => {
            console.log('RETURN useeffect called when unmounted');
        }
    }, [])

    //called when countSquare is udpated
    useEffect(() => {
        console.log(`useEffect called when countSquare is updated: ${count}`);
    }, [countSquare])



    function incr() {
        setCount(c => count + 1);
        setCountSQ(c => count * count);
    }

    function MainPage() {
        return (
            <h1>Main Page</h1>
        )
    }

    function SubPage() {
        useEffect(()=>{
            console.log('useeffect for sub page called');

            return()=>{
                console.log('Unmount sub page called');
            }
        },[])
        return (
            <h2>Sub Page</h2>
        )
    }

    return (
        <>
            <h1>useEffect example</h1>
            <button onClick={incr}>Count+ {count} and sqaure is {countSquare}</button>

            <BrowserRouter>
                <nav>
                    <Link to="/">main page</Link>
                    <Link to="/sub">sub page</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/sub" element={<SubPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}