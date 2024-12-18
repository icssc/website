import { BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
    return (
        <div className="flex-between mt-32 h-24 bg-ic-black px-16 text-ic-white">
            <div>&#169; 2024 ICSSC. All Rights Reserved.</div>

            <div className="flex space-x-4">
                <BsFacebook />
                <BsDiscord />
                <BsInstagram />
            </div>
        </div>
    );
}
