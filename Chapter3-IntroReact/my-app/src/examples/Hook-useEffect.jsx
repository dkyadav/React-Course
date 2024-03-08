import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const DemoComponent = (props) => {
    console.log('******************* DemoComponent MOUNTED | UPDATED: '+props.mypath);
    useEffect(() => {
        return () => {
            console.log('******************* DemoComponent UNMOUNTED '+props.mypath);
        };
    }, []);
    return <div>Demo Component  - {props.mypath} </div>;
};

const HomeComponent = (props) => {
    return <div>Home Component - {props.mypath}</div>;
};

function MainApp() {
    return (

        <BrowserRouter>
            <div>
                <Link to="/">To Home</Link>
                <br />
                <Link to="/aaa">To AAA</Link>
                <br />
                <Link to="/bbb">To BBB</Link>
            </div>
            <Routes>
                <Route path="/aaa" element={<DemoComponent mypath="aaa" />} />
                <Route path="/bbb" element={<DemoComponent mypath="bbb" />} />
                <Route path="/" element={<HomeComponent mypath="root/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainApp;