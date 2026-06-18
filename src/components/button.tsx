import { Variant, Size } from "@/types/style.types";
import getActionElementStyles from "@/styles/action";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    children: React.ReactNode;
}

const Button = ({
    variant = "primary",
    size = "normal",
    children,
    className = "",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`${getActionElementStyles(variant, size)} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
