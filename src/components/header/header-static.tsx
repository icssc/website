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
                "z-10 w-full max-w-full bg-transparent px-8 pt-10 lg:px-16",
                largeHero ? "absolute top-0 text-ic-white" : "text-ic-black"
            )}
        >
            <HeaderContent />
        </div>
    );
}
