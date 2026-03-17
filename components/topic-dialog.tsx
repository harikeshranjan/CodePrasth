"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LearnTopic } from "@/types/topic";
import { useRouter } from "next/navigation";

interface TopicDialogProps {
  topic: LearnTopic | null;
  onClose: () => void;
}

const colorMap: Record<string, { pill: string; icon: string; subtopicBg: string; accent: string }> = {
  gray: {
    pill: "bg-muted text-muted-foreground",
    icon: "bg-muted text-foreground border-border",
    subtopicBg: "bg-muted/40 hover:bg-muted/70",
    accent: "bg-foreground/10",
  },
  blue: {
    pill: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
    icon: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
    subtopicBg: "bg-blue-50/60 hover:bg-blue-50 dark:bg-blue-950/30 dark:hover:bg-blue-950/50",
    accent: "bg-blue-500/10",
  },
  green: {
    pill: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
    icon: "bg-green-50 text-green-600 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
    subtopicBg: "bg-green-50/60 hover:bg-green-50 dark:bg-green-950/30 dark:hover:bg-green-950/50",
    accent: "bg-green-500/10",
  },
  orange: {
    pill: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    icon: "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
    subtopicBg: "bg-orange-50/60 hover:bg-orange-50 dark:bg-orange-950/30 dark:hover:bg-orange-950/50",
    accent: "bg-orange-500/10",
  },
};

export function TopicDialog({ topic, onClose }: TopicDialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close on Escape key
  useEffect(() => {
    if (!topic) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [topic, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (topic) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [topic]);

  if (!topic) return null;

  const colors = colorMap[topic.color] ?? colorMap.gray;
  const Icon = topic.icon;
  const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
        style={{ animation: "dialogIn 0.2s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={14} />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-5 border-b border-border">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className={`shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${colors.icon}`}
            >
              <Icon size={18} />
            </div>

            <div className="flex-1 min-w-0 pr-8">
              {/* Category pill */}
              <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-md mb-2 ${colors.pill}`}>
                {topic.category}
              </span>

              <h2 className="text-xl font-bold tracking-tight text-foreground leading-snug mb-1.5">
                {topic.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {hasSubtopics ? (
            <>
              {/* Subtopics header */}
              <div className="flex items-center gap-3 mb-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Subtopics
                </p>
                <div className="flex-1 h-px bg-border" />
                <Badge variant="secondary" className="text-[11px] px-2 py-0.5 rounded-md">
                  {topic.subtopics!.length}
                </Badge>
              </div>

              {/* Subtopic cards */}
              <div className="grid sm:grid-cols-2 gap-3">
                {topic.subtopics!.map((sub) => {
                  const SubIcon = sub.icon;
                  const subColors = colorMap[sub.color ?? topic.color] ?? colors;
                  return (
                    <button
                      key={sub.slug}
                      className={`group text-left w-full rounded-xl border border-border p-4 transition-all duration-150 ${subColors.subtopicBg}`}
                      onClick={() => {
                        router.push(`/learn/${sub.slug}`);
                        onClose();
                      }}
                    >
                      <div className="flex items-start gap-3">
                        {/* Sub icon */}
                        <div
                          className={`shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-transform duration-150 group-hover:scale-110 ${subColors.icon}`}
                        >
                          <SubIcon />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <p className="text-sm font-semibold text-foreground leading-snug">
                              {sub.title}
                            </p>
                            <ArrowUpRight
                              size={13}
                              className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                            />
                          </div>
                          <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-3">
                            {sub.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            /* Empty state — no subtopics */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className={`w-12 h-12 rounded-2xl border border-border flex items-center justify-center mb-4 ${colors.accent}`}>
                <Icon size={18} className="text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">No subtopics yet</p>
              <p className="text-[13px] text-muted-foreground max-w-xs">
                Content for this topic is coming soon. Check back later.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-muted/30 rounded-b-2xl">
          <p className="text-[11px] text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[10px]">Esc</kbd> to close
          </p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes dialogIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}