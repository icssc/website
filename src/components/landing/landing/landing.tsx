"use client";

import Image from "next/image";
import { AnimatedText } from "@/components/landing/landing/animated-text";
import { ScreenFitText } from "@/components/landing/landing/screen-fit-text";
import { cn } from "@/lib/utils";
import foo from "@/public/landing/bonfire.jpeg";

export function Landing() {
    return (
        <div className="mx-auto flex h-[100svh] w-full items-center overflow-hidden">
            <div className="relative h-full w-full overflow-hidden p-3">
                <div className="relative flex h-full min-h-full w-full flex-col justify-end rounded-md bg-black">
                    <div className="relative flex h-full min-h-full w-full max-w-full">
                        <Image
                            src={foo}
                            alt="bonfire"
                            width={2000}
                            height={1000}
                            className={cn(
                                "h-full w-full rounded-md object-cover"
                            )}
                            placeholder="blur"
                        />
                        <div
                            className={cn(
                                "absolute inset-0 w-full rounded-md border-black bg-neutral-800 bg-opacity-60"
                            )}
                        />
                    </div>

                    <ScreenFitText className="flex w-full items-end justify-center font-inter font-bold leading-[0.85] text-ic-pink">
                        <div className="flex flex-col justify-center pb-4 text-left lg:px-8">
                            <div className="hidden flex-col md:flex">
                                <AnimatedText text="ICS" />

                                <AnimatedText text="Student&nbsp;Council" />
                            </div>

                            <div className="md:hidden">
                                <AnimatedText text="ICSSC" />
                            </div>
                        </div>
                    </ScreenFitText>
                </div>
            </div>
        </div>
    );
}
