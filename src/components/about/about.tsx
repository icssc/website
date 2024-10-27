import { Button } from "@/components/ui/button";

export function About() {
    return (
        <div className="flex w-full items-start justify-between space-x-64 px-16 py-32">
            <div className="min-w-fit space-y-10">
                <div className="text-ic-black w-[500px] space-y-8 px-2">
                    <h2 className="text-8xl font-medium leading-none tracking-tighter">
                        Your ICS Community
                    </h2>
                    <p className="text-lg">
                        Non sit veniam nisi velit duis consectetur sit mollit.
                        Voluptate aliquip eu culpa excepteur ullamco voluptate
                        sint exercitation sunt. Eu ipsum culpa eu dolor. Do
                        fugiat amet velit sint commodo tempor esse sit quis.
                    </p>
                </div>

                <Button className="bg-ic-pink hover:bg-ic-pink/80 px-6 py-2 text-base">
                    Learn More
                </Button>
            </div>

            <div className="bg-ic-pink/50 h-[750px] w-full" />
        </div>
    );
}
