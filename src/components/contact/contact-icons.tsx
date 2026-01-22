import { CONTACT_DATA } from "@/components/contact/contact-data";
import { cn } from "@/lib/utils";

interface ContactIconsProps {
	className?: string;
}

export function ContactIcons({ className }: ContactIconsProps) {
	return (
		<div className={cn("flex flex-wrap justify-center gap-x-8", className)}>
			{CONTACT_DATA.map(({ label, href, icon: Icon }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					referrerPolicy="no-referrer"
					className="group no-underline"
					aria-label={label}
				>
					<Icon
						className="hover:text-ic-pink-hover size-12 transition duration-300"
						aria-hidden="true"
					/>
				</a>
			))}
		</div>
	);
}
