import Image from "next/image";
import { AffiliatedClubs } from "@/components/about/affliated-clubs/affiliated-clubs";
import { Awards } from "@/components/about/awards/awards";
import { BitsAndBytes } from "@/components/about/bit-and-bytes/bits-and-bytes";
import { AboutBoard } from "@/components/about/board/about-board";
import { Committees } from "@/components/about/committees/committees";
import { MissionStatement } from "@/components/about/mission-statement";
import { PageContainer } from "@/components/shared/page-container";
import { cn } from "@/lib/utils";
import generalImage from "@/public/landing/general.jpg";

export default function Page() {
	return (
		<PageContainer className="max-w-none px-0 py-0 lg:px-0">
			<div className="mx-auto flex h-[100svh] w-full flex-col items-end overflow-hidden rounded-md p-3">
				<div className="relative h-full min-h-full w-full min-w-full">
					<Image
						src={generalImage}
						alt="landing splash" // TODO
						width={2000}
						height={800}
						className="h-full w-full rounded-md object-cover"
						priority
						placeholder="blur"
					/>

					<div
						className={cn(
							"absolute inset-0 rounded-md border-black bg-neutral-800 bg-opacity-60 p-3",
						)}
					/>

					<div className="absolute bottom-0 left-1/2 flex h-fit w-full max-w-screen-3xl -translate-x-1/2 px-4 pb-8 lg:px-8">
						<div className="text-pretty text-[clamp(3rem,8vw,8rem)] font-semibold leading-none tracking-tighter text-ic-white md:text-balance">
							UCI&apos;s largest{" "}
							<span className="text-ic-pink">Computer Science</span> community
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto space-y-24">
				<MissionStatement />
				<Committees />
				<BitsAndBytes />
				<AboutBoard />
				<AffiliatedClubs />
				<Awards />
			</div>
		</PageContainer>
	);
}
