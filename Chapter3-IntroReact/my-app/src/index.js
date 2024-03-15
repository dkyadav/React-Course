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

import RootApp from './RouteMain';

import UE from './examples/hooks/UseEffect';

import UC from './examples/hooks/UseContext'

import UR from './examples/hooks/UseRef'

import API from "./examples/API";

import APIAX from "./examples/API_axios";

import UseReduce from "./examples/hooks/UseReducer";

import UMemo from "./examples/hooks/UseMemo";

import UseCB from "./examples/hooks/UseCallback";

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
        {/* <First/> */}
        {/* <UE/> */}
        {/* <UC/> */}
        {/* <UR/> */}
        {/* <API/> */}
        {/* <APIAX/> */}
        {/* <UseReduce/> */}
        <UMemo/>
        {/* <UseCB/> */}
        </>
	</React.StrictMode>
);



// const x = 11;
// root.render(<>
// <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>
// </>);
