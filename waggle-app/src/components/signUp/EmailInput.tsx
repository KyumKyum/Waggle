import {
	type ChangeEvent,
	type Dispatch,
	type SetStateAction,
	useCallback,
	useRef,
	useState,
} from "react";

import { cls } from "../../utils/cls";
import { validateEmail } from "../../utils/regex";
import { useTranslation } from "react-i18next";

import { invoke } from "@tauri-apps/api/core";

const EmailInput = ({
	setEmail,
}: { setEmail: Dispatch<SetStateAction<string>> }) => {
	const [throttle, setThrottle] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");

	const { t } = useTranslation("Root");

	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const handleChange = useCallback(
		async (event: ChangeEvent<HTMLInputElement>) => {
			setThrottle(true);
			const inputValue = event.target.value;

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(async () => {
				if (inputValue.length <= 0) {
					setError(false);
					setMessage("");
				} else if (!(await handleEmail(inputValue))) {
					setError(true);
				} else {
					setError(false);
					setEmail(inputValue);
				}
				setThrottle(false);
			}, 500);
		},
		[setEmail],
	);

	const handleEmail = async (email: string): Promise<boolean> => {
		if (!validateEmail(email)) {
			setMessage(t("message.error.invalidatedEmail"));
			return false;
		}
		if (!(await invoke("check_email_dup", { email }))) {
			setMessage(t("message.error.duplicatedEmail"));
			return false;
		}
		setMessage(t("message.normal.approved"));

		return true;
	};

	return (
		<div className="flex flex-col w-full items-center h-24">
			<input
				type="email"
				className={`${cls("w-1/2 h-12 bg-transparent border-b-2 font-DGM text-center text-2xl focus:outline-none", error ? "text-error  border-b-error placeholder:text-error" : "text-primary border-b-primary placeholder:text-primary")}`}
				placeholder={t("placeholder.email")}
				onChange={handleChange}
			/>
			<div className="flex w-1/2 justify-end">
				{throttle ? (
					<span
						className={`${cls("loading loading-dots loading-lg", error ? "text-error" : "text-primary")}`}
					/>
				) : (
					<p
						className={`${cls("font-DGM text-xl", error ? "text-error" : "text-primary")}`}
					>
						{message}
					</p>
				)}
			</div>
		</div>
	);
};

export default EmailInput;
