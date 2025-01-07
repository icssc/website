import Image from "next/image";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function BitsAndBytes() {
    return (
        <SectionContainer className="bg-ic-black py-16 text-ic-white">
            <SectionHeading
                title="Bits and Bytes Program"
                subtitle="Bits & Bytes is a year long mentorship program helping new ICS students transition to life at UCI through organized socials! Group leaders, aka Bytes, will guide and provide a tighknit community at UCI for incoming freshmen and transfers, aka Bits."
                subtitleClassName="text-ic-muted-dark"
                details="Applications are currently closed. Check back in the Fall for application details."
                detailsClassName="text-center text-ic-muted-dark"
            />

            <div className="flex flex-col items-start gap-x-16 gap-y-8 lg:flex-row">
                <div className="flex flex-col items-center justify-center space-y-8 lg:w-1/2">
                    <div className="flex max-h-48 items-center justify-center overflow-hidden">
                        <Image
                            src="/bits-and-bytes/become-a-byte.png"
                            alt="Become a Byte"
                            width={500}
                            height={200}
                            className="object-contain"
                        />
                    </div>

                    <div className="space-y-2 text-center">
                        <p className="text-3xl font-semibold">Become a Byte</p>
                        <p className="text-pretty">
                            Bytes have the opportunity to give back by being
                            mentors, role models, and friends to their bits.
                            Bytes are encouraged to share their professional
                            experiences, academic advice, and social know-how!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8 lg:w-1/2">
                    <div className="flex max-h-48 items-center justify-center overflow-hidden">
                        <Image
                            src="/bits-and-bytes/join-a-family.png"
                            alt="Become a Byte"
                            width={500}
                            height={200}
                            className="object-contain"
                        />
                    </div>

                    <div className="space-y-2 text-center">
                        <p className="text-3xl font-semibold">Join a Family</p>
                        <p className="text-pretty">
                            In a Bits &#38; Byte Fam, there are 2 bytes with 2-6
                            bits each! Bytes focus on creating a great
                            experience, Bits focus on having fun!
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
