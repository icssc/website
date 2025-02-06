import Image from "next/image";
import { COMMITTEE_DATA } from "@/components/about/committees/committee-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function Committees() {
    return (
        <SectionContainer className="space-y-8">
            <SectionHeading
                title="Committees"
                subtitle="ICS Student Council has six committees to provide different ways for students to build experience and contribute to the community."
                details="Applications are currently closed. Check back in the Fall for application details."
                detailsClassName="text-center"
            />

            <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2">
                {COMMITTEE_DATA.map(
                    ({ name, description, image = "/landing/general.jpg" }) => (
                        <div
                            key={name}
                            className="flex flex-col justify-between gap-x-16 gap-y-4"
                        >
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-2xl font-semibold lg:text-3xl">
                                        {name}
                                    </p>
                                    <p className="text-pretty leading-tight text-ic-muted">
                                        {description}
                                    </p>
                                </div>
                            </div>

                            <Image
                                className="aspect-video max-h-56 w-full rounded-md bg-ic-black object-cover shadow-md"
                                src={image}
                                width={800}
                                height={450}
                                alt={`Image of the ${name} committee`}
                            />
                        </div>
                    )
                )}
            </div>
        </SectionContainer>
    );
}
