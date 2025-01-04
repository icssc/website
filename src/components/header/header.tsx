"use client";

import { HeaderAnimated } from "@/components/header/header-animated";
import { HeaderStatic } from "@/components/header/header-static";

export function Header() {
    return (
        <header className="mx-auto w-screen-3xl max-w-screen-3xl">
            <HeaderAnimated />
            <HeaderStatic />
        </header>
    );
}
