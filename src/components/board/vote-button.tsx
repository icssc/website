"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const VOTING_OPEN = new Date("2026-04-02T03:00:00Z"); // Apr 1 2026 8:00 PM Pacific
const VOTING_CLOSE = new Date("2026-04-09T06:59:59Z"); // Apr 8 2026 11:59 PM Pacific

type VotingState = "before" | "open" | "closed";

export function VoteButton() {
	const [votingState, setVotingState] = useState<VotingState | null>(null);

	useEffect(() => {
		const now = new Date();
		if (now < VOTING_OPEN) setVotingState("before");
		else if (now <= VOTING_CLOSE) setVotingState("open");
		else setVotingState("closed");
	}, []);

	if (votingState === "open") {
		return (
			<div className="flex justify-center">
				<a
					href="https://icssc.link/vote"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button className="bg-ic-pink px-6 py-2 text-base hover:bg-ic-pink-hover">
						Vote Now!
					</Button>
				</a>
			</div>
		);
	}

	if (votingState === "closed") {
		return (
			<div className="flex justify-center">
				<Button disabled className="px-6 py-2 text-base">
					Voting Has Closed
				</Button>
			</div>
		);
	}

	return null;
}
