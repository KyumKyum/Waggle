import React from "react";
import ReactDOM from "react-dom/client";
import loadTranslator from "./locales";
import RootRouter from "./router/RootRouter";

loadTranslator();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RootRouter />
	</React.StrictMode>,
);
