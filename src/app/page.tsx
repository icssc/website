import { Hero } from "@/components/hero/hero";

export default function Home() {
    return (
        <main className="scroll bg-ic-white overflow-hidden">
            <Hero />
            <div className="mx-16 my-32 w-full">
                <div className="text-ic-black w-[500px] space-y-8 px-2">
                    <h2 className="text-8xl font-medium">Your ICS Community</h2>
                    <p className="text-lg">
                        Non sit veniam nisi velit duis consectetur sit mollit.
                        Voluptate aliquip eu culpa excepteur ullamco voluptate
                        sint exercitation sunt. Eu ipsum culpa eu dolor. Do
                        fugiat amet velit sint commodo tempor esse sit quis.
                    </p>
                </div>
            </div>
        </main>
    );
}
