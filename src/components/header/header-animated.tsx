import { useState } from "react";
import { HeaderContent } from "@/components/header/header-content";
import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "motion/react";

export function HeaderAnimated() {
	const [visible, setVisible] = useState(false);
	const { scrollY, scrollYProgress } = useScroll();

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			const previous = scrollYProgress.getPrevious();
			const direction = previous ? current - previous : -1;

			if (scrollY.get() <= 96) {
				setVisible(false);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					"fixed inset-x-0 z-50 bg-ic-black py-4 text-ic-white shadow-xl",
					"mx-auto",
				)}
			>
				<HeaderContent />
			</motion.div>
		</AnimatePresence>
	);
}
