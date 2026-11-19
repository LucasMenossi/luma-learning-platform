import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "light" | "outline";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-[#2448df] focus-visible:outline-primary",
  secondary:
    "border border-border bg-white text-ink hover:border-primary hover:text-primary focus-visible:outline-primary",
  light:
    "bg-[#FFEE7E] text-ink hover:bg-[#f8e46f] focus-visible:outline-white",
  outline:
    "border border-[#DBDFEB] bg-white text-ink hover:border-primary focus-visible:outline-primary",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-md text-center font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
