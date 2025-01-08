import Link from "next/link";
import { LandingEventsCards } from "@/components/landing/events/landing-events-cards";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function LandingEvents() {
    return (
        <SectionContainer
            className="py-16 text-ic-white"
            containerClassName=" bg-ic-black"
        >
            <SectionHeading
                title="Our Events"
                subtitle="ICSSC host events every week with topics spanning academics, professional development, and social community. All of our events are posted on social media."
                subtitleClassName="text-ic-muted-dark"
            />

            <LandingEventsCards speed="sluggish" />

            <div className="text-center">
                <Link href="/events">
                    <p className="text-xl font-medium">See our events &rarr;</p>
                </Link>
            </div>
        </SectionContainer>
    );
}
