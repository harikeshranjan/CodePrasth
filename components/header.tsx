"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./mode-toggle";
import { BookOpen, Code2, Home } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/reference", label: "Reference", icon: Code2 },
  { href: "/learn", label: "Learn", icon: BookOpen },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ───────── Desktop Navbar ───────── */}
      <div className="hidden md:flex fixed top-5 left-0 right-0 w-full justify-center z-50">
        <nav className="w-1/2 flex items-center justify-between gap-6 px-5 py-2.5 rounded-xl border border-border bg-background/30 backdrop-blur-md shadow-sm">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground select-none"
          >
            CodePrasth
          </Link>

          {/* Links */}
          <ul className="flex items-center gap-3 justify-center">
            {navLinks.slice(1).map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    px-3 py-1.5 text-base font-medium rounded-lg transition-all duration-200
                    border border-transparent flex items-center gap-1
                    ${isActive(href)
                      ? "text-foreground border-accent bg-accent/40"
                      : "text-muted-foreground hover:text-foreground hover:border-accent hover:bg-neutral-100 dark:hover:bg-neutral-900"
                    }
                  `}
                >
                  <Icon size={18} className="inline-block mr-1" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mode Toggle */}
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </nav>
      </div>

      {/* ───────── Mobile Floating Dock ───────── */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center z-50">
        <nav className="w-[92%] flex items-center justify-between px-2 py-2 rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-sm">

          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                className="relative flex flex-col items-center justify-center w-20 py-2 text-[11px] font-medium transition-all duration-200"
              >
                {/* Active pill background */}
                {active && (
                  <span className="absolute inset-0 rounded-xl bg-accent/70 -z-10" />
                )}

                <Icon
                  size={18}
                  strokeWidth={active ? 2.4 : 1.8}
                  className={`transition-all duration-200 ${active
                    ? "text-accent-foreground scale-110"
                    : "text-muted-foreground"
                    }`}
                />

                <span
                  className={`mt-0.5 ${active
                    ? "text-accent-foreground"
                    : "text-muted-foreground"
                    }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="w-px h-8 bg-border mx-1" />

          {/* Theme toggle */}
          <div className="flex items-center justify-center w-12">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}