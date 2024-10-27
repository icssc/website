import { About } from "@/components/about/about";
import { Hero } from "@/components/hero/hero";

export default function Home() {
    return (
        <main className="scroll overflow-hidden">
            <Hero />
            <About />

            <div></div>
        </main>
    );
}
