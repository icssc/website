"use client";

import { useState } from "react";
import { CANDIDATES, type Candidate } from "@/components/board/candidate-info";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

function StatementText({ text }: { text: string }) {
	return (
		<>
			{text.split("\n\n").map((p) => (
				<p key={p.slice(0, 40)}>{p}</p>
			))}
		</>
	);
}

function CandidateCard({ candidate }: { candidate: Candidate }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="flex w-52 flex-col items-center space-y-3 text-center sm:w-56 lg:w-64"
			>
				{candidate.image && (
					<img
						src={candidate.image}
						alt={candidate.name}
						width={500}
						height={500}
						className="aspect-square rounded-md object-cover shadow-xl transition-transform hover:scale-[1.02]"
					/>
				)}

				<div className="space-y-1">
					<p className="text-pretty font-medium leading-none text-ic-pink">
						{candidate.position}
					</p>
					<p className="text-lg font-semibold leading-none text-ic-black">
						{candidate.name}
					</p>
				</div>

				<p className="line-clamp-2 text-sm leading-relaxed text-ic-muted">
					{candidate.statement}
				</p>

				<p className="text-sm font-medium text-ic-pink hover:underline">
					Read full statement
				</p>
			</button>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
					<div className="flex flex-col gap-6 sm:flex-row">
						{candidate.image && (
							<img
								src={candidate.image}
								alt={candidate.name}
								width={200}
								height={200}
								className="h-48 w-48 shrink-0 self-center rounded-md object-cover shadow-lg sm:self-start"
							/>
						)}
						<div className="space-y-3">
							<div>
								<DialogTitle className="text-xl">{candidate.name}</DialogTitle>
								<p className="text-sm font-medium text-ic-pink">
									{candidate.position}
								</p>
							</div>
							<div className="space-y-2 text-sm leading-relaxed text-ic-muted">
								<StatementText text={candidate.statement} />
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}

export function Candidates() {
	return (
		<SectionContainer className="space-y-8 px-0 lg:px-0">
			<SectionHeading title="2025-2026 Candidates" />

			<div className="flex flex-wrap justify-center gap-8 lg:gap-12">
				{CANDIDATES.map((c) => (
					<CandidateCard key={c.name} candidate={c} />
				))}
			</div>
		</SectionContainer>
	);
}
