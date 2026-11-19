/** Shared pill-button styles for the events pages. */
const base =
	"inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 text-[15px] font-semibold no-underline transition-colors focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px]";

export const buttonStyles = {
	/** Dark filled, on light backgrounds */
	darkFilled: `${base} bg-ev-text text-ev-bg-light hover:bg-black focus-visible:outline-ev-accent-strong`,
	/** Outlined, on light backgrounds */
	outlineLight: `${base} border border-ev-text text-ev-text hover:bg-black/5 focus-visible:outline-ev-accent-strong`,
	/** Accent filled, on dark backgrounds */
	accentFilled: `${base} bg-ev-accent text-ev-bg-dark hover:brightness-95 focus-visible:outline-ev-accent`,
	/** Outlined, on dark backgrounds */
	outlineDark: `${base} border border-ev-border-dark text-ev-text-on-dark hover:bg-white/[.08] focus-visible:outline-ev-accent`,
};
