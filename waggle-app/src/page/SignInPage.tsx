import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JitterText from "../components/common/JitterText";
import HoverButton from "../components/common/HoverButton";
import LabelInput from "../components/common/LabelInput";

function SignInPage() {
	const { t } = useTranslation("Root");
	const navigate = useNavigate();

	return (
		<div className="h-svh flex flex-col bg-[#04142e] p-10">
			<div className="h-5/6 flex flex-col">
				<JitterText
					className="text-[#fff314] font-DGM text-5xl mb-20"
					text={t("header.signIn")}
					duration={0.6}
				/>
				<form className="flex flex-col h-full w-full justify-around items-center">
					<input
						className="w-1/2 h-12 bg-transparent font-DGM text-center text-[#fff314] border-b-2 border-b-[#fff314] placeholder:text-[#fff314] text-2xl focus:outline-none"
						placeholder={t("placeholder.signInEmail")}
					/>
					<input
						className="w-1/2 h-12 bg-transparent font-DGM text-center text-[#fff314] border-b-2 border-b-[#fff314] placeholder:text-[#fff314] text-2xl focus:outline-none"
						placeholder={t("placeholder.signInPassphrase")}
					/>
				</form>
			</div>
			<div className="h-1/6 w-full flex flex-row items-end justify-between">
				<HoverButton
					text={t("button.back")}
					className="text-[#fff314] font-DGM text-2xl"
					cb={() => {
						navigate(-1);
					}}
				/>
				<HoverButton
					text={t("button.login")}
					className="text-[#fff314] font-DGM text-2xl"
					cb={() => {}}
				/>
			</div>
		</div>
	);
}

export default SignInPage;
