import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Copy,
  Zap,
  BookOpen,
  Code2,
  ArrowRight,
  Terminal,
  Layers,
  Search,
} from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

const features = [
  {
    icon: Zap,
    title: "Instant snippets",
    description:
      "Production-ready code for the tasks that always slow you down. No boilerplate, no googling.",
  },
  {
    icon: Layers,
    title: "Structured reference",
    description:
      "Every concept organized by topic. Scan, find, understand — then ship.",
  },
  {
    icon: BookOpen,
    title: "Learn by doing",
    description:
      "Guided walkthroughs that go from zero to working code without the fluff.",
  },
  {
    icon: Search,
    title: "Built to search",
    description:
      "Find exactly what you need in seconds. Keyword, concept, or framework — it's all here.",
  },
];

const snippets = [
  {
    tag: "Auth",
    title: "JWT middleware",
    lang: "TypeScript",
    code: `export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};`,
  },
  {
    tag: "React",
    title: "useDebounce hook",
    lang: "TypeScript",
    code: `export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}`,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-48 pb-36 overflow-hidden">

        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial glow behind hero text */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-foreground/5 blur-3xl" />

        <Badge
          variant="outline"
          className="mb-8 gap-2 px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wide uppercase"
        >
          <Terminal size={11} />
          For developers, by developers
        </Badge>

        <h1 className="relative max-w-3xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]">
          The directory
          <br />
          <span className="relative inline-block mt-1">
            developers reach for
            <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground/20 rounded-full" />
          </span>
        </h1>

        <p className="relative mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Never struggle with setup again. Ready-to-use{" "}
          <span className="text-foreground font-medium">code snippets</span> for
          the trickiest tasks — just{" "}
          <span className="text-foreground font-medium">
            copy, paste, and ship faster.
          </span>
        </p>

        <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-xl gap-2 px-7 h-12">
            <Link href="/reference" className="flex items-center gap-2">
              <Code2 size={16} />
              Browse reference
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl gap-2 px-7 h-12"
          >
            <Link href="/learn" className="flex items-center gap-2">
              <BookOpen size={16} />
              Start learning
            </Link>
          </Button>
        </div>

        {/* Social proof strip */}
        <div className="relative mt-16 flex items-center gap-4 text-xs text-muted-foreground">
          <span>Used by 2,000+ developers</span>
          <Separator orientation="vertical" className="h-3.5" />
          <span>500+ snippets</span>
          <Separator orientation="vertical" className="h-3.5" />
          <span>Free forever</span>
        </div>
      </section>

      {/* ── Snippet preview ── */}
      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              Popular snippets
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Copy. Paste. Done.
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground mb-0.5"
          >
            <Link href="/reference" className="flex items-center gap-1.5">
              View all <ArrowRight size={14} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {snippets.map((s) => (
            <div
              key={s.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:border-foreground/20 transition-colors duration-200"
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40">
                <div className="flex items-center gap-2.5">
                  <Badge
                    variant="secondary"
                    className="text-[11px] px-2.5 py-0.5"
                  >
                    {s.tag}
                  </Badge>
                  <span className="text-sm font-medium text-foreground">
                    {s.title}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] text-muted-foreground">
                    {s.lang}
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-1.5 rounded-md hover:bg-accent">
                    <Copy size={13} className="text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Code block */}
              <pre className="px-5 py-5 text-[12.5px] leading-relaxed text-muted-foreground font-mono overflow-x-auto scrollbar-none whitespace-pre">
                <code>{s.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 pb-36 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            Why Codeprasth
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Built around your workflow
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background hover:bg-muted/40 transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-xl border border-border bg-muted flex items-center justify-center">
                <Icon size={15} className="text-foreground" />
              </div>
              <div className="space-y-1.5">
                <p className="text-sm font-semibold text-foreground">
                  {title}
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-6 pb-36 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border px-12 py-20 text-center">
          <BackgroundLines>

            <p className="relative text-xs font-medium uppercase tracking-widest mb-4">
              Get started now
            </p>

            <h2 className="relative text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5">
              Stop wrestling with setup.
              <br />
              Start shipping code.
            </h2>

            <p className="relative text-sm mb-10 max-w-sm mx-auto leading-relaxed">
              Every snippet is production-tested and ready to drop into your
              project.
            </p>

            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                variant="default"
                className="rounded-xl gap-2 px-7 h-12"
              >
                <Link href="/reference" className="flex items-center gap-2">
                  <Code2 size={16} />
                  Browse snippets
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl gap-2 px-7 h-12 hover:bg-background/10"
              >
                <Link href="/learn" className="flex items-center gap-2">
                  Learn the concepts <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </BackgroundLines>
        </div>
      </section>

    </main>
  );
}