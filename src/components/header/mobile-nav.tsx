import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_DATA } from "@/components/header/nav-data";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";

export function MobileNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Dialog
            open={open}
            onOpenChange={handleClick}
        >
            <DialogTrigger
                className="flex md:hidden"
                asChild
            >
                <Button
                    className="size-10 p-0 px-0 py-0 hover:bg-ic-muted/10"
                    variant={"ghost"}
                >
                    {open ? (
                        <XIcon className="aspect-square size-8 stroke-ic-pink" />
                    ) : (
                        <MenuIcon className="aspect-square size-8 stroke-ic-pink" />
                    )}
                </Button>
            </DialogTrigger>

            <DialogContent
                className="fixed flex h-full w-full min-w-full items-center overflow-y-auto rounded-none border-none bg-ic-black sm:rounded-none"
                xClassname="size-8 stroke-ic-pink"
            >
                <DialogHeader className="hidden">
                    <DialogTitle>Mobile Nav</DialogTitle>
                    <DialogDescription>Navigate</DialogDescription>
                </DialogHeader>
                <div className="flex w-full flex-col items-center gap-y-4">
                    {NAV_DATA.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            className={cn(
                                "relative flex items-center space-x-2 text-ic-white no-underline",
                                pathname === item.link
                                    ? "font-medium text-ic-pink"
                                    : null,
                                "transition-all hover:text-ic-pink"
                            )}
                            onClick={handleClick}
                        >
                            <span className="text-center text-2xl">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
