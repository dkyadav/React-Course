import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
const x = 11;

root.render(<>
<h1>{x < 10 ? "Hello" : "Goodbye"}</h1>
</>);
