import { CONTACT_DATA } from "@/components/contact/contact-data";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<div className="mt-auto flex h-24 justify-center p-3 text-ic-white">
			<div className="flex h-full w-full max-w-screen-3xl flex-col items-center justify-center gap-y-2 rounded-md bg-ic-black px-8 text-sm lg:flex-row lg:justify-between lg:px-16">
				<div className="whitespace-nowrap">
					&#169; {year} ICSSC. All Rights Reserved.
				</div>
				<div className="flex space-x-4 items-center">
					<a href="/privacy-policy" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
						<p className="text-sm hidden md:flex">Privacy Policy</p>
						<p className="text-sm md:hidden">Privacy</p>
					</a>
					<a href="/terms-of-service" target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
						<p className="text-sm hidden md:flex">Terms of Service</p>
						<p className="text-sm flex md:hidden">Terms</p>
					</a>
					{CONTACT_DATA.map(({ label, href, icon: Icon }) => (
						<a
							href={href}
							key={label}
							target="_blank"
							referrerPolicy="no-referrer"
							rel="noreferrer"
							aria-label={label}
						>
							<Icon className="size-4" aria-hidden="true" />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
