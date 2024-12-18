import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
    return (
        <div className="mt-32 flex h-24 flex-col items-center justify-center gap-y-2 bg-ic-black px-16 text-ic-white lg:flex-row lg:justify-between">
            <div>&#169; 2024 ICSSC. All Rights Reserved.</div>

            <div className="flex space-x-4">
                <BsFacebook />
                <BsDiscord />
                <BsInstagram />
            </div>
        </div>
    );
}
