import { Button } from "@/components/ui/button";

export function About() {
    return (
        <div className="flex w-full items-start justify-between space-x-64 px-3">
            <div className="min-w-fit space-y-4">
                <div className="space-y-4 text-ic-black md:space-y-8">
                    <h2 className="text-5xl font-medium leading-none tracking-tighter md:text-8xl">
                        Your ICS Community
                    </h2>
                    <p className="text-pretty text-base md:text-lg">
                        ICS Student Council, founded in 2010, is a student-run
                        organization that serves ICS students. Our mission is to
                        deepen students&apos; connections with the Donald Bren
                        School of Information and Computer Sciences & UCI Alumni
                        and support students professionally, socially, and
                        academically.
                    </p>
                </div>

                <Button className="bg-ic-pink px-6 py-2 text-base hover:bg-ic-pink/80">
                    Learn More
                </Button>
            </div>

            {/* <div className="h-[750px] w-full bg-ic-pink/50" /> */}
        </div>
    );
}
