import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import ClassComponent from "./examples/ClassComponent";
import CC from "./examples/ClassComponent";
import CCC,{ SubClassComponent } from "./examples/ClassComponent";

import CCLifeCycle from './examples/CCLifeCycle'

import MainApp from './examples/Hook-useEffect'

import FCFC from './examples/FCLifeCycle';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
        <>
		{/* <App /> */}
        {/* <CC/>
        <CCC/>
        <SubClassComponent/> */}
        <CCLifeCycle/>
        <FCFC/>
        <MainApp/>
        </>
	</React.StrictMode>
);



// const x = 11;
// root.render(<>
// <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>
// </>);
