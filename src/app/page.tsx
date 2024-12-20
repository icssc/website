import { About } from "@/components/about/about";
import { EventTimeline } from "@/components/events/event-timeline";
import { Landing } from "@/components/landing/landing";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Sponsors } from "@/components/sponsors/sponsors";

export default function Home() {
    return (
        <main className="space-y-16 overflow-clip lg:space-y-32">
            <Landing />

            <div className="max-w-screen-3xl mx-auto space-y-16 lg:space-y-32">
                <About />
                {/* <EventTimeline /> */}
                <ProjectGrid />
                <Sponsors />
            </div>
        </main>
    );
}
