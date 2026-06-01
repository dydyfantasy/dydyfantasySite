import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Reveal({ children, delay = 0, className = "" }) {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: false,
		amount: 0.25,
	});

	return (
		<motion.div
			ref={ref}
			animate={
				isInView
					? {
							opacity: 1,
							y: 0,
							scale: 1,
							filter: "blur(0px)",
						}
					: {
							opacity: 0,
							y: 80,
							scale: 0.96,
							filter: "blur(8px)",
						}
			}
			transition={{
				duration: 0.85,
				delay: isInView ? delay : 0,
				ease: [0.16, 1, 0.3, 1],
			}}
			className={className}>
			{children}
		</motion.div>
	);
}
