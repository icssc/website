import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ExternalLinkIcon } from "lucide-react";

export function MissionStatement() {
    return (
        <SectionContainer className="flex flex-col space-y-8 md:items-center md:text-center">
            <SectionHeading title="Mission Statement" />

            <div className="flex max-w-[1200px] flex-col gap-x-8 gap-y-2 md:flex-row md:justify-center">
                <p className="max-h-10 max-w-10 text-7xl leading-none text-ic-pink">
                    &ldquo;
                </p>
                <p className="text-pretty text-lg md:pt-4 md:text-2xl">
                    ICSSC provides opportunities for students to develop
                    professionally, academically, and socially and aims to
                    improve the quality of student life. Our events are open to
                    everyone, and we encourage an environment of diversity and
                    inclusion.
                </p>
                <p className="ml-auto max-h-10 max-w-10 text-7xl leading-none text-ic-pink md:ml-0">
                    &rdquo;
                </p>
            </div>

            <Link
                href="https://docs.google.com/document/u/1/d/e/2PACX-1vRyMWoGcQdoROu6-NhLiUrv4oAc1Bj-ixiVfBYGGRax6U4XGaAsePzQ4tXyiVoxBFITMM5Na_DeA_74/pub"
                target="_blank"
                referrerPolicy="no-referrer"
                className="no-underline"
            >
                <div className="flex h-12 w-fit items-center justify-center space-x-2 rounded-md bg-ic-pink px-8 text-lg font-medium text-ic-white shadow-md transition hover:bg-ic-pink-hover md:text-xl">
                    <span>See our Constitution</span>{" "}
                    <ExternalLinkIcon className="size-[18px] md:size-auto" />
                </div>
            </Link>
        </SectionContainer>
    );
}
