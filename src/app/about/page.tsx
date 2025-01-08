import Image from "next/image";
import Link from "next/link";
import { AffiliatedClubs } from "@/components/about/affliated-clubs/affiliated-clubs";
import { Awards } from "@/components/about/awards/awards";
import { BitsAndBytes } from "@/components/about/bit-and-bytes/bits-and-bytes";
import { AboutBoard } from "@/components/about/board/about-board";
import { Committees } from "@/components/about/committees/committees";
import { PageContainer } from "@/components/shared/page-container";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";
import generalImage from "@/public/landing/general.jpg";
import { ExternalLinkIcon } from "lucide-react";

export default function Page() {
    return (
        <PageContainer className="max-w-none px-0 py-0 lg:px-0">
            <div className="mx-auto flex h-[100svh] w-full flex-col items-end overflow-hidden rounded-md p-3">
                <div className="relative h-full min-h-full w-full min-w-full">
                    <Image
                        src={generalImage}
                        alt="foo" // TODO
                        width={2000}
                        height={800}
                        className="h-full w-full rounded-md object-cover blur-sm"
                        priority
                        placeholder="blur"
                    />

                    <div
                        className={cn(
                            "absolute inset-0 rounded-md border-black bg-neutral-800 bg-opacity-60 p-3"
                        )}
                    />

                    <div className="absolute bottom-0 left-1/2 flex h-fit w-full max-w-screen-3xl -translate-x-1/2 px-4 pb-8 lg:px-8">
                        <div className="text-pretty text-[clamp(3rem,8vw,8rem)] font-semibold leading-none tracking-tighter text-ic-white md:text-balance">
                            UCI&apos;s largest{" "}
                            <span className="text-ic-pink">
                                Computer Science
                            </span>{" "}
                            community
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto space-y-24">
                <SectionContainer className="flex flex-col space-y-8 md:items-center md:text-center">
                    <SectionHeading title="Mission Statement" />

                    <div className="flex max-w-[1200px] flex-col gap-x-8 gap-y-2 md:flex-row md:justify-center">
                        <p className="max-h-10 max-w-10 text-7xl leading-none text-ic-pink">
                            &ldquo;
                        </p>
                        <p className="text-pretty text-lg md:pt-4 md:text-2xl">
                            ICSSC provides opportunities for students to develop
                            professionally, academically, and socially and aims
                            to improve the quality of student life. Our events
                            are open to everyone, and we encourage an
                            environment of diversity and inclusion.
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
                        <div className="hover:bg-ic-pink-hover flex h-12 w-fit items-center justify-center space-x-2 rounded-md bg-ic-pink px-8 text-lg font-medium text-ic-white shadow-md transition md:text-2xl">
                            <span>See our Constitution</span>{" "}
                            <ExternalLinkIcon className="size-[18px] md:size-auto" />
                        </div>
                    </Link>
                </SectionContainer>

                <Committees />
                <BitsAndBytes />
                <AboutBoard />
                <AffiliatedClubs />
                <Awards />
            </div>
        </PageContainer>
    );
}
