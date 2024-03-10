import React123 from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import DCC,{SubClassComp} from './ClassComp'
// import {SubClassComp} from './ClassComp'

import FCB from './example/FCbasic'

import FEx from './example/FormExample';

import UE from './example/hooks/UseEffect';

import MR from './RouterMain';
import ApiCall from './example/APIcall';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React123.StrictMode>
    {/* <App /> */}
    {/* <DCC test="1234"/>
    <SubClassComp/> */}
    {/* <FCB/> */}
    {/* <FEx/> */}
    {/* <UE/> */}
    {/* <MR/> */}
    <ApiCall/>
  </React123.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
