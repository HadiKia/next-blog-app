import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

const btnType: Record<ButtonVariant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;