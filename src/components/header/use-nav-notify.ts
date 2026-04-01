import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nav-notify-dismissed";

export function useNavNotifyDismissed(path: string) {
	const pathname = usePathname();
	const [dismissed, setDismissed] = useState(true);

	useEffect(() => {
		const key = `${STORAGE_KEY}:${path}`;
		if (pathname === path) {
			localStorage.setItem(key, "1");
			setDismissed(true);
		} else {
			setDismissed(localStorage.getItem(key) === "1");
		}
	}, [pathname, path]);

	return dismissed;
}
