import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
    return (
        <div className="mt-32 flex h-24 justify-center bg-ic-black px-16 text-ic-white">
            <div className="max-w-screen-3xl flex h-full w-full flex-col items-center justify-center gap-y-2 lg:flex-row lg:justify-between">
                <div>&#169; 2024 ICSSC. All Rights Reserved.</div>
                <div className="flex space-x-4">
                    <BsFacebook />
                    <BsDiscord />
                    <BsInstagram />
                </div>
            </div>
        </div>
    );
}
