import Link from "next/link";
import { CONTACT_DATA } from "@/components/contact/contact-data";
import { PageHeading } from "@/components/shared/page-heading";

export default function Page() {
    return (
        <div className="max-w-screen-3xl space-y-16 px-8 py-8 lg:px-16">
            <PageHeading
                title="Contact Us"
                subtitle="Interested in collaborating? Have a question or feedback? Don't hesitate to reach out!"
            />

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
                <Link
                    href={"mailto:icssc@uci.edu"}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="no-underline"
                >
                    <div className="hover:bg-ic-pink-hover mx-auto flex h-12 w-fit items-center justify-center rounded-full bg-ic-pink px-8 text-2xl font-medium text-ic-white shadow-md transition">
                        <p>iccsc@uci.edu</p>
                    </div>
                </Link>

                <div className="flex flex-wrap justify-center gap-x-8">
                    {CONTACT_DATA.map(({ label, href, icon: Icon }) => (
                        <Link
                            href={href}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="group no-underline"
                        >
                            <Icon
                                className="hover:text-ic-pink-hover size-12 transition duration-300"
                                aria-label={label}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
