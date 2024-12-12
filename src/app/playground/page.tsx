// "use client";

// import { useEffect, useState } from "react";
// import { ScreenFitText } from "@/components/playground/screen-fit-text";
// import { cn } from "@/lib/utils";
// import {
//     AnimatePresence,
//     motion,
//     useScroll,
//     useTransform,
// } from "framer-motion";

// export default function Page() {
//     const { scrollY } = useScroll();
//     const [text, setText] = useState("ICSSC");
//     const [foo, setFoo] = useState(0);

//     const opacity = useTransform(
//         scrollY,
//         [window.innerHeight - 440, window.innerHeight - 220],
//         [1, 0]
//     );
//     const translateY = useTransform(
//         scrollY,
//         [window.innerHeight - 440, window.innerHeight - 220],
//         [0, 100]
//     );

//     // Update foo based on scroll position
//     useEffect(() => {
//         return scrollY.on("change", (currentScrollY) => {
//             setFoo(currentScrollY);
//         });
//     }, [scrollY]);

//     return (
//         <div className="flex h-[200dvh] items-end bg-green-500">
//             <div className="h-[220px] w-full overflow-auto">
//                 <div
//                     className={cn("fixed")}
//                     style={{
//                         bottom:
//                             window.innerHeight - 220 > foo
//                                 ? 0
//                                 : 220 - (window.innerHeight - foo),
//                     }}
//                 >
//                     <div
//                         className={cn(
//                             "bg-blue-700 p-2 text-white",
//                             "flex w-full font-semibold leading-[1] tracking-tighter text-ic-pink",
//                             "text-[25vw] leading-[0.85] md:[font-size:_clamp(1500%,1500%,225px)]",
//                             "items-end"
//                         )}
//                     >
//                         ICS
//                         <motion.span
//                             key={"SC"}
//                             style={{
//                                 opacity: opacity,
//                                 y: translateY,
//                             }}
//                         >
//                             SC
//                         </motion.span>
//                     </div>
//                 </div>
//                 <div>
//                     <ScreenFitText>
//                         <div
//                             className={cn(
//                                 "bg-red-700 p-2 text-white",
//                                 "flex w-full font-semibold leading-[1] tracking-tighter text-ic-pink"
//                             )}
//                         >
//                             Student Council
//                         </div>
//                     </ScreenFitText>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function Page() {}
