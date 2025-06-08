import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// import MeetingImage from "@/public/landing/meeting.jpg";
import { HandshakeIcon, LibraryBigIcon, SunIcon } from "lucide-react";

export function LandingAbout() {
    return (
        <SectionContainer className="flex flex-col justify-between gap-x-16 gap-y-8 space-y-0 lg:flex-row">
            <div className="flex flex-col gap-y-4">
                <div className="space-y-4">
                    <SectionHeading
                        title="Your ICS Community"
                        subtitle="ICS Student Council, founded in 2010 at the University of California, Irvine, is a student-run
                        organization that serves ICS students. Our mission is to
                        deepen students' connections with the Donald Bren
                        School of Information and Computer Sciences."
                    />

                    <div className="grid grid-cols-1 grid-rows-3 space-y-0 text-pretty text-lg">
                        <div>
                            <Separator className="bg-ic-muted/50" />
                            <div className="my-2 flex space-x-4">
                                <LibraryBigIcon className="stroke-[1.5]" />
                                <p className="text-semibold">
                                    Academic Support
                                </p>
                            </div>
                        </div>
                        <div>
                            <Separator className="bg-ic-muted/50" />
                            <div className="my-2 flex space-x-4">
                                <SunIcon className="stroke-[1.5]" />
                                <p className="text-semibold">Social Events</p>
                            </div>
                        </div>
                        <div>
                            <Separator className="bg-ic-muted/50" />
                            <div className="my-2 flex space-x-4">
                                <HandshakeIcon className="stroke-[1.5]" />
                                <p className="text-semibold">
                                    Professional Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/about">
                    <Button className="bg-ic-pink px-6 py-2 text-base hover:bg-ic-pink-hover">
                        Learn More
                    </Button>
                </a>
            </div>

            <div className="flex max-h-60 w-full shrink-0 rounded-md shadow-md lg:max-h-[500px] lg:max-w-[50%]">
                <img
                    src="/assets/landing/week.jpg"
                    alt="general meeting"
                    width={800}
                    height={2000}
                    className="w-full rounded-md object-cover"
                />
            </div>
        </SectionContainer>
    );
}
