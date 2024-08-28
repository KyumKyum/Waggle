import {
	type ChangeEvent,
	type Dispatch,
	type HTMLInputTypeAttribute,
	type SetStateAction,
	useCallback,
	useRef,
	useState,
} from "react";

import { cls } from "../../utils/cls";
import { useTranslation } from "react-i18next";

interface DebouncedInputProps {
	type: HTMLInputTypeAttribute;
	placeholder: string;
	setValue: Dispatch<SetStateAction<string>>;
	handleValue: (value: string) => Promise<boolean>;
	setMessage: Dispatch<SetStateAction<string>>;
	message: string;
}

const DebouncedInput = ({
	type,
	placeholder,
	setValue,
	handleValue,
	setMessage,
	message,
}: DebouncedInputProps) => {
	const [throttle, setThrottle] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

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
				} else if (!(await handleValue(inputValue))) {
					setError(true);
				} else {
					setError(false);
					setValue(inputValue);
				}
				setThrottle(false);
			}, 500);
		},
		[setValue, handleValue, setMessage],
	);

	return (
		<div className="flex flex-col w-full items-center h-24">
			<input
				type={type}
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
						className={`${cls("font-DGM text-base", error ? "text-error" : "text-primary")}`}
					>
						{message}
					</p>
				)}
			</div>
		</div>
	);
};

export default DebouncedInput;
