import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HandshakeIcon, LibraryBigIcon, SunIcon } from "lucide-react";

export function About() {
    return (
        <div className="grid-row-2 grid w-full grid-cols-10 gap-y-8 lg:grid-rows-1 lg:flex-row">
            <div className="col-span-full space-y-4 lg:col-span-4">
                <div className="space-y-4">
                    <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                        Your ICS Community
                    </h2>

                    <p className="text-pretty text-lg">
                        ICS Student Council, founded in 2010, is a student-run
                        organization that serves ICS students. Our mission is to
                        deepen students&apos; connections with the Donald Bren
                        School of Information and Computer Sciences.
                    </p>

                    <div className="grid grid-cols-1 grid-rows-3 space-y-0 text-pretty text-lg">
                        <div>
                            <Separator className="bg-ic-black/40" />
                            <div className="my-2 flex space-x-4">
                                <HandshakeIcon className="stroke-[1.5]" />
                                <p className="text-semibold">
                                    Professional Development
                                </p>
                            </div>
                        </div>
                        <div>
                            <Separator className="bg-ic-black/40" />
                            <div className="my-2 flex space-x-4">
                                <SunIcon className="stroke-[1.5]" />
                                <p className="text-semibold">Social Events</p>
                            </div>
                        </div>
                        <div>
                            <Separator className="bg-ic-black/40" />
                            <div className="my-2 flex space-x-4">
                                <LibraryBigIcon className="stroke-[1.5]" />
                                <p className="text-semibold">
                                    Academic Support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="bg-ic-pink px-6 py-2 text-base hover:bg-ic-pink/80">
                    Learn More
                </Button>
            </div>

            <div className="col-span-full row-start-2 flex max-h-[clamp(250px,40vw,350px)] rounded-md drop-shadow-md lg:col-span-5 lg:col-start-6 lg:row-start-1 lg:max-h-[500px]">
                <Image
                    src={"/landing/general.jpg"}
                    alt="general meeting"
                    width={800}
                    height={2000}
                    className="w-full rounded-md object-cover"
                />
            </div>
        </div>
    );
}
