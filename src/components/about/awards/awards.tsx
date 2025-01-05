import { AWARDS_DATA } from "@/components/about/awards/awards-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function Awards() {
    return (
        <SectionContainer>
            <SectionHeading title="Awards & Recognitions" />

            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 2xl:grid-cols-4">
                {AWARDS_DATA.map(({ title, description }) => (
                    <div
                        key={title}
                        className="space-y-1 rounded-md px-8 text-center"
                    >
                        <p className="text-balance text-xl font-semibold">
                            {title}
                        </p>
                        <p className="text-balance text-lg">{description}</p>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
}
