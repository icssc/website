"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { PageContainer } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Page() {
	const imageRef = useRef<HTMLImageElement>(null);
	const [flipped, setFlipped] = useState(false);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		const isLeftSide = e.clientX < window.innerWidth / 2;
		setFlipped(isLeftSide);
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	return (
		<PageContainer className="mt-32 flex h-full flex-col items-center justify-center space-y-8">
			<img
				src="/assets/anteater-laptop.png"
				alt="Anteater Laptop"
				width={300}
				height={300}
				ref={imageRef}
				className={cn(
					flipped ? "scale-x-[-1]" : "scale-x-[1]",
					"transition-all delay-75 duration-300",
				)}
			/>

			<div className="flex flex-col items-center">
				<p className="text-balance text-center text-5xl font-semibold tracking-tight">
					Page Not Found
				</p>
				<a href="/">
					<Button variant={"link"}>Return Home</Button>
				</a>
			</div>
		</PageContainer>
	);
}
