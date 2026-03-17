"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TopicCard } from "@/components/topic-card";
import { TopicDialog } from "@/components/topic-dialog";   // ← new import
import { Search, Code } from "lucide-react";
import { topics } from "@/data/learn-topic";
import { LearnTopic } from "@/types/topic";               // ← new import

export default function LearnPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTopic, setSelectedTopic] = useState<LearnTopic | null>(null); // ← new

  const filtered = useMemo(() => {
    return topics.filter((t) => {
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      const matchesSearch =
        search.trim() === "" ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const categories = useMemo(
    () => Array.from(new Set(topics.map((t) => t.category))),
    []
  );
  const allCategories = ["All", ...categories];

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Topic Dialog ── */}
      <TopicDialog
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
      />

      {/* ── Page Header ── */}
      <section className="relative px-6 pt-10 md:pt-24 pb-14 border-b border-border overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg border border-border bg-muted flex items-center justify-center">
              <Code size={13} className="text-foreground" />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Learn
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
            Developer learning center
          </h1>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8">
            Curated tutorials and guides to help you learn new technologies and
            improve your skills. Perfect for developers of all levels.
          </p>
        </div>
      </section>

      {/* ── Filters + Grid ── */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-32">

        {/* Search + Category filter row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              placeholder="Search topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-9 text-sm rounded-xl border-border bg-background"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {(search || activeCategory !== "All") && (
          <p className="text-[12px] text-muted-foreground mb-6">
            {filtered.length === 0
              ? "No topics found"
              : `${filtered.length} topic${filtered.length !== 1 ? "s" : ""} found`}
          </p>
        )}

        {/* Topic grid — grouped by category when not searching */}
        {search.trim() === "" && activeCategory === "All" ? (
          <div className="space-y-12">
            {categories.map((cat) => {
              const catTopics = topics.filter((t) => t.category === cat);
              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-5">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                      {cat}
                    </p>
                    <div className="flex-1 h-px bg-border" />
                    <Badge
                      variant="secondary"
                      className="text-[11px] px-2 py-0.5 rounded-md"
                    >
                      {catTopics.length}
                    </Badge>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catTopics.map((topic) => (
                      <TopicCard
                        key={topic.slug}
                        topic={topic}
                        onClick={() => setSelectedTopic(topic)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.length > 0 ? (
              filtered.map((topic) => (
                <TopicCard
                  key={topic.slug}
                  topic={topic}
                  onClick={() => setSelectedTopic(topic)}
                />
              ))
            ) : (
              <div className="col-span-3 flex flex-col items-center justify-center py-24 text-center">
                <div className="w-12 h-12 rounded-2xl border border-border bg-muted flex items-center justify-center mb-4">
                  <Search size={18} className="text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">
                  No topics found
                </p>
                <p className="text-[13px] text-muted-foreground max-w-xs">
                  Try a different keyword or clear the filter.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}