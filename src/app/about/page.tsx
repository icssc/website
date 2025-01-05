import Image from "next/image";
import { AffiliatedClubs } from "@/components/about/affliated-clubs/affiliated-clubs";
import { Awards } from "@/components/about/awards/awards";
import { Committees } from "@/components/about/committees/committees";
import { PageContainer } from "@/components/shared/page-container";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <PageContainer className="px-0 py-0 lg:px-0">
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

            <div className="space-y-16">
                <Committees />
                <AffiliatedClubs />
                <Awards />
            </div>
        </PageContainer>
    );
}
