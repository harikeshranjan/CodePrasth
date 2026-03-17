import { Info } from "lucide-react";
import CopyButton from "./copy-button";
import { Badge } from "./ui/badge";

type SnippetProps = {
  title: string;
  id: string;
  description?: string;
  lang: string;
  code: string;
  tags?: string[];
};

type NoteProps = {
  children: React.ReactNode;
  title?: string;
};

function Snippet({ title, id, description, lang, code, tags }: SnippetProps) {
  return (
    <div id={id} className="group scroll-mt-24">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="text-[15px] font-semibold text-foreground leading-snug">
            {title}
          </h3>
          {description && (
            <p className="text-[13px] text-muted-foreground mt-0.5 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          {tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[11px] px-2 py-0.5 rounded-md hidden sm:inline-flex"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Code block */}
      <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            {lang}
          </span>
          <CopyButton code={code} />
        </div>
        <pre className="px-4 py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          <code className="text-[12.5px] leading-relaxed text-foreground/80 font-mono whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

// ── Note / callout ────────────────────────────────────────────────────────────

function Note({ children, title = "Note" }: NoteProps) {
  return (
    <div className="flex gap-3 px-4 py-3.5 rounded-xl border border-border bg-muted/30 my-4">
      <Info size={15} className="text-muted-foreground mt-0.5 shrink-0" />
      <div>
        <p className="text-[12px] font-semibold text-foreground mb-0.5">
          {title}
        </p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export { Snippet, Note, Section };