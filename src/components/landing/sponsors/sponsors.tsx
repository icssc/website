import Image from "next/image";
import { SPONSORS } from "@/components/landing/sponsors/sponsors-data";
import { cn } from "@/lib/utils";

export function Sponsors() {
    return (
        <div className={cn("flex w-full flex-col items-start gap-y-8")}>
            <div className="flex w-full flex-col gap-y-2">
                <h2 className="w-full text-center text-4xl font-semibold leading-none lg:text-6xl">
                    Our Sponsors
                </h2>

                <span className="text-ic-muted mx-auto text-pretty text-center text-lg leading-tight lg:w-3/4 lg:text-2xl">
                    Our sponsors enable ICSSC to support students and create
                    exception opportunities at the
                    University&nbsp;of&nbsp;California,&nbsp;Irvine.
                </span>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-8 lg:gap-16">
                {SPONSORS.map((sponsor) => (
                    <div
                        className="flex w-1/3 max-w-80 items-center justify-center"
                        key={sponsor.title}
                    >
                        <Image
                            src={sponsor.image}
                            alt={sponsor.title}
                            width={300}
                            height={300}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
