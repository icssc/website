"use client";

import Link from "next/link";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsInfo } from "@/components/projects/projects-info";

export default function Page() {
    return (
        <div className="max-w-screen-3xl mx-auto space-y-16 px-8 py-16 lg:space-y-32 lg:px-16">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-5xl font-semibold leading-none lg:text-6xl">
                        Projects
                    </h2>

                    <p className="text-ic-muted text-pretty text-lg leading-tight md:max-w-[90%] lg:text-xl">
                        ICSSC actively develops and maintains software projects
                        that benefit the UCI community. We encourage
                        contributions to our projects via our{" "}
                        <Link
                            href={"https://www.github.com/icssc"}
                            target="_blank"
                            referrerPolicy="no-referrer"
                        >
                            Github
                        </Link>
                        .
                    </p>
                </div>

                <ProjectsInfo />

                <ProjectsGrid />
            </div>
        </div>
    );
}
