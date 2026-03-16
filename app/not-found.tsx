'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  BookOpen,
  ArrowRight,
  Terminal,
  Home,
} from "lucide-react";
import { useRouter } from "next/navigation";

const suggestions = [
  {
    icon: Code2,
    label: "Reference",
    description: "Browse code snippets by topic",
    href: "/reference",
  },
  {
    icon: BookOpen,
    label: "Learn",
    description: "Guided walkthroughs from zero to working code",
    href: "/learn",
  }
];

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
      {/* Background elements remain same */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-foreground/5 blur-3xl" />

      <div className="relative flex flex-col items-center text-center max-w-2xl w-full">
        {/* Badge - Increased bottom margin */}
        <Badge
          variant="outline"
          className="mb-12 gap-1.5 px-3 py-1 text-xs font-medium text-muted-foreground tracking-wide uppercase"
        >
          <Terminal size={11} />
          404 — Page not found
        </Badge>

        {/* Large 404 display - Increased bottom margin to separate from H1 */}
        <div className="relative mb-8 select-none">
          <span className="text-[120px] sm:text-[180px] font-bold tracking-tighter text-foreground/5 leading-none block">
            404
          </span>
        </div>

        {/* Heading & Description - Added max-width to p for better line length */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            This page doesn't exist
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            The URL you followed might be outdated, mistyped, or the page may
            have been moved. Let's get you back on track.
          </p>
        </div>

        {/* CTAs - Switched to responsive flex-col to sm:flex-row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full cursor-pointer">
          <Button className="flex rounded-xl gap-2 px-8 h-12" onClick={() => router.push("/")}>
            <Home size={15} />
            Back to home
          </Button>
          <Button
            variant="outline"
            className="flex rounded-xl gap-2 px-8 h-12 cursor-pointer"
            onClick={() => router.push("/reference")}
          >
            <BookOpen size={15} />
            Browse reference
          </Button>
        </div>

        {/* Divider - More vertical breathing room */}
        <div className="flex items-center gap-4 w-full max-w-sm mb-12">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
            Or explore
          </span>
          <div className="flex-1 h-px bg-border/60" />
        </div>

        {/* Suggestion cards - Adjusted to grid-cols-2 to match your 2 items */}
        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-lg">
          {suggestions.map(({ icon: Icon, label, description, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col gap-4 p-5 rounded-2xl border border-border bg-background/50 hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl border border-border bg-background flex items-center justify-center">
                  <Icon size={16} className="text-foreground" />
                </div>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">
                  {label}
                </p>
                <p className="text-[13px] text-muted-foreground leading-snug">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}