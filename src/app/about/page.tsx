import Image from "next/image";
import { AffiliatedClubs } from "@/components/about/affliated-clubs/affiliated-clubs";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="max-w-screen-3xl mx-auto space-y-16 lg:space-y-32">
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

                <div className="space-y-8">
                    <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                        Awards & Recognitions
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="te">
                            <p>Most Outstanding Social/Support Organization</p>
                            <p>Anteater Awards 2011</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
