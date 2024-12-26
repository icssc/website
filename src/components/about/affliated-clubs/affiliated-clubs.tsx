import Image from "next/image";
import Link from "next/link";
import { AFFILIATED_CLUBS } from "@/components/about/affliated-clubs/affiliated-clubs-data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function AffiliatedClubs() {
    return (
        <ScrollArea className="flex w-full">
            <div className="flex w-full flex-row items-center space-x-8 overflow-auto whitespace-nowrap">
                {AFFILIATED_CLUBS.map((club) => (
                    <div
                        className="flex aspect-square w-40 items-center"
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
                                className="rounded-sm object-contain"
                            />
                        </Link>
                    </div>
                ))}
            </div>

            <ScrollBar
                orientation="horizontal"
                className="bg-transparent"
                thumbClassName="bg-ic-pink/80"
            />
        </ScrollArea>
    );
}
