import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
    return (
        <div className="flex w-full flex-row px-10">
            <div className="space-y-4">
                <div className="space-y-4 text-ic-black">
                    <h2 className="text-4xl font-medium leading-none tracking-tighter md:text-6xl">
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

            <div className="w-full">
                <Image
                    src={"/landing/general.jpg"}
                    alt="general meeting"
                    width={800}
                    height={600}
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
        </div>
    );
}
