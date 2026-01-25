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
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileNav() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	const toggleExpand = (name: string) => {
		setExpandedItems((prev) =>
			prev.includes(name)
				? prev.filter((item) => item !== name)
				: [...prev, name],
		);
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
		<Dialog open={open} onOpenChange={toggleMenu}>
			<DialogTrigger className="flex md:hidden" asChild>
				<Button
					className="size-10 p-0 hover:bg-ic-muted/10"
					variant="ghost"
					aria-label={open ? "Close menu" : "Open menu"}
				>
					{open ? (
						<XIcon className="aspect-square min-h-8 min-w-8 stroke-ic-pink" />
					) : (
						<MenuIcon className="aspect-square min-h-8 min-w-8 stroke-ic-pink" />
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
				<nav
					aria-label="Mobile navigation"
					className="flex w-full flex-col items-center gap-y-4"
				>
					{NAV_DATA.map((item) =>
						item.children ? (
							<div key={item.name} className="flex flex-col items-center">
								<button
									type="button"
									onClick={() => toggleExpand(item.name)}
									className={cn(
										"relative flex items-center space-x-1 text-ic-white no-underline transition-all hover:text-ic-pink",
										pathname.startsWith("/sponsors") &&
											"font-medium text-ic-pink",
									)}
								>
									<span className="text-center text-2xl">{item.name}</span>
									<ChevronDown
										className={cn(
											"size-5 transition-transform",
											expandedItems.includes(item.name) ? "rotate-180" : "",
										)}
									/>
								</button>
								{expandedItems.includes(item.name) && (
									<div className="mt-2 flex flex-col items-center gap-y-2">
										{item.children.map((child) => (
											<a
												key={child.link}
												href={child.link}
												className={cn(
													"relative flex items-center space-x-2 text-neutral-400 no-underline transition-all hover:text-ic-pink",
													pathname === child.link && "font-medium text-ic-pink",
												)}
												onClick={toggleMenu}
											>
												<span className="text-center text-xl">
													{child.name}
												</span>
											</a>
										))}
									</div>
								)}
							</div>
						) : (
							<a
								key={item.link}
								href={item.link}
								className={cn(
									"relative flex items-center space-x-2 text-ic-white no-underline transition-all hover:text-ic-pink",
									pathname === item.link && "font-medium text-ic-pink",
								)}
								onClick={toggleMenu}
							>
								<span className="text-center text-2xl">{item.name}</span>
							</a>
						),
					)}
				</nav>
			</DialogContent>
		</Dialog>
	);
}
