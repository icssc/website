import Image from "next/image";
import { BOARD_INFO } from "@/components/about/affliated-clubs/board/board-info";
import { PAST_BOARD_INFO } from "@/components/about/affliated-clubs/board/past-board-info";
import { PageHeading } from "@/components/shared/page-heading";
import { SectionHeading } from "@/components/shared/section-heading";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
    return (
        <div className="mx-auto max-w-screen-3xl space-y-16 px-8 py-16 lg:px-16">
            <PageHeading
                title="Our Board"
                subtitle="ICSSC board members help make ICSSC's events and projects possible. This page recognizes board members past and present."
            />

            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                {BOARD_INFO.map(({ name, position, image }) => (
                    <div
                        className="w-50 flex flex-col items-center space-y-4 lg:w-60"
                        key={name + position}
                    >
                        <Image
                            src={image}
                            alt="foo"
                            width={240}
                            height={240}
                            className="aspect-square rounded-md object-cover shadow-md"
                        />

                        <div className="space-y-2 text-center">
                            <p className="text-pretty text-lg font-semibold leading-none">
                                {position}
                            </p>

                            <p className="leading-none">{name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <SectionHeading title="Past Board" />

            <div>
                <Accordion
                    type="single"
                    collapsible
                >
                    {PAST_BOARD_INFO.map(({ year, positions }) => (
                        <AccordionItem
                            value={year}
                            key={year}
                        >
                            <AccordionTrigger className="text-2xl">
                                {year}
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
