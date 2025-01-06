import { LandingAbout } from "@/components/landing/about/landing-about";
import { Landing } from "@/components/landing/landing/landing";
import { LandingProjectsGrid } from "@/components/landing/projects/landing-projects-grid";
import { LandingSponsors } from "@/components/landing/sponsors/sponsors";
import { PageContainer } from "@/components/shared/page-container";

export default function Home() {
    return (
        <PageContainer className="max-w-full px-0 py-0 lg:px-0">
            <Landing />

            <div className="max-w-screen-3xl space-y-24">
                <LandingAbout />
                <LandingProjectsGrid />
                <LandingSponsors />
            </div>
        </PageContainer>
    );
}
