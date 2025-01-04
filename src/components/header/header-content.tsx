import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function HeaderContent() {
    const pathname = usePathname();

    return (
        <div className="mx-auto flex min-w-full items-center justify-between">
            <Link href={"/"}>
                <Image
                    src={"/brand/logo.svg"}
                    alt="logo"
                    width={40}
                    height={40}
                    className="aspect-square object-cover"
                />
            </Link>

            <div className="flex flex-row space-x-8">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.link}
                        href={item.link}
                        className={cn(
                            "relative flex items-center space-x-2 no-underline",
                            pathname === item.link
                                ? "font-medium text-ic-pink"
                                : null,
                            "transition-all hover:text-ic-pink"
                        )}
                    >
                        <span className="text-lg">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const NAV_ITEMS = [
    {
        link: "/about",
        name: "About",
    },
    {
        link: "/board",
        name: "Board",
    },
    {
        link: "/events",
        name: "Events",
    },
    {
        link: "/projects",
        name: "Projects",
    },
    {
        link: "/contact",
        name: "Contact",
    },
];
