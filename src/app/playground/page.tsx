import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Component() {
    const icsVariants = {
        initial: {
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        hover: {
            y: "-87.5%",
            width: "0",
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const sVariants = {
        initial: {
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        hover: {
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    const cVariants = {
        initial: {
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        hover: {
            transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
        },
    };

    const wordVariants = {
        initial: {
            x: 0,
            maxWidth: 0,
            width: 0,
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        hover: {
            x: 0,
            marginLeft: "0.0375em",
            marginRight: "0.0375em",
            width: "fit-content",
            maxWidth: "1000px",
            opacity: 1,
            transition: { duration: 0.75, delay: 0.5, ease: "easeInOut" },
        },
    };

    return (
        <div className="h-[100dvh] w-[100dvw] max-w-[1728px] overflow-hidden bg-white p-[10px]">
            <div className="flex h-full flex-col justify-end rounded-lg bg-black p-[10px]">
                <motion.h1
                    className={cn(
                        "text-ic-pink flex font-semibold leading-[1] tracking-[-0.075em]",
                        "w-full [font-size:_clamp(80px,20vw,225px)] md:[font-size:_clamp(100px,14vw,225px)]"
                    )}
                    initial="initial"
                    whileHover="hover"
                >
                    <motion.span
                        variants={icsVariants}
                        className="w-fit max-w-fit"
                    >
                        ICS
                    </motion.span>

                    <motion.div className="flex flex-row whitespace-nowrap">
                        <div className="flex w-fit max-w-fit whitespace-nowrap">
                            <motion.span variants={sVariants}>S</motion.span>
                            <motion.span variants={wordVariants}>
                                tudent&nbsp;
                            </motion.span>
                        </div>
                        <div className="flex w-fit max-w-fit whitespace-nowrap">
                            <motion.span variants={cVariants}>C</motion.span>
                            <motion.span variants={wordVariants}>
                                ouncil
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.h1>
            </div>
        </div>
    );
}
