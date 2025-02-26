import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/header/mobile-nav";
import { NAV_DATA } from "@/components/header/nav-data";
import { cn } from "@/lib/utils";

export function HeaderContent() {
	const pathname = usePathname();

	return (
		<div className="mx-auto flex max-w-screen-3xl items-center justify-between px-8 lg:px-16">
			<Link href={"/"}>
				<Image
					src={"/brand/logo.svg"}
					alt="logo"
					width={40}
					height={40}
					className="aspect-square object-cover"
				/>
			</Link>

			<div className="hidden flex-row space-x-8 md:flex">
				{NAV_DATA.map((item) => (
					<Link
						key={item.link}
						href={item.link}
						className={cn(
							"relative flex items-center space-x-2 no-underline",
							pathname === item.link ? "font-medium text-ic-pink" : null,
							"transition-all hover:text-ic-pink",
						)}
					>
						<span className="text-lg">{item.name}</span>
					</Link>
				))}
			</div>

			<MobileNav />
		</div>
	);
}
