"use client";

import Link from "next/link";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsInfo } from "@/components/projects/projects-info";
import { PageHeading } from "@/components/shared/page-heading";

export default function Page() {
    return (
        <div className="mx-auto max-w-screen-3xl space-y-16 px-8 py-16 lg:px-16">
            <PageHeading
                title="Projects"
                subtitle={<Subtitle />}
            />

            <ProjectsInfo />

            <ProjectsGrid />
        </div>
    );
}

function Subtitle() {
    return (
        <>
            ICSSC actively develops and maintains software projects that benefit
            the UCI community. We encourage contributions to our projects via
            our{" "}
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
