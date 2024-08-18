import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JitterText from "../components/common/JitterText";
import HoverButton from "../components/common/HoverButton";

function SignUpPage() {
	const { t } = useTranslation("Root");
	const navigate = useNavigate();

	return (
		<div className="h-svh flex flex-col bg-[#04142e] p-10">
			<div className="h-5/6 flex flex-col">
				<JitterText
					className="text-[#fff314] font-DGM text-6xl"
					text={t("header.signUp")}
					duration={0.6}
				/>
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
					text={t("button.next")}
					className="text-[#fff314] font-DGM text-2xl"
					cb={() => {}}
				/>
			</div>
		</div>
	);
}

export default SignUpPage;
