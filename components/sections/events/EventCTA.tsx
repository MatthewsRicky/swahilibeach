import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type EventCTAProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  email?: string;
};

export default function EventCTA({
  eyebrow,
  title,
  description,
  buttonLabel,
  href,
  email,
}: EventCTAProps) {
  return (
    <section className="relative overflow-hidden bg-ocean py-24 text-white sm:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <span className="text-eyebrow text-gold">{eyebrow}</span>

          <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {title}
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            {description}
          </p>

          <Link
            href={href}
            className="mt-9 inline-flex items-center gap-5 border-b border-gold pb-3 text-xs font-medium tracking-[0.16em] text-white transition-colors hover:text-gold"
          >
            {buttonLabel.toUpperCase()}
            <ArrowUpRight size={17} strokeWidth={1.4} />
          </Link>

          {email && (
            <p className="mt-6 text-xs text-white/55">
              Or write to{" "}
              <a
                href={`mailto:${email}`}
                className="text-white underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
              >
                {email}
              </a>
            </p>
          )}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full border border-white/10 sm:h-[38rem] sm:w-[38rem]"
      />
    </section>
  );
}
