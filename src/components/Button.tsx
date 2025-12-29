import type { VariantProps } from "class-variance-authority";
import { ButtonVariants } from "./button.style";
import { cn } from "../lib/utils";

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

function Button({ variant, size, className, disabled, children }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        ButtonVariants({ variant, size }),
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
