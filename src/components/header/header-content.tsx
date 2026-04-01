import { MobileNav } from "@/components/header/mobile-nav";
import { NAV_DATA } from "@/components/header/nav-data";
import { useNavNotifyDismissed } from "@/components/header/use-nav-notify";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type HeaderContentProps = {
	isDarkBackground?: boolean;
};

export function HeaderContent({
	isDarkBackground = false,
}: HeaderContentProps) {
	const pathname = usePathname();
	const boardNotifyDismissed = useNavNotifyDismissed("/board");

	return (
		<div className="mx-auto flex max-w-screen-3xl items-center justify-between px-8 lg:px-16">
			<a href="/" aria-label="ICSSC Home">
				<Image
					src="/assets/brand/logo.svg"
					alt="ICSSC logo"
					width={45}
					height={45}
					className="aspect-square object-cover"
				/>
			</a>

			<nav
				aria-label="Main navigation"
				className="hidden flex-row space-x-8 md:flex"
			>
				{NAV_DATA.map((item) =>
					item.children ? (
						<div key={item.name} className="group relative">
							<span
								className={cn(
									"relative flex cursor-default items-center space-x-1 transition-all group-hover:text-ic-pink",
									pathname.startsWith("/sponsors") &&
										"font-medium text-ic-pink",
								)}
							>
								<span className="text-lg">{item.name}</span>
								<ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
							</span>
							<div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
								<div
									className={cn(
										isDarkBackground &&
											"rounded-md bg-ic-black px-4 py-2 shadow-lg",
									)}
								>
									{item.children.map((child) => (
										<a
											key={child.link}
											href={child.link}
											className={cn(
												"block whitespace-nowrap text-lg no-underline transition-all hover:text-ic-pink",
												isDarkBackground && "text-ic-white",
												pathname === child.link && "font-medium text-ic-pink",
											)}
										>
											{child.name}
										</a>
									))}
								</div>
							</div>
						</div>
					) : (
						<a
							key={item.link}
							href={item.link}
							className={cn(
								"group relative flex items-center no-underline transition-all hover:text-ic-pink",
								pathname === item.link && "font-medium text-ic-pink",
							)}
						>
							<span className="text-lg">{item.name}</span>
							{item.notify && !boardNotifyDismissed && (
								<>
									<span className="absolute -right-2.5 -top-0.5 flex size-2">
										<span className="absolute size-full animate-ping rounded-full bg-red-400 opacity-75" />
										<span className="relative size-2 rounded-full bg-red-500" />
									</span>
									<span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ic-black px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
										{item.notify}
									</span>
								</>
							)}
						</a>
					),
				)}
			</nav>

			<MobileNav />
		</div>
	);
}
