import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import loadTranslator from "./locales";

loadTranslator();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
