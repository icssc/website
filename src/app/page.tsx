import { About } from "@/components/about/about";
import { Events } from "@/components/events/events";
import { Hero } from "@/components/hero/hero";

export default function Home() {
    return (
        <main className="scroll overflow-hidden">
            <Hero />
            <About />

            <Events />
        </main>
    );
}
