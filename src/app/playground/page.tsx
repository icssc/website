import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="h-[100dvh] w-[100dvw] max-w-[1728px] overflow-hidden bg-white p-[10px]">
            <div className="flex h-full items-end rounded-lg bg-black p-[10px]">
                <h1
                    className={cn(
                        "text-ic-pink group flex transform flex-row whitespace-nowrap font-semibold leading-[1] tracking-[-0.075em] hover:flex-col",
                        "[font-size:_clamp(80px,20vw,225px)] md:[font-size:_clamp(100px,14vw,225px)]"
                    )}
                >
                    <p>ICS</p>
                    <div className="flex flex-col md:flex-row">
                        <span className="flex whitespace-nowrap">
                            <span>S</span>
                            <span className="hidden group-hover:flex">
                                tudent&nbsp;
                            </span>
                        </span>
                        <span className="flex whitespace-nowrap">
                            <span>C</span>
                            <span className="hidden group-hover:flex">
                                ouncil
                            </span>
                        </span>
                    </div>
                </h1>
            </div>
        </div>
    );
}
