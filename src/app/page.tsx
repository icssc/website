import { About } from "@/components/about/about";
import { Events } from "@/components/events/events";
import { Hero } from "@/components/hero/hero";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <div className="relative h-[200dvh]">
                <Hero />
            </div>
            <About />

            <Events />
        </main>
    );
}
