import {
    SiDiscord,
    SiFacebook,
    SiInstagram,
} from "@icons-pack/react-simple-icons";

export function Footer() {
    return (
        <div className="mt-16 flex h-24 justify-center text-ic-white">
            <div className="max-w-screen-3xl flex h-full w-full flex-col items-center justify-center gap-y-2 bg-ic-black px-16 lg:flex-row lg:justify-between">
                <div>&#169; 2024 ICSSC. All Rights Reserved.</div>
                <div className="flex space-x-4">
                    <SiFacebook />
                    <SiDiscord />
                    <SiInstagram />
                </div>
            </div>
        </div>
    );
}
