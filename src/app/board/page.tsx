import Image from "next/image";
import { BOARD_INFO } from "@/components/board/board-info";
import { PAST_BOARD_INFO } from "@/components/board/past-board-info";
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
        <div className="mx-auto max-w-screen-3xl space-y-16 px-8 py-8 lg:px-16">
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
                            width={500}
                            height={500}
                            className="aspect-square rounded-md object-cover shadow-xl"
                        />

                        <div className="space-y-2 text-center">
                            <p className="text-pretty font-medium leading-none text-ic-pink">
                                {position}
                            </p>

                            <p className="text-lg font-semibold leading-none text-ic-black">
                                {name}
                            </p>
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
                            <AccordionContent className="flex flex-wrap justify-center gap-8">
                                {positions.map((item) => (
                                    <div
                                        key={item.name + item.title}
                                        className="flex w-40 flex-col items-center space-y-2 text-center"
                                    >
                                        <p className="font-medium leading-none">
                                            {item.title}
                                        </p>
                                        <p className="text-lg font-semibold leading-none">
                                            {item.name}
                                        </p>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
