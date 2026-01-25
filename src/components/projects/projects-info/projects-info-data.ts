import { type IconType, SiGithub } from "@icons-pack/react-simple-icons";
import { GraduationCapIcon, HeartIcon, type LucideIcon } from "lucide-react";

type ProjectInfo = {
	title: string;
	description: string;
	icon: LucideIcon | IconType;
};

export const PROJECT_INFO: [ProjectInfo, ProjectInfo, ProjectInfo] = [
	{
		title: "Open Source",
		description:
			"All of our projects are proudly open source and on our Github",
		icon: SiGithub,
	},
	{
		title: "Loved by Anteaters",
		description:
			"Our projects are trusted and used by tens of thousands of UCI students",
		icon: HeartIcon,
	},
	{
		title: "Built by Students",
		description:
			"ICSSC Projects is student-led; we recruit new designers and developers every year",
		icon: GraduationCapIcon,
	},
];
