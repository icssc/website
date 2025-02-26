import Link from "next/link";
import { CONTACT_EMAIL } from "@/components/contact/contact-data";
import { ContactIcons } from "@/components/contact/contact-icons";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeading } from "@/components/shared/page-heading";

export default function Page() {
	return (
		<PageContainer>
			<PageHeading
				title="Contact Us"
				subtitle="Interested in collaborating? Have a question or feedback? Don't hesitate to reach out!"
			/>

			<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
				<Link
					href={`mailto:${CONTACT_EMAIL}`}
					target="_blank"
					referrerPolicy="no-referrer"
					className="no-underline"
				>
					<div className="hover:bg-ic-pink-hover mx-auto flex h-12 w-fit items-center justify-center rounded-full bg-ic-pink px-8 text-2xl font-medium text-ic-white shadow-md transition">
						<p>{CONTACT_EMAIL}</p>
					</div>
				</Link>

				<ContactIcons />
			</div>
		</PageContainer>
	);
}
