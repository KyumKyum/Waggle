import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JitterText from "../components/common/JitterText";
import HoverButton from "../components/common/HoverButton";
import { useState } from "react";
import DebouncedInput from "../components/signUp/DebouncedInput";
import { checkEmailExistence } from "../server/invokeEmail";
import { validateEmail } from "../utils/regex";

function SignUpPage() {
	const [email, setEmail] = useState<string>("");
	const [emailMessage, setEmailMessage] = useState<string>("");
	const [passwordMessage, setPasswordMessage] = useState<string>("");
	const [checkPasswordMessage, setCheckPasswordMessage] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [checkPassword, setCheckPassword] = useState<string>("");

	const { t } = useTranslation("Root");
	const navigate = useNavigate();

	const handleEmail = async (email: string): Promise<boolean> => {
		if (!validateEmail(email)) {
			setEmailMessage(t("message.error.invalidatedEmail"));
			return false;
		}
		if (!(await checkEmailExistence(email))) {
			setEmailMessage(t("message.error.duplicatedEmail"));
			return false;
		}
		setEmailMessage(t("message.normal.approved"));

		return true;
	};

	const handlePassword = async (password: string): Promise<boolean> => {
		if (password.length <= 6) {
			console.log(password.length);
			setPasswordMessage(t("message.error.shortPassword"));
			return false;
		}

		setPasswordMessage(t("message.normal.approved"));

		return true;
	};

	const handleCheckedPassword = async (password: string): Promise<boolean> => {
		if (checkPassword.length <= 0) {
			setCheckPasswordMessage("");
		} else if (password !== checkPassword) {
			setCheckPasswordMessage(t("message.error.differentPassword"));
			return false;
		}

		setCheckPasswordMessage(t("message.normal.approved"));
		return true;
	};

	return (
		<div className="h-svh flex flex-col bg-[#04142e] p-10">
			<div className="h-5/6 flex flex-col ">
				<JitterText
					className="text-[#fff314] font-DGM text-5xl mb-20"
					text={t("header.signUp")}
					duration={0.6}
				/>
				<form className="flex flex-col h-full w-full justify-around items-center">
					<DebouncedInput
						type="email"
						placeholder={t("placeholder.email")}
						setValue={setEmail}
						handleValue={handleEmail}
						setMessage={setEmailMessage}
						message={emailMessage}
					/>
					<DebouncedInput
						type="password"
						placeholder={t("placeholder.passphrase")}
						setValue={setPassword}
						handleValue={handlePassword}
						setMessage={setPasswordMessage}
						message={passwordMessage}
					/>
					<DebouncedInput
						type="password"
						placeholder={t("placeholder.passphraseCheck")}
						setValue={setCheckPassword}
						handleValue={handleCheckedPassword}
						setMessage={setCheckPasswordMessage}
						message={checkPasswordMessage}
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
