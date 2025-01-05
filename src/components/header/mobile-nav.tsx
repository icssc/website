import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";

export function MobileNav() {
    return (
        <Dialog>
            <DialogTrigger className="flex lg:hidden">
                <MenuIcon className="stroke-ic-red-500 aspect-square size-8" />
            </DialogTrigger>

            <DialogContent className="z-[6000]">
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
