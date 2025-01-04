import {
    SiDiscord,
    SiFacebook,
    SiGmail,
    SiInstagram,
    type IconType,
} from "@icons-pack/react-simple-icons";

type Contact = {
    label: string;
    href: string;
    icon: IconType;
};

export const CONTACT_DATA: Contact[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/ICSStudentCouncil/",
        icon: SiFacebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/icssc.uci/",
        icon: SiInstagram,
    },
    {
        label: "Discord",
        href: "https://discord.gg/c4t5dGcM9S",
        icon: SiDiscord,
    },
    // {
    //     label: "Email",
    //     href: "mailto:icssc@uci.edu",
    //     icon: SiGmail,
    // },
];
