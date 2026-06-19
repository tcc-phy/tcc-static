import { Variant, Size } from "@/types/style.types";

const getActionElementStyles = (variant: Variant, size: Size) => {
    const base =
        "inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-none shadow-sm";

    const sizes = {
        normal: "px-6 py-2.5",
        small: "px-4 py-1.5 text-xs",
    };

    const variants = {
        primary: "bg-primary text-text-inverted hover:bg-primary-hover",
        outline:
            "border border-primary bg-transparent hover:bg-black/5",
        ghost:
            "bg-transparent text-text-muted hover:text-text hover:bg-bg-card",
        vertical:
            "bg-primary text-text-inverted hover:bg-primary-hover py-2.5 px-6 [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase text-xs",
        verticalOutline:
            "border border-primary bg-transparent hover:bg-black/5 py-2.5 px-6 [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase text-xs",
        noStyle: ""
    };

    return `${base} ${variants[variant]} ${!["vertical", "noStyle"].includes(variant) ? sizes[size] : ""
        }`;
};

export default getActionElementStyles;
