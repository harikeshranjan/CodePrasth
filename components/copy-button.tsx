"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

interface CopyButtonProps {
  code: string
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-1.5 rounded-md hover:bg-accent"
    >
      {copied ? (
        <Check size={13} className="text-green-500 transition-all" />
      ) : (
        <Copy size={13} className="text-muted-foreground transition-all" />
      )}
    </button>
  )
}