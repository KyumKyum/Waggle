import {
	Routes,
	Route,
	useLocation,
	useNavigationType,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import RootPage from "../page/RootPage";
import SignUpPage from "../page/SignUpPage";
import "../animation/PageTransition.css";
import SignInPage from "../page/SignInPage";

function InitPageRouter() {
	const location = useLocation();
	return (
		<div className="page">
			<SwitchTransition mode="out-in">
				<CSSTransition
					key={location.pathname}
					classNames={"page-transition-push"}
					timeout={300}
				>
					<Routes location={location}>
						<Route path="/" element={<RootPage />} />
						<Route path="/signUp" element={<SignUpPage />} />
						<Route path="/signIn" element={<SignInPage />} />
					</Routes>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
}

export default InitPageRouter;
