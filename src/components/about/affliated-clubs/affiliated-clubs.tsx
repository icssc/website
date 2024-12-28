import Image from "next/image";
import Link from "next/link";
import { AFFILIATED_CLUBS } from "@/components/about/affliated-clubs/affiliated-clubs-data";
import { cn } from "@/lib/utils";

export function AffiliatedClubs() {
    return (
        <div className="space-y-16 bg-ic-black px-8 py-16 text-ic-white lg:px-16">
            <div className="space-y-2">
                <h2 className="text-4xl font-semibold leading-none lg:text-6xl">
                    Affiliated Clubs
                </h2>

                <p className="text-pretty text-lg leading-tight text-neutral-300 md:max-w-[90%] lg:text-xl">
                    ICS Affiliated Clubs provide additional opportunities to
                    connect with the school of ICS and fellow peers
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                {AFFILIATED_CLUBS.map((club) => (
                    <div
                        className="flex aspect-square w-20 items-center lg:w-40"
                        key={club.name}
                    >
                        <Link
                            href={club.website ?? ""}
                            className={cn(
                                club.website
                                    ? "cursor-pointer"
                                    : "pointer-events-none"
                            )}
                        >
                            <Image
                                src={club.logo}
                                alt={club.name}
                                width={200}
                                height={200}
                                className="rounded-sm object-cover"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
