import { About } from "@/components/landing/about/about";
import { Landing } from "@/components/landing/landing/landing";
import { ProjectGrid } from "@/components/landing/projects/project-grid";
import { Sponsors } from "@/components/landing/sponsors/sponsors";
import { PageContainer } from "@/components/shared/page-container";

export default function Home() {
    return (
        <PageContainer className="max-w-full px-0 py-0 lg:px-0">
            <Landing />

            <div className="mx-auto max-w-screen-3xl space-y-16 px-8 lg:space-y-32 lg:px-16">
                <About />
                <ProjectGrid />
                <Sponsors />
            </div>
        </PageContainer>
    );
}
