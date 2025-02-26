"use client";

import Link from "next/link";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsInfo } from "@/components/projects/projects-info";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeading } from "@/components/shared/page-heading";

export default function Page() {
	return (
		<PageContainer>
			<PageHeading title="Projects" subtitle={<Subtitle />} />

			<ProjectsInfo />

			<ProjectsGrid />
		</PageContainer>
	);
}

function Subtitle() {
	return (
		<>
			ICSSC actively develops and maintains software projects that benefit the
			UCI community. We encourage contributions to our projects via our{" "}
			<Link
				href={"https://www.github.com/icssc"}
				target="_blank"
				referrerPolicy="no-referrer"
			>
				Github
			</Link>
			.
		</>
	);
}
