import { Badge } from "./ui/badge"
import { highlightCode } from "@/lib/highlighter"
import CopyButton from "./copy-button"

interface CodeBlockProps {
  tag: string
  title: string
  lang: string
  code: string
}

async function CodeBlock({ tag, title, lang, code }: CodeBlockProps) {
  const html = await highlightCode(code, lang)

  return (
    <div className="group border rounded-lg overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40">

        <div className="flex items-center gap-2.5">
          <Badge
            variant="secondary"
            className="text-[11px] px-2.5 py-0.5"
          >
            {tag}
          </Badge>

          <span className="text-sm font-medium text-foreground">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2.5">

          <span className="text-[11px] text-muted-foreground">
            {lang}
          </span>

          <CopyButton code={code} />

        </div>

      </div>

      {/* Highlighted Code */}
      <div
        className="text-base overflow-x-auto px-4 h-56 py-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />

    </div>
  )
}

export default CodeBlock