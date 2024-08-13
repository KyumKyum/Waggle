import { cls } from "../../utils/cls";

export interface HoverButtonProps {
	text: string;
	className?: string;
	cb: () => void;
}

const HoverButton = ({ text, className, cb }: HoverButtonProps) => {
	return (
		<button onClick={cb}>
			<span
				className={cls(
					"relative inline-block cursor-pointer p-2",
					"after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-[#fff314] after:text-[#04142e]",
					"after:transition-all after:duration-150",
					"hover:after:h-full",
					"text-[#fff314] hover:text-[#04142e]",
					className,
				)}
			>
				<span className="relative z-10">{text}</span>
			</span>
		</button>
	);
};

export default HoverButton;
