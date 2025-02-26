import { PAST_BOARD_INFO } from "@/components/board/past-board-info";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function PastBoard() {
	return (
		<SectionContainer className="space-y-8 px-0 lg:px-0">
			<SectionHeading title="Past Board" />

			<div>
				<Accordion type="single" collapsible>
					{PAST_BOARD_INFO.map(({ year, positions }) => (
						<AccordionItem value={year} key={year}>
							<AccordionTrigger className="text-2xl">{year}</AccordionTrigger>
							<AccordionContent className="flex flex-wrap justify-center gap-8">
								{positions.map((item) => (
									<div
										key={item.name + item.title}
										className="flex w-40 flex-col items-center space-y-1 text-center"
									>
										<p className="font-medium leading-none">{item.title}</p>
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
		</SectionContainer>
	);
}
