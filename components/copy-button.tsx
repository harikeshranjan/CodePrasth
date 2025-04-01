"use client";

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CopyButtonProps {
  code: string;
  className?: string;
}

export default function CopyButton({ code, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => {
      console.error("Failed to copy code: ", err);
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={copyToClipboard}
            className={`absolute top-3 right-3 p-1.5 rounded-md border border-border hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all ${
              copied ? 'bg-primary/10 text-primary border-primary/30' : 'bg-background text-muted-foreground'
            } ${className}`}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            {copied ? (
              <Check size={16} className="text-primary" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" align="center" className="text-xs">
          {copied ? "Copied!" : "Copy to clipboard"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}