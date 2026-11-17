import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
};

const alignmentClasses = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${alignmentClasses[align]} ${className}`}
    >
      {eyebrow && <span className="text-eyebrow text-gold">{eyebrow}</span>}

      <h2
        className={`max-w-3xl text-4xl leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <div className="max-w-2xl text-sm leading-8 text-charcoal/70 sm:text-base">
          {description}
        </div>
      )}
    </div>
  );
}
