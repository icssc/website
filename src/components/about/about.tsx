import { Button } from "@/components/ui/button";

export function About() {
    return (
        <div className="flex w-full items-start justify-between space-x-64 px-16">
            <div className="min-w-fit space-y-10">
                <div className="w-[500px] space-y-8 px-2 text-ic-black">
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

                <Button className="bg-ic-pink px-6 py-2 text-base hover:bg-ic-pink/80">
                    Learn More
                </Button>
            </div>

            <div className="h-[750px] w-full bg-ic-pink/50" />
        </div>
    );
}
