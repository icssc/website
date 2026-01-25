import { COMPANIES_DATA } from "@/components/about/where-we-go/where-we-go-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import Image from "next/image";

export function WhereWeGo() {
	return (
		<SectionContainer>
			<SectionHeading
				title="Where We Go"
				subtitle="Our members have gone on to work at top companies across the tech industry"
			/>

			<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{COMPANIES_DATA.map(({ name, logo }) => (
					<div key={name} className="flex h-24 items-center justify-center">
						<div className="relative h-16 w-64">
							<Image
								src={`/assets/logos/${logo}`}
								alt={`${name} logo`}
								fill
								className="object-contain"
							/>
						</div>
					</div>
				))}
			</div>
		</SectionContainer>
	);
}
