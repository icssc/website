"use client";

import { HeaderAnimated } from "@/components/header/header-animated";
import { HeaderStatic } from "@/components/header/header-static";

export function Header() {
    return (
        <header>
            <HeaderAnimated />
            <HeaderStatic />
        </header>
    );
}
