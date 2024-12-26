import { About } from "@/components/landing/about/about";
import { Landing } from "@/components/landing/landing/landing";
import { ProjectGrid } from "@/components/landing/projects/project-grid";
import { Sponsors } from "@/components/landing/sponsors/sponsors";

export default function Home() {
    return (
        <main className="space-y-16 overflow-clip lg:space-y-32">
            <Landing />

            <div className="max-w-screen-3xl mx-auto space-y-16 lg:space-y-32">
                <About />
                <ProjectGrid />
                <Sponsors />
            </div>
        </main>
    );
}
