import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const BENEFITS = [
	"Competitive salary",
	"15 days PTO with increase for time served",
	"High quality healthcare",
	"401(k) with 6% employer match",
	"FSA and supplemental insurance",
	"Paid parental leave",
	"3 days paid volunteering",
	"Summer Fridays",
	"Flexible lifestyle benefits (fitness/tuition reimbursement)",
];

export function AvevaBenefits() {
	return (
		<SectionContainer className="space-y-12 px-0 lg:px-0">
			<SectionHeading title="Working at AVEVA" />

			<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
				<div className="space-y-6">
					<div className="space-y-1">
						<p className="text-2xl font-semibold">Benefits</p>
						<p className="text-ic-muted">
							AVEVA has a strong benefits team who every year re-evaluate the
							benefits they offer.
						</p>
					</div>
					<div className="flex flex-col">
						{BENEFITS.map((benefit) => (
							<div key={benefit}>
								<Separator className="bg-ic-muted/50" />
								<p className="my-3 text-lg">{benefit}</p>
							</div>
						))}
						<Separator className="bg-ic-muted/50" />
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<div className="space-y-3">
						<p className="text-2xl font-semibold">Flexible Working</p>
						<p className="text-pretty leading-relaxed text-ic-muted">
							AVEVA&apos;s flexible working policy is called{" "}
							<span className="font-medium text-ic-black">Dynamic Work</span>.
							Its three guiding principles are flexibility, work/life balance,
							and collaboration. The default mode is Hybrid, which requires
							working in the office a minimum of three days per week.
						</p>
					</div>

					<div className="flex flex-1 flex-col gap-3">
						<p className="text-2xl font-semibold">Values & Culture Code</p>
						<div className="flex flex-1 items-center justify-center overflow-hidden rounded-lg">
							<Image
								src="/assets/sponsors/aveva-culture.jpg"
								alt="AVEVA Culture Code - Impact, Aspiration, Curiosity, Trust"
								width={800}
								height={600}
								className="h-auto max-h-full w-auto max-w-full object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
