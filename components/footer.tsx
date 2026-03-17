import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Terminal, Github, Twitter, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Reference", href: "/reference" },
      { label: "Learn", href: "/learn" },
      { label: "Sutra", href: "https://sutra-cli.vercel.app", external: true },
      // { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    heading: "Topics",
    links: [
      { label: "Git", href: "/reference/git" },
      { label: "Selenium (Java)", href: "/reference/selenium" },
      { label: "AWS", href: "/reference/aws" },
      // { label: "API design", href: "/reference/api" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contribute", href: "/contribute", external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-10">

        {/* Top row — brand + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 flex flex-col gap-5 pr-0 md:pr-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg border border-border bg-muted flex items-center justify-center">
                <Terminal size={13} className="text-foreground" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Codeprasth
              </span>
            </div>

            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-55">
              A reference directory built for developers who want to move fast
              and ship confidently.
            </p>

            <Badge
              variant="outline"
              className="w-fit gap-1.5 px-3 py-1 text-[11px] font-medium text-muted-foreground tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Free forever
            </Badge>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors duration-150"
              >
                <Github size={14} className="text-muted-foreground" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors duration-150"
              >
                <Twitter size={14} className="text-muted-foreground" />
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Separator className="my-10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Codeprasth. Built for developers.
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors duration-150"
            >
              Terms
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-foreground transition-colors duration-150"
            >
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}