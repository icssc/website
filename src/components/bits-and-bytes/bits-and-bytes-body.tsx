"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link as LinkIcon } from "lucide-react";

type FeatureCardProps = {
    src: string;
    alt: string;
    title: string;
    description: string;
    imageClassName?: string;
    href?: string;
};

function FeatureCard({ src, alt, title, description, imageClassName, href }: FeatureCardProps) {
    const [titleHovered, setTitleHovered] = useState(false);
    return (
        <motion.div
            className="relative flex flex-col items-center justify-center space-y-8 lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="relative flex h-52 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10 [background-size:20px_20px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"></div>
                <div className="pointer-events-none absolute inset-0 -z-10 bg-ic-white [mask-image:radial-gradient(circle_at_center,transparent_30%,black_70%)]"></div>

                <motion.img
                    src={src}
                    alt={alt}
                    width={500}
                    height={200}
                    className={`object-contain ${imageClassName ?? ""}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                />
            </div>

            <div className="space-y-2 text-center">
                {href ? (
                    <Link
                        href={href}
                        target="_blank"
                        aria-label={`${title} - learn more`}
                        className="text-3xl font-semibold transition-colors hover:text-ic-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ic-pink/60 focus-visible:ring-offset-2"
                    >
                        <motion.span
                            whileHover={{ scale: 1.025 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="inline-block"
                        >
                            {title}
                        </motion.span>
                        <LinkIcon aria-hidden className="ml-2 inline-block align-middle size-5 md:hidden" />
                    </Link>
                ) : (
                    <p className="text-3xl font-semibold">{title}</p>
                )}
                <p className="text-pretty">{description}</p>
            </div>
        </motion.div>
    );
}

const FEATURES: FeatureCardProps[] = [
    {
        src: "/assets/bits-and-bytes/become-a-byte.png",
        alt: "Become a Byte",
        title: "Become a Byte",
        description:
            "Bytes have the opportunity to give back by being mentors, role models, and friends to their bits. Bytes are encouraged to share their professional experiences, academic advice, and social know-how!",
        imageClassName: "-mt-8",
        href: "https://forms.gle/dn9J7CJdZ9jggB5f6",
    },
    {
        src: "/assets/bits-and-bytes/join-a-family.png",
        alt: "Join a Family",
        title: "Join a Family",
        description:
            "In a Bits & Byte Fam, there are 2 bytes with 2-6 bits each! Bytes focus on creating a great experience, Bits focus on having fun!",
        imageClassName: "-mt-14",
        href: "https://forms.gle/VeGZbMkWPNnko32s6",
    },
];

export function BitsAndBytesBody() {
    return (
        <div className="flex flex-col items-start gap-x-16 lg:flex-row">
            {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
            ))}
        </div>
    )
}