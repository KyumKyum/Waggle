import {
	type ChangeEvent,
	type Dispatch,
	type SetStateAction,
	useCallback,
	useRef,
	useState,
} from "react";

import { cls } from "../../utils/cls";
import { useTranslation } from "react-i18next";

const PasswordInput = ({
	setPassword,
	placeholder,
	differentPassword,
	differentPasswordErrorMessage,
}: {
	setPassword: Dispatch<SetStateAction<string>>;
	placeholder: string;
	differentPassword: boolean;
	differentPasswordErrorMessage: string;
}) => {
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
				setPassword(inputValue);
				if (inputValue.length <= 0) {
					setError(false);
					setMessage("");
				} else if (!(await handlePassword(inputValue))) {
					setError(true);
				} else if (differentPassword) {
					setError(true);
					setMessage(differentPasswordErrorMessage);
				} else {
					setError(false);
					setMessage("Good :)");
				}
				setThrottle(false);
			}, 500);
		},
		[setPassword, differentPassword, differentPasswordErrorMessage],
	);

	const handlePassword = async (password: string): Promise<boolean> => {
		if (password.length <= 8) {
			setMessage(t("message.error.shortPassword"));
			return false;
		}

		return true;
	};

	return (
		<div className="flex flex-col w-full items-center h-24">
			<input
				type="password"
				className={`${cls("w-1/2 h-12 bg-transparent border-b-2 font-DGM text-center text-2xl focus:outline-none", error ? "text-error  border-b-error placeholder:text-error" : "text-primary border-b-primary placeholder:text-primary")}`}
				placeholder={placeholder}
				onChange={handleChange}
			/>
			<div className="flex w-1/2 justify-end">
				{throttle ? (
					<span
						className={`${cls("loading loading-dots loading-lg", error ? "text-error" : "text-primary")}`}
					/>
				) : (
					<p
						className={`${cls("font-DGM ", error ? "text-base text-error" : "text-xl text-primary")}`}
					>
						{message}
					</p>
				)}
			</div>
		</div>
	);
};

export default PasswordInput;
