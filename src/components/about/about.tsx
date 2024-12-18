import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HandshakeIcon, LibraryBigIcon, SunIcon } from "lucide-react";

export function About() {
    return (
        <div className="flex w-full flex-col items-start gap-y-8 px-8 lg:flex-row lg:space-x-[10%] lg:px-16">
            <div className="space-y-4">
                <div className="space-y-4">
                    <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
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

                    {/* <div className="grid grid-cols-1 grid-rows-3 space-y-0 text-pretty text-base md:text-lg">
                        <div>
                            <Separator />
                            <div className="my-2 flex space-x-2">
                                <HandshakeIcon className="stroke-[1.5]" />
                                <p className="text-semibold">Professional</p>
                            </div>
                        </div>
                        <div>
                            <Separator />
                            <div className="my-2 flex space-x-2">
                                <SunIcon className="stroke-[1.5]" />
                                <p className="text-semibold">Social</p>
                            </div>
                        </div>
                        <div>
                            <Separator />
                            <div className="my-2 flex space-x-2">
                                <LibraryBigIcon className="stroke-[1.5]" />
                                <p className="text-semibold">Academic</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                <Button className="bg-ic-pink px-6 py-2 text-base hover:bg-ic-pink/80">
                    Learn More
                </Button>
            </div>

            <Image
                src={"/landing/general.jpg"}
                alt="general meeting"
                width={800}
                height={800}
                className="h-[clamp(200px,50vw,400px)] min-w-full rounded-md object-cover lg:min-w-[50%]"
            />
        </div>
    );
}
