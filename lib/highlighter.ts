import { createHighlighter } from "shiki"

let highlighter: any

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ["one-dark-pro", "github-light", "github-dark"],
      langs: ["ts", "tsx", "js", "jsx", "bash", "json", "html", "css"]
    })
  }

  return highlighter
}

const langMap: Record<string, string> = {
  typescript: "ts",
  ts: "ts",
  javascript: "js",
  js: "js",
  tsx: "tsx",
  jsx: "jsx",
  html: "html",
  css: "css",
  json: "json",
  bash: "bash",
}

export async function highlightCode(code: string, lang: string) {
  const highlighter = await getHighlighter()

  const normalizedLang =
    langMap[lang.toLowerCase()] || "ts"

  interface PreNode {
    properties: {
      style?: string
      [key: string]: unknown
    }
    [key: string]: unknown
  }

  interface Transformer {
    pre?: (node: PreNode) => void
    [key: string]: unknown
  }

  return highlighter.codeToHtml(code, {
    lang: normalizedLang,
    theme: "github-dark",
    transformers: [
      {
        pre: (node: PreNode) => {
          node.properties.style = "background-color: transparent;"
        }
      } as Transformer
    ],
  })
}