import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JitterText from "../components/common/JitterText";

function SignInPage() {
	const { t } = useTranslation("Root");
	const navigate = useNavigate();

	return (
		<div className="h-svh flex flex-col bg-[#04142e] p-10">
			<div className="h-5/6 flex flex-col">
				<JitterText
					className="text-[#fff314] font-DGM text-6xl"
					text={t("header.signIn")}
					duration={0.6}
				/>
			</div>
			<div className="h-1/6 w-full flex flex-row items-end justify-between">
				<button
					type="button"
					onClick={() => {
						navigate(-1);
					}}
				>
					<h6 className="text-[#fff314] font-DGM text-2xl">
						{t("button.back")}
					</h6>
				</button>
				<button
					type="button"
					// onClick={() => {
					// 	navigate("/");
					// }}
				>
					<h6 className="text-[#fff314] font-DGM text-2xl">
						{t("button.login")}
					</h6>
				</button>
			</div>
		</div>
	);
}

export default SignInPage;
