import { cls } from "../../utils/cls";

interface LabelInputProps {
	label: string;
	type: string;
	placeholder: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	layoutClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
}

const LabelInput = ({
	label,
	type,
	placeholder,
	onChange,
	layoutClassName,
	labelClassName,
	inputClassName,
}: LabelInputProps) => {
	return (
		<label className={`${cls("form-control", layoutClassName)}`}>
			<div className="label">
				<span className={`${cls("label-text", labelClassName)}`}>{label}</span>
			</div>
			<input
				type={type}
				placeholder={placeholder}
				className={`${cls("input input-bordered input-primary w-full max-w-xs", inputClassName)}`}
				onChange={onChange}
			/>
		</label>
	);
};

export default LabelInput;
