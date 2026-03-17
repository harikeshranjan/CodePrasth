import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { LearnTopic } from "@/types/topic";

const colorMap: Record<string, string> = {
  blue:   "bg-blue-50   text-blue-700   border-blue-200   dark:bg-blue-950   dark:text-blue-300   dark:border-blue-900",
  teal:   "bg-teal-50   text-teal-700   border-teal-200   dark:bg-teal-950   dark:text-teal-300   dark:border-teal-900",
  green:  "bg-green-50  text-green-700  border-green-200  dark:bg-green-950  dark:text-green-300  dark:border-green-900",
  amber:  "bg-amber-50  text-amber-700  border-amber-200  dark:bg-amber-950  dark:text-amber-300  dark:border-amber-900",
  red:    "bg-red-50    text-red-700    border-red-200    dark:bg-red-950    dark:text-red-300    dark:border-red-900",
  purple: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-900",
  gray:   "bg-muted     text-foreground border-border",
};

export function TopicCard({ topic, onClick }: { topic: LearnTopic, onClick?: () => void }) {
  const Icon = topic.icon;
  const isReference = topic.slug.startsWith("reference/");

  return (
    <Link
      href={isReference ? `/${topic.slug}` : `${topic.slug}`} // Reference topics go to /reference/[slug], others to /learn/[slug]
      className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-background hover:border-foreground/20 hover:bg-muted/30 transition-all duration-200"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Icon pill */}
          <div
            className={`w-9 h-9 rounded-xl border text-base flex items-center justify-center select-none ${colorMap[topic.color]}`}
          >
            <Icon size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {topic.title}
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {topic.category}
            </p>
          </div>
        </div>

        <ArrowRight
          size={14}
          className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 mt-1 shrink-0"
        />
      </div>

      {/* Description */}
      <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
        {topic.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-1">
        <div className="flex items-center gap-1.5">
          {/* <span className="text-[12px] text-muted-foreground">
            {topic.snippetCount} snippet{topic.snippetCount !== 1 ? "s" : ""}
          </span> */}
        </div>
        <Badge
          variant="secondary"
          className="text-[11px] px-2 py-0.5 rounded-md"
        >
          {topic.category}
        </Badge>
      </div>
    </Link>
  );
}