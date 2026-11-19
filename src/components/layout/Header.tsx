"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#community" },
];

const linkClass =
  "text-[14px] leading-5 text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="top"
      className="relative z-10 min-h-[70px] w-full border-b border-border bg-page max-[900px]:min-h-[69px]"
    >
      <div className="mx-auto flex h-[69px] w-full items-center px-20 max-[900px]:h-[68px] max-[900px]:px-6">
        <a
          className="flex-1 text-[22px] font-extrabold leading-none tracking-[-1.2px] text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          href="#"
          aria-label="Luma — home"
        >
          <Image
            src="/images-updated/Link.svg"
            alt="Luma"
            width={54}
            height={17}
            priority
          />
        </a>

        <nav
          className="flex items-center gap-8 max-[900px]:hidden"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a className={linkClass} key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-6 max-[900px]:hidden">
          <a className={linkClass} href="#contact">
            Log in
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-[9px] bg-primary px-5 text-[14px] font-semibold text-white transition-[color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#2448df] hover:shadow-md active:translate-y-0 active:scale-[0.98]"
            href="#courses"
          >
            Start learning
          </a>
        </div>

        <button
          className="hidden h-7 w-7 flex-col items-center justify-center gap-1 border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary max-[900px]:flex"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-[19px] rounded-sm bg-ink" />
          <span className="block h-0.5 w-[19px] rounded-sm bg-ink" />
          <span className="block h-0.5 w-[19px] rounded-sm bg-ink" />
        </button>
      </div>

      {menuOpen && (
        <nav
          className="hidden flex-col border-t border-border bg-page px-5 pb-5 pt-2 max-[900px]:flex"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              className="py-3 text-[14px] text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="py-3 text-[14px] text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </a>
          <a
            className="mt-2 rounded-[9px] bg-primary px-4 py-[13px] text-center text-[14px] font-semibold text-white transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#2448df] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href="#courses"
            onClick={() => setMenuOpen(false)}
          >
            Start learning
          </a>
        </nav>
      )}
    </header>
  );
}
