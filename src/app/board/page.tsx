import Image from "next/image";
import { BOARD_INFO } from "@/components/board/board-info";
import { PastBoard } from "@/components/board/past-board";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeading } from "@/components/shared/page-heading";

export default function Page() {
	return (
		<PageContainer>
			<PageHeading
				title="Our Board"
				subtitle="ICSSC board members help make our events and initiatives possible. This page recognizes board members past and present."
			/>

			<div className="flex flex-wrap justify-center gap-12">
				{BOARD_INFO.map(({ name, position, image }) => (
					<div
						className="w-50 flex flex-col items-center space-y-4 lg:w-60"
						key={name + position}
					>
						<Image
							src={image}
							alt="foo"
							width={500}
							height={500}
							className="aspect-square rounded-md object-cover shadow-xl"
						/>

						<div className="space-y-1 text-center">
							<p className="text-pretty font-medium leading-none text-ic-pink">
								{position}
							</p>

							<p className="text-lg font-semibold leading-none text-ic-black">
								{name}
							</p>
						</div>
					</div>
				))}
			</div>

			<PastBoard />
		</PageContainer>
	);
}
