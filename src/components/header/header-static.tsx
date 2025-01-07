import { usePathname } from "next/navigation";
import { HeaderContent } from "@/components/header/header-content";
import { cn } from "@/lib/utils";

export function HeaderStatic() {
    const pathname = usePathname();

    /**
     * Some pages (e.g. home ("/"), about ("/")) have large "splash" hero sections
     * Alternate styles for the header are applied to these pages.
     */
    const largeHero = pathname === "/" || pathname === "/about";

    return (
        <div
            className={cn(
                "z-50 w-full max-w-full bg-transparent pt-10",
                largeHero
                    ? "absolute left-0 top-0 text-ic-white"
                    : "max-w-screen-3xl text-ic-black"
            )}
        >
            <HeaderContent />
        </div>
    );
}
