import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Variant, Size } from "@/types/style.types";
import getActionElementStyles from "@/styles/action";

interface LinkProps extends NextLinkProps {
    variant?: Variant;
    size?: Size;
    className?: string;
    children: React.ReactNode;
}

const Link = ({
    variant = "primary",
    size = "normal",
    className = "",
    children,
    ...props
}: LinkProps) => {
    return (
        <NextLink
            className={`${getActionElementStyles(variant, size)} ${className}`}
            {...props}
        >
            {children}
        </NextLink>
    );
};

export default Link;
