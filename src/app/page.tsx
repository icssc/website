import { About } from "@/components/about/about";
import { Events } from "@/components/events/events";
import { Landing } from "@/components/landing/landing";

export default function Home() {
    return (
        <main className="space-y-16 overflow-clip">
            <Landing />
            <div className="max-w-screen-3xl mx-auto">
                <About />
                <Events />
            </div>
        </main>
    );
}
