import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "light" | "ghost";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
};

type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ocean text-white border border-ocean hover:bg-[#102e43] hover:border-[#102e43]",

  secondary:
    "bg-gold text-white border border-gold hover:bg-[#8d6d3f] hover:border-[#8d6d3f]",

  outline: "border border-ocean text-ocean hover:bg-ocean hover:text-white",

  light:
    "bg-white text-ocean border border-white hover:bg-ivory hover:border-ivory",

  ghost: "border border-transparent text-ocean hover:text-gold",
};

const baseClasses =
  "group inline-flex min-h-[30px] rounded-sm items-center justify-center gap-3 px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50";

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    arrow = false,
    ...rest
  } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>

      {arrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        {...(rest as Omit<
          AnchorHTMLAttributes<HTMLAnchorElement>,
          "className" | "children"
        >)}
        href={props.href}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      {...(rest as Omit<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
      >)}
      className={classes}
    >
      {content}
    </button>
  );
}
