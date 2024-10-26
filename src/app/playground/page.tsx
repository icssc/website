import { Name } from "@/components/hero/name";
import { cn } from "@/lib/utils";

const NAV_ITEMS = ["About", "Events", "Projects"];

export default function Page() {
    return (
        <div className="h-[100dvh] w-[100dvw] max-w-[1728px] overflow-hidden bg-white p-[10px]">
            <div className="absolute left-1/2 top-8 flex translate-x-[-50%] space-x-12">
                {NAV_ITEMS.map((item) => (
                    <div className="flex-center cursor-pointer flex-col text-lg">
                        <p className="peer">{item}</p>
                        <div
                            className={cn(
                                "size-1 rounded-full bg-white",
                                "opacity-0 transition-all duration-500 peer-hover:opacity-100"
                            )}
                        />
                    </div>
                ))}
            </div>

            <div className="flex h-full flex-col justify-end rounded-lg bg-black p-[10px]">
                <Name />
            </div>
        </div>
    );
}
