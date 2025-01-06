import Link from "next/link";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutBoard() {
    return (
        <SectionContainer className="py-8">
            <SectionHeading
                title="Apply to Our Board"
                subtitle="ICSSC board members help make our events and initiatives possible. Executive members are elected democratically."
                details="Applications are currently closed. Check back in the Spring for application details."
                detailsClassName="text-center"
            />

            <div className="text-lg">
                Elections for ICSSC&apos;s executive board are democratically
                held in each Spring quarter. Candidates will submit
                declarations, campaign, and give a short speech about their
                qualifications as described in Article III, Section D of{" "}
                <Link
                    href={
                        "https://docs.google.com/document/d/e/2PACX-1vRyMWoGcQdoROu6-NhLiUrv4oAc1Bj-ixiVfBYGGRax6U4XGaAsePzQ4tXyiVoxBFITMM5Na_DeA_74/pub"
                    }
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    our constitution
                </Link>
                . Other board positions will be filled through application later
                in the quarter.
                <br />
                <br />
                <span className="italic">
                    Running for President, Internal VP, or External VP, requires
                    that you have already been a full member for Fall, Winter,
                    and Spring Quarter.
                </span>
            </div>
        </SectionContainer>
    );
}
