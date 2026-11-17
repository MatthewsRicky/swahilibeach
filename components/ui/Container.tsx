import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
  as?: "div" | "section" | "article";
};

const sizeClasses = {
  default: "max-w-[1440px]",
  wide: "max-w-[1600px]",
  narrow: "max-w-[900px]",
  full: "max-w-none",
};

export default function Container({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full px-[var(--container-padding)] ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
}
