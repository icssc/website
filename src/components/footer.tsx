import {
    SiDiscord,
    SiFacebook,
    SiInstagram,
} from "@icons-pack/react-simple-icons";

export function Footer() {
    return (
        <div className="mt-16 flex h-24 justify-center p-3 text-ic-white">
            <div className="max-w-screen-3xl flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-md bg-ic-black px-8 text-sm lg:flex-row lg:justify-between lg:px-16">
                <div className="whitespace-nowrap">
                    &#169; 2024 ICSSC. All Rights Reserved.
                </div>
                <div className="flex space-x-4">
                    <SiFacebook className="size-4" />
                    <SiDiscord className="size-4" />
                    <SiInstagram className="size-4" />
                </div>
            </div>
        </div>
    );
}
