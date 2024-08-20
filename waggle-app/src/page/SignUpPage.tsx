import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JitterText from "../components/common/JitterText";
import HoverButton from "../components/common/HoverButton";

function PasswordInput({ placeholder }: { placeholder: string }) {
	return (
		<div className="flex flex-col w-full items-center">
			<input
				type="password"
				className="w-1/2 h-12 bg-transparent font-DGM text-center text-primary border-b-2 border-b-primary placeholder:text-primary text-2xl focus:outline-none"
				placeholder={placeholder}
			/>
		</div>
	);
}

function SignUpPage() {
	const { t } = useTranslation("Root");
	const navigate = useNavigate();

	return (
		<div className="h-svh flex flex-col bg-[#04142e] p-10">
			<div className="h-5/6 flex flex-col">
				<JitterText
					className="text-[#fff314] font-DGM text-5xl mb-20"
					text={t("header.signUp")}
					duration={0.6}
				/>
				<form className="flex flex-col h-full w-full justify-around items-center">
					<input
						type="email"
						className="w-1/2 h-12 bg-transparent font-DGM text-center text-primary border-b-2 border-b-primary placeholder:text-primary text-2xl focus:outline-none"
						placeholder={t("placeholder.email")}
					/>
					<PasswordInput placeholder={t("placeholder.passphrase")} />
					<input
						type="password"
						className="w-1/2 h-12 bg-transparent font-DGM text-center text-primary border-b-2 border-b-primary placeholder:text-primary text-2xl focus:outline-none"
						placeholder={t("placeholder.passphraseCheck")}
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
					text={t("button.next")}
					className="text-[#fff314] font-DGM text-2xl"
					cb={() => {}}
				/>
			</div>
		</div>
	);
}

export default SignUpPage;
