import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import ClassComponent from "./examples/ClassComponent";
import CC from "./examples/ClassComponent";
import CCC,{ SubClassComponent } from "./examples/ClassComponent";

import CCLifeCycle from './examples/CCLifeCycle'

import MainApp from './examples/Hook-useEffect'

import FCFC from './examples/FCLifeCycle';

import School from './examples/BasicFC';

import FCM from './examples/FC_state_list_con_event';

import FE from './examples/FC_forms';

import First from './examples/stateProp/First'

// import RootApp from './RouteMain';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
        <>
		{/* <App /> */}
        {/* <CC/>
        <CCC/>
        <SubClassComponent/> */}

        {/* <CCLifeCycle/>
        <FCFC/>
        <MainApp/>
        <School/> */}
        {/* <FCM/> */}
        {/* <FE/> */}
        {/* <RootApp/> */}
        <First/>
        </>
	</React.StrictMode>
);



// const x = 11;
// root.render(<>
// <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>
// </>);
