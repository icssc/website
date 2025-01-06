import Image from "next/image";
import { SPONSORS } from "@/components/landing/sponsors/sponsors-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function LandingSponsors() {
    return (
        <SectionContainer>
            <SectionHeading
                title="Our Sponsors"
                subtitle="    Our sponsors enable ICSSC to support students and create
                    exceptional opportunities at the
                    University&nbsp;of&nbsp;California,&nbsp;Irvine."
                containerClassName="text-center"
            />

            <div className="flex w-full flex-wrap justify-center gap-8 lg:gap-16">
                {SPONSORS.map((sponsor) => (
                    <div
                        className="flex w-1/3 max-w-80 items-center justify-center"
                        key={sponsor.title}
                    >
                        <Image
                            src={sponsor.image}
                            alt={sponsor.title}
                            width={300}
                            height={300}
                        />
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
