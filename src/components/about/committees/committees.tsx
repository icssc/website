import { Committee } from "@/components/about/committees/committee";
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

			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-12 gap-y-8 md:gap-y-16">
				{COMMITTEE_DATA.map(
					({
						name,
						description,
						image = "/landing/general.jpg",
						members,
						chairs,
						leads,
					}) => (
						<Committee
							key={name}
							name={name}
							description={description}
							image={`/assets${image}`}
							members={members}
							chairs={chairs}
							leads={leads}
						/>
					),
				)}
			</div>
		</SectionContainer>
	);
}
