import Image from "next/image";
import Link from "next/link";
import { AFFILIATED_CLUBS } from "@/components/about/affliated-clubs/affiliated-clubs-data";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function AffiliatedClubs() {
	return (
		<SectionContainer
			className="py-16 text-ic-white"
			containerClassName=" bg-ic-black"
		>
			<SectionHeading
				title="Affiliated Clubs"
				subtitle="ICS Affiliated Clubs provide additional opportunities to
                    connect with the school of ICS and fellow peers"
				subtitleClassName="text-ic-muted-dark"
			/>

			<div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
				{AFFILIATED_CLUBS.map((club) => (
					<div
						className="flex aspect-square w-20 items-center lg:w-40"
						key={club.name}
					>
						<Link
							href={club.website ?? ""}
							target="_blank"
							referrerPolicy="no-referrer"
							className={cn(
								club.website ? "cursor-pointer" : "pointer-events-none",
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
		</SectionContainer>
	);
}
