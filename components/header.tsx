import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <div className="fixed top-5 left-0 right-0 w-full flex justify-center z-50">
      <nav className="w-1/2 flex items-center justify-between gap-6 px-5 py-2.5 rounded-xl border border-border bg-background/80 backdrop-blur-md shadow-sm">

        {/* Logo */}
        <span className="text-sm font-semibold tracking-tight text-foreground select-none">
          CodePrasth
        </span>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          <li>
            <Link
              href="/reference"
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground rounded-lg transition-all duration-200 hover:text-foreground hover:bg-accent"
            >
              Reference
            </Link>
          </li>
          <li>
            <Link
              href="/learn"
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground rounded-lg transition-all duration-200 hover:text-foreground hover:bg-accent"
            >
              Learn
            </Link>
          </li>
        </ul>


        {/* CTA */}
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}