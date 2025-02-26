"use client";

import { HeaderAnimated } from "@/components/header/header-animated";
import { HeaderStatic } from "@/components/header/header-static";

export function Header() {
	return (
		<header className="mx-auto w-full max-w-screen-3xl">
			<HeaderAnimated />
			<HeaderStatic />
		</header>
	);
}
