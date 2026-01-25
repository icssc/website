import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

export function AvevaCareers() {
	return (
		<SectionContainer className="space-y-12 px-0 lg:px-0">
			<SectionHeading title="Early-Career Opportunities" />

			<div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
				<div className="space-y-3">
					<p className="text-2xl font-semibold">Entry-Level Positions</p>
					<p className="text-pretty leading-relaxed text-ic-muted">
						AVEVA has joined the 5% club, a group that commits to having 5% of
						its workforce in early career positions. This means many
						early-career opportunities are coming in the next few months and
						years across R&D, Services, Customer Success, Marketing, HR, and
						more.
					</p>
				</div>

				<div className="space-y-3">
					<p className="text-2xl font-semibold">Graduate Programs</p>
					<p className="text-pretty leading-relaxed text-ic-muted">
						Rotational programs lasting 12-24 months where high-potential
						university graduates rotate through different teams within one
						function. Functions include Customer Success (Tech Support), IT,
						People/HR, Services, Marketing, and R&D. Candidates must be based in
						UK, US, or India.
					</p>
				</div>

				<div className="space-y-3">
					<p className="text-2xl font-semibold">Internships</p>
					<p className="text-pretty leading-relaxed text-ic-muted">
						Paid, 12-week internships between academic years. 85% of internships
						are for software developers; others are in Tech Support, Services,
						and IT. Interns join real teams and work on real projects. It is
						common for interns to be offered a full-time position.
					</p>
				</div>
			</div>

			<div className="flex justify-center">
				<a
					href="https://www.aveva.com/en/about/careers/early-careers/"
					target="_blank"
					rel="noopener noreferrer"
					className="no-underline"
				>
					<Button className="h-12 gap-2 bg-ic-pink px-8 text-lg hover:bg-ic-pink-hover">
						Early Career Opportunities
						<ExternalLinkIcon className="size-5" />
					</Button>
				</a>
			</div>
		</SectionContainer>
	);
}
