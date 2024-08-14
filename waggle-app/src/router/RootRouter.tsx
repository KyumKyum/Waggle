import { BrowserRouter } from "react-router-dom";
import InitPageRouter from "./InitPageRouter";
function RootRouter() {
	return (
		<BrowserRouter>
			<InitPageRouter />
		</BrowserRouter>
	);
}

export default RootRouter;
