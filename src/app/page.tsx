import { WhereWeGo } from "@/components/about/where-we-go/where-we-go";
import { LandingAbout } from "@/components/landing/about/landing-about";
import { LandingEvents } from "@/components/landing/events/landing-events";
import { Landing } from "@/components/landing/landing/landing";
import { LandingProjectsGrid } from "@/components/landing/projects/landing-projects-grid";
import { LandingSponsors } from "@/components/landing/sponsors/sponsors";
import { PageContainer } from "@/components/shared/page-container";

export default function Home() {
	return (
		<PageContainer className="max-w-full px-0 py-0 lg:px-0">
			<Landing />

			<div className="mx-auto space-y-24">
				<LandingAbout />
				<LandingEvents />
				<LandingProjectsGrid />
				<LandingSponsors />
				<WhereWeGo />
			</div>
		</PageContainer>
	);
}
