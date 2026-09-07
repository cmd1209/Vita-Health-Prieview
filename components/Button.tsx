import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "highlight";
  size?: "small" | "default";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

export default function Button({
  variant = "primary",
  size = "default",
  children,
  iconLeft,
  iconRight,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant} button--${size} ${className}`.trim()}
      {...props}
      >
      {iconLeft && <span className="button__icon" aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className="button__icon" aria-hidden="true">{iconRight}</span>}
    </button>
  );
}
