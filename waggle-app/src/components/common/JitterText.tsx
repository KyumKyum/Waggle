import { motion } from "framer-motion";
import { cls } from "../../utils/cls";

interface JitteryTextProps {
	text: string;
	duration?: number;
	className?: string;
}

export default function JitterText({
	text,
	duration,
	className,
}: JitteryTextProps) {
	return (
		<div>
			<motion.span
				className={cls("inline-block", className)}
				animate={{
					y: [1.5, 1, -1, 1.5, -1.5, 1, -0.5, 0],
					x: [0, -1, 1.5, -1.5, 1, -1, 0.5, 0],
					rotate: [0.5, -1.5, 1, -1.5, 1, -1, 1, 0],
				}}
				transition={{
					repeat: Infinity,
					repeatDelay: 0.5,
					repeatType: "reverse",
					ease: "easeInOut",
					duration: duration,
				}}
			>
				{text}
			</motion.span>
		</div>
	);
}
