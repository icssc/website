import { ContactIcons } from "@/components/contact/contact-icons";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function EventsStayConnected() {
	return (
		<SectionContainer id="social-media" className="social-media">
			<SectionHeading
				title="Stay Connected"
				subtitle="ICSSC host events every week with topics spanning academics, professional development, and social community. All of our events are posted on social media."
			/>

			<ContactIcons className="gap-x-12" />
		</SectionContainer>
	);
}
