import { PageContainer } from "@/components/shared/page-container";
import { PageHeading } from "@/components/shared/page-heading";
import { AvevaBenefits } from "@/components/sponsors/aveva/aveva-benefits";
import { AvevaCareers } from "@/components/sponsors/aveva/aveva-careers";

export default function Page() {
	return (
		<PageContainer className="space-y-12">
			<PageHeading
				title="AVEVA"
				subtitle="AVEVA is an information technology company specializing in engineering and industrial software for design, simulation, project management, and operations control. Its solutions are used by industries like manufacturing, power, and oil and gas to manage and optimize operations by collecting and analyzing real-time data from industrial assets."
			/>
			<AvevaBenefits />
			<AvevaCareers />
		</PageContainer>
	);
}
