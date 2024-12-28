import Image from "next/image";
import { AffiliatedClubs } from "@/components/about/affliated-clubs/affiliated-clubs";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="mx-auto max-w-screen-3xl space-y-16 lg:space-y-32">
            <div className="flex h-[100svh] max-h-[800px] flex-col items-end overflow-hidden rounded-md p-3">
                <div className="relative h-full min-h-full w-full min-w-full">
                    <Image
                        src={"/landing/general.jpg"}
                        alt="foo"
                        width={2000}
                        height={800}
                        className="h-full rounded-md object-cover blur-sm"
                    />

                    <div
                        className={cn(
                            "absolute inset-0 rounded-md border-black bg-neutral-800 bg-opacity-60 p-3"
                        )}
                    />

                    <div className="absolute bottom-0 flex h-fit w-full p-8">
                        {/* // TODO: Update Copy */}
                        <h1 className="text-balance text-[clamp(3rem,7vw,5rem)] font-semibold leading-none text-ic-white">
                            ICSSC connects the ICS student body with academic,
                            social, and professional opportunities
                        </h1>
                    </div>
                </div>
            </div>

            <div className="space-y-16 lg:space-y-32">
                <div>Our M</div>
                <AffiliatedClubs />

                <div className="space-y-16 px-8 lg:px-16">
                    <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                        Awards & Recognitions
                    </h2>

                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 2xl:grid-cols-4">
                        <div className="space-y-1 rounded-md px-8 text-center">
                            <p className="text-balance text-xl font-semibold">
                                Most Outstanding Social/Support Organization
                            </p>
                            <p className="text-balance text-lg">
                                Anteater Awards 2011
                            </p>
                        </div>
                        <div className="space-y-1 rounded-md px-8 text-center">
                            <p className="text-balance text-xl font-semibold">
                                Student Alumni Engagement Sponsorship
                            </p>
                            <p className="text-balance text-lg">
                                Student Alumni Association
                            </p>
                        </div>
                        <div className="space-y-1 rounded-md px-8 text-center">
                            <p className="text-balance text-xl font-semibold">
                                Third Place
                            </p>
                            <p className="text-balance text-lg">
                                Winter UCI Alumni Association Club Affiliates
                                Challenge 2020
                            </p>
                        </div>
                        <div className="space-y-1 rounded-md px-8 text-center">
                            <p className="text-balance text-xl font-semibold">
                                Second Place
                            </p>
                            <p className="text-balance text-lg">
                                UCI Campus Organizations & Volunteer Programs |
                                Love My Org Contest 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
