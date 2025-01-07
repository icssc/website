import { ContactIcons } from "@/components/contact/contact-icons";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function EventsStayConnected() {
    return (
        <SectionContainer>
            <SectionHeading
                title="Stay Connected"
                subtitle="We host events every week spanning academics, professional development, and social community. All of our events are posted on social media."
            />

            <ContactIcons className="gap-x-12" />
        </SectionContainer>
    );
}
