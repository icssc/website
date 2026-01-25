import { BOARD_INFO, BoardMember } from "@/components/board/board-info";
import { PastBoard } from "@/components/board/past-board";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeading } from "@/components/shared/page-heading";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export default function Page() {
	return (
		<PageContainer className="space-y-12">
			<PageHeading
				title="Our Board"
				subtitle="ICSSC board members help make our events and initiatives possible. This page recognizes board members past and present."
			/>

			<SectionContainer className="space-y-8 px-0 lg:px-0">
				<SectionHeading title="2025-2026" />
				<div className="flex flex-wrap justify-center gap-12">
					{BOARD_INFO.filter((item) => !!item.image).map(
						({ name, position, image }: BoardMember) => (
							<div
								className="flex w-50 flex-col items-center space-y-4 lg:w-60"
								key={name + position}
							>
								{image ? (
									<img
										src={image}
										alt={name}
										width={500}
										height={500}
										className="aspect-square rounded-md object-cover shadow-xl"
									/>
								) : (
									<></>
								)}

								<div className="space-y-1 text-center">
									<p className="text-pretty font-medium leading-none text-ic-pink">
										{position}
									</p>

									<p className="text-lg font-semibold leading-none text-ic-black">
										{name}
									</p>
								</div>
							</div>
						),
					)}
				</div>
				<div className="flex flex-wrap justify-center gap-8">
					{BOARD_INFO.filter((item) => !item.image).map((item) => (
						<div
							key={item.name + item.position}
							className="flex w-40 flex-col items-center space-y-1 text-center"
						>
							<p className="font-medium leading-none text-ic-pink">
								{item.position}
							</p>
							<p className="text-lg font-semibold leading-none">{item.name}</p>
						</div>
					))}
				</div>
				{/* <div className="flex flex-wrap justify-center gap-12">
					{BOARD_INFO.map(({ name, position, image }) => (
						<div
							className="w-50 flex flex-col items-center space-y-4 lg:w-60"
							key={name + position}
						>
							<img
								src={image}
								alt={name}
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
					</div> */}
			</SectionContainer>

			<PastBoard />
		</PageContainer>
	);
}
