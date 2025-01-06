"use client";

import { useEffect, useRef } from "react";
import { cancelFrame, frame, type frameData } from "framer-motion";
import { ReactLenis, type LenisRef } from "lenis/react";

// https://github.com/darkroomengineering/lenis/discussions/292#discussioncomment-11660058
type ReactLenisProviderProps = {
    children: React.ReactNode;
};

const ReactLenisProvider = ({ children }: ReactLenisProviderProps) => {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        function update(time: typeof frameData) {
            lenisRef.current?.lenis?.raf(time.timestamp);
        }

        frame.update(update, true);

        const observer = new MutationObserver(() => {
            const isScrollLocked = document.body.dataset.scrollLocked === "1";
            const bodyStyle = document.body.style;

            if (lenisRef.current?.lenis) {
                if (isScrollLocked) {
                    lenisRef.current.lenis.stop();
                    bodyStyle.overflow = "hidden";
                } else {
                    lenisRef.current.lenis.start();
                    bodyStyle.overflow = "";
                }
            }
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["data-scroll-locked"],
        });

        return () => {
            cancelFrame(update);
            observer.disconnect();
        };
    }, []);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                duration: 1.5,
                lerp: 0.15,
                orientation: "vertical",
                gestureOrientation: "vertical",
            }}
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    );
};

export { ReactLenisProvider };
