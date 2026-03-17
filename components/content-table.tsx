"use client";

import { useEffect, useRef, useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

export type ContentTableSubheading = {
  readonly id: string;
  readonly heading: string;
};

export type ContentTableSection = {
  readonly id: string;
  readonly heading: string;
  readonly subheadings: readonly ContentTableSubheading[];
};

export type ContentTableData = readonly ContentTableSection[];

// ── Props ────────────────────────────────────────────────────────────────────

type ContentTableProps = {
  /** Pass your `*ReferenceContentTable` const directly — e.g. `gitReferenceContentTable` */
  data: ContentTableData;
  /** Label shown above the list. Defaults to "On this page" */
  title?: string;
};

// ── Component ────────────────────────────────────────────────────────────────

export default function ContentTable({
  data,
  title = "On this page",
}: ContentTableProps) {
  const [activeId, setActiveId] = useState<string>(() => data[0]?.id ?? "");
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  // ── Scroll-spy: watch all heading/subheading IDs in the page ──────────────
  useEffect(() => {
    const allIds = data.flatMap((s) => [
      s.id,
      ...s.subheadings.map((sub) => sub.id),
    ]);

    const observers: IntersectionObserver[] = [];

    // We track which sections are currently visible and pick the topmost one
    const visibleIds = new Set<string>();

    const pickActive = () => {
      // Choose the first ID in document order that is currently visible
      const first = allIds.find((id) => visibleIds.has(id));
      if (first) setActiveId(first);
    };

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleIds.add(id);
          } else {
            visibleIds.delete(id);
          }
          pickActive();
        },
        {
          // Fire when element enters/exits the top 20% of the viewport
          rootMargin: "0px 0px -75% 0px",
          threshold: 0,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [data]);

  // ── Auto-scroll TOC to keep active item visible ───────────────────────────
  useEffect(() => {
    if (activeItemRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const item = activeItemRef.current;
      const itemTop = item.offsetTop - container.offsetTop;
      const itemBottom = itemTop + item.offsetHeight;
      const containerTop = container.scrollTop;
      const containerBottom = containerTop + container.clientHeight;

      if (itemTop < containerTop || itemBottom > containerBottom) {
        container.scrollTo({
          top: itemTop - container.clientHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeId]);

  // ── Smooth-scroll the page to the target section ─────────────────────────
  const handleClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ── Check whether a section contains the active ID ───────────────────────
  const sectionIsActive = (section: ContentTableSection) =>
    activeId === section.id ||
    section.subheadings.some((s) => s.id === activeId);

  return (
    <aside className="sticky top-24 w-56 shrink-0 hidden xl:block self-start">
      <div className="rounded-2xl bg-muted/40 border border-border overflow-hidden">

        {/* Title */}
        <div className="px-4 py-3 border-b border-border">
          <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
        </div>

        {/* Scrollable list */}
        <div
          ref={scrollRef}
          className="max-h-[calc(100vh-12rem)] overflow-y-auto px-2 py-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
        >
          {data.map((section) => {
            const headingActive = activeId === section.id;

            return (
              <div key={section.id} className="mb-0.5">

                {/* Section heading */}
                <button
                  ref={headingActive ? activeItemRef : null}
                  onClick={() => handleClick(section.id)}
                  className={`group w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors duration-150 ${
                    headingActive
                      ? "bg-background text-foreground"
                      : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                  }`}
                >
                  {/* Active dot */}
                  <span
                    className={`w-1 h-1 rounded-full shrink-0 bg-foreground transition-opacity duration-150 ${
                      headingActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`text-[13px] leading-snug truncate transition-all duration-150 ${
                      headingActive ? "font-medium" : "font-normal"
                    }`}
                  >
                    {section.heading}
                  </span>
                </button>

                {/* Subheadings — always rendered so the tree doesn't jump */}
                {section.subheadings.length > 0 && (
                  <div
                    className={`ml-4 pl-3 border-l border-border mt-0.5 mb-1 transition-opacity duration-200 ${
                      sectionIsActive(section) ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {section.subheadings.map((sub) => {
                      const subActive = activeId === sub.id;
                      return (
                        <button
                          key={sub.id}
                          ref={subActive ? activeItemRef : null}
                          onClick={() => handleClick(sub.id)}
                          className={`w-full block px-2 py-1 rounded-md text-left transition-colors duration-150 ${
                            subActive
                              ? "bg-background text-foreground"
                              : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                          }`}
                        >
                          <span
                            className={`text-[12px] leading-snug truncate block transition-all duration-150 ${
                              subActive ? "font-medium" : "font-normal"
                            }`}
                          >
                            {sub.heading}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}