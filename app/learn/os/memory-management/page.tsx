import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Cpu, Info, AlertTriangle, Lightbulb } from "lucide-react";

// ── Note / callout ─────────────────────────────────────────────────────────

function Note({
  children,
  title = "Note",
  variant = "info",
}: {
  children: React.ReactNode;
  title?: string;
  variant?: "info" | "warning" | "tip";
}) {
  const styles = {
    info: {
      wrap: "border-border bg-muted/30",
      icon: <Info size={15} className="text-muted-foreground mt-0.5 shrink-0" />,
      title: "text-foreground",
    },
    warning: {
      wrap: "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/30",
      icon: <AlertTriangle size={15} className="text-amber-500 mt-0.5 shrink-0" />,
      title: "text-amber-700 dark:text-amber-400",
    },
    tip: {
      wrap: "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/30",
      icon: <Lightbulb size={15} className="text-emerald-500 mt-0.5 shrink-0" />,
      title: "text-emerald-700 dark:text-emerald-500",
    },
  }[variant];

  return (
    <div className={`flex gap-3 px-4 py-3.5 rounded-xl border my-1 ${styles.wrap}`}>
      {styles.icon}
      <div>
        <p className={`text-[12px] font-semibold mb-0.5 ${styles.title}`}>{title}</p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

// ── Section wrapper ────────────────────────────────────────────────────────

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
        <h2 className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

// ── Subheading wrapper ─────────────────────────────────────────────────────

function Sub({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24 space-y-3">
      <h3 className="text-[15px] font-semibold text-foreground leading-snug">{title}</h3>
      {children}
    </div>
  );
}

// ── Body text ──────────────────────────────────────────────────────────────

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[14px] text-muted-foreground leading-relaxed">{children}</p>
  );
}

// ── Inline code ────────────────────────────────────────────────────────────

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[12px] bg-muted px-1 py-0.5 rounded text-foreground">
      {children}
    </code>
  );
}

// ── Simple diagram / visual block ──────────────────────────────────────────

function Diagram({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 overflow-hidden">
      {label && (
        <div className="px-4 py-2 border-b border-border bg-muted/40">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
      )}
      <div className="px-5 py-5 font-mono text-[12.5px] leading-relaxed text-foreground/80 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

// ── Key-value concept card ─────────────────────────────────────────────────

function ConceptGrid({ items }: { items: { term: string; def: string; color?: string }[] }) {
  const colorMap: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/30",
    teal: "border-teal-200 bg-teal-50/50 dark:border-teal-900 dark:bg-teal-950/30",
    amber: "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/30",
    red: "border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/30",
    purple: "border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/30",
    green: "border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/30",
  };
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.term}
          className={`flex flex-col gap-1.5 p-4 rounded-xl border ${
            item.color ? colorMap[item.color] : "border-border bg-background"
          }`}
        >
          <p className="text-[13px] font-semibold text-foreground">{item.term}</p>
          <p className="text-[12px] text-muted-foreground leading-relaxed">{item.def}</p>
        </div>
      ))}
    </div>
  );
}

// ── Comparison table ───────────────────────────────────────────────────────

function CompareTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-border last:border-0 ${
                i % 2 === 0 ? "bg-background" : "bg-muted/20"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-2.5 text-muted-foreground leading-relaxed ${
                    j === 0 ? "font-medium text-foreground" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Step list ─────────────────────────────────────────────────────────────

function Steps({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="w-6 h-6 rounded-full bg-foreground text-background text-[11px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
            {i + 1}
          </span>
          <div>
            <p className="text-[13px] font-semibold text-foreground">{item.title}</p>
            <p className="text-[13px] text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function MemoryManagementPage() {
  return (
    <main className="pb-24">

      {/* ── Page header ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl border border-border bg-muted flex items-center justify-center text-base select-none">
            🧠
          </div>
          <Badge variant="secondary" className="text-[11px] px-2.5 py-0.5 rounded-md">
            Operating Systems
          </Badge>
          <Badge variant="outline" className="text-[11px] px-2.5 py-0.5 rounded-md text-muted-foreground">
            Computer Science
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight mb-3">
          Memory Management
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
          A beginner-friendly deep dive into how operating systems manage
          memory — from raw physical RAM to virtual address spaces, paging,
          segmentation, page replacement, and beyond. Explained with diagrams
          and analogies so every concept clicks.
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen size={12} />
            <span>9 sections</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <div className="flex items-center gap-1.5">
            <Cpu size={12} />
            <span>35+ concepts</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <span>OS Theory · Beginner → Advanced</span>
        </div>
      </div>

      <div className="space-y-16">

        {/* ══════════════════════════════════════════════════════════════
            1. Introduction
        ══════════════════════════════════════════════════════════════ */}
        <Section id="introduction" title="Introduction to Memory Management">
          <P>
            Every program you run — a browser, a game, a text editor — needs
            memory to store its instructions and data. The operating system is
            responsible for deciding which program gets which portion of memory,
            when, and for how long. This entire discipline is called{" "}
            <strong className="text-foreground font-semibold">memory management</strong>.
          </P>

          <Sub id="what-is-memory-management" title="What is Memory Management?">
            <P>
              Memory management is the process by which an operating system
              controls and coordinates computer memory. It tracks every memory
              location — whether free or allocated — decides which process gets
              memory when it requests it, and reclaims that memory when the
              process is done.
            </P>
            <Note title="Analogy">
              Think of RAM as a hotel with a fixed number of rooms. The OS is
              the receptionist — assigning rooms to guests (processes), keeping
              track of who is in which room, and cleaning up rooms when guests
              check out.
            </Note>
          </Sub>

          <Sub id="why-memory-management-is-needed" title="Why Memory Management is Needed">
            <P>
              Without memory management, multiple programs running at the same
              time could overwrite each other's data, a program could read
              another program's private information, and the system would crash
              unpredictably.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Isolation",
                  def: "Each process must be protected from accidentally (or maliciously) reading or writing another process's memory.",
                  color: "blue",
                },
                {
                  term: "Efficiency",
                  def: "RAM is limited. The OS must allocate it wisely so no memory is wasted sitting unused.",
                  color: "teal",
                },
                {
                  term: "Abstraction",
                  def: "Programs shouldn't need to know the physical address of their data. The OS provides an abstract view.",
                  color: "purple",
                },
                {
                  term: "Sharing",
                  def: "Some data (like shared libraries) should be accessible by many processes simultaneously to save space.",
                  color: "green",
                },
              ]}
            />
          </Sub>

          <Sub id="logical-vs-physical-memory" title="Logical vs Physical Memory">
            <P>
              This is one of the most important distinctions in memory
              management. A program never directly accesses physical RAM.
              Instead, it works with <strong className="text-foreground font-semibold">logical addresses</strong>{" "}
              — an imaginary address space the OS gives it. The hardware and OS
              together translate these into real{" "}
              <strong className="text-foreground font-semibold">physical addresses</strong>.
            </P>
            <CompareTable
              headers={["Property", "Logical Address", "Physical Address"]}
              rows={[
                ["Also called", "Virtual address", "Real address"],
                ["Generated by", "CPU during program execution", "Memory hardware (RAM)"],
                ["Seen by", "The running program", "The memory controller"],
                ["Range", "0 to max logical address", "0 to actual RAM size"],
                ["Example", "0x0000 – 0xFFFF (in process)", "0x4F000 – 0x4FFFFF (in RAM)"],
              ]}
            />
            <Note title="Key insight">
              Two different programs can both use logical address <C>0x1000</C>{" "}
              — they map to completely different physical addresses. The OS
              keeps this mapping separate for each process, which is what
              provides isolation.
            </Note>
          </Sub>

          <Sub id="address-binding" title="Address Binding Concepts">
            <P>
              Address binding is the process of mapping a symbolic address
              (variable name) to an actual memory address. This can happen at
              three different stages:
            </P>
            <Steps
              items={[
                {
                  title: "Compile time",
                  desc: "If you know at compile time exactly where in memory the program will live, the compiler generates absolute addresses. Changing the load address requires recompilation. Rare in modern systems.",
                },
                {
                  title: "Load time",
                  desc: "The compiler generates relocatable code. When the OS loads the program into memory, it fixes up all addresses to match the actual load location.",
                },
                {
                  title: "Execution time (runtime)",
                  desc: "Binding is delayed until the instruction actually runs. This requires hardware support (the MMU) but allows processes to be moved around in memory while running — used in all modern OSes.",
                },
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            2. Memory Allocation
        ══════════════════════════════════════════════════════════════ */}
        <Section id="memory-allocation" title="Memory Allocation Techniques">
          <P>
            Before virtual memory existed, programs had to share physical RAM
            directly. The OS needed strategies to decide how to carve up that
            RAM among competing processes.
          </P>

          <Sub id="contiguous-allocation" title="Contiguous Memory Allocation">
            <P>
              In contiguous allocation, each process is stored in one
              uninterrupted block of memory. The OS keeps a table of which
              ranges are free and which are occupied, and finds a suitable free
              block when a process needs memory.
            </P>
            <Diagram label="Memory layout — contiguous allocation">
              <pre className="whitespace-pre text-[12px]">{`┌──────────────────────┐  0x0000
│   OS Kernel          │  (always resident)
├──────────────────────┤  0x0400
│   Process A          │  200 KB
├──────────────────────┤  0x0800
│   [ FREE ]           │  100 KB
├──────────────────────┤  0x0A00
│   Process B          │  300 KB
├──────────────────────┤  0x1000
│   [ FREE ]           │  50 KB
└──────────────────────┘  0x10FF`}</pre>
            </Diagram>
          </Sub>

          <Sub id="fixed-partitioning" title="Fixed Partitioning">
            <P>
              The simplest scheme: divide RAM into fixed-size partitions at
              boot time. Each partition holds exactly one process. When a
              process finishes, its partition becomes free for the next process.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "✅ Simple to implement",
                  def: "No complex bookkeeping. The partition table is decided once at startup.",
                },
                {
                  term: "✅ Fast allocation",
                  def: "Finding a free partition is O(n) at worst. No searching for best fit.",
                },
                {
                  term: "❌ Internal fragmentation",
                  def: "A 200 KB process in a 256 KB partition wastes 56 KB. That space is unusable.",
                },
                {
                  term: "❌ Inflexible",
                  def: "A process larger than the biggest partition simply cannot run, even if total free RAM is sufficient.",
                },
              ]}
            />
          </Sub>

          <Sub id="dynamic-partitioning" title="Dynamic Partitioning">
            <P>
              Dynamic partitioning creates partitions on-demand, sized exactly
              to what the process requests. This eliminates internal
              fragmentation but introduces a new problem: external fragmentation.
            </P>
            <P>
              Three classic strategies for finding a free hole to allocate:
            </P>
            <CompareTable
              headers={["Strategy", "How it works", "Best for"]}
              rows={[
                ["First Fit", "Allocate the first hole that is big enough", "Speed — stops searching early"],
                ["Best Fit", "Allocate the smallest hole that is big enough", "Minimising wasted space"],
                ["Worst Fit", "Allocate the largest available hole", "Leaving large usable holes behind"],
              ]}
            />
            <Note title="In practice">
              First Fit and Best Fit both outperform Worst Fit. First Fit is
              generally fastest. Best Fit can ironically produce more small,
              unusable holes over time than First Fit.
            </Note>
          </Sub>

          <Sub id="internal-external-fragmentation" title="Internal vs External Fragmentation">
            <P>
              Fragmentation is wasted memory — memory that exists but cannot be
              used. It comes in two flavours that are easy to confuse:
            </P>
            <CompareTable
              headers={["", "Internal Fragmentation", "External Fragmentation"]}
              rows={[
                ["Definition", "Wasted space inside an allocated block", "Wasted space outside allocated blocks"],
                ["Cause", "Allocated block is larger than needed", "Many small freed holes scattered through RAM"],
                ["Location", "Inside a partition/page", "Between partitions"],
                ["Caused by", "Fixed partitioning, paging", "Dynamic partitioning"],
                ["Solution", "Smaller allocation units", "Compaction or paging"],
              ]}
            />
          </Sub>

          <Sub id="compaction" title="Memory Compaction">
            <P>
              Compaction is a technique to deal with external fragmentation. The
              OS pauses all processes, physically moves their memory blocks
              together, and updates all pointers so free space forms one large
              contiguous hole again.
            </P>
            <Diagram label="Before and after compaction">
              <pre className="whitespace-pre text-[12px]">{`BEFORE compaction:          AFTER compaction:
┌──────────┐               ┌──────────┐
│ Process A │               │ Process A │
├──────────┤               ├──────────┤
│  FREE 40K│               │ Process B │
├──────────┤               ├──────────┤
│ Process B │               │ Process C │
├──────────┤               ├──────────┤
│  FREE 20K│               │          │
├──────────┤               │  FREE    │
│ Process C │               │  160K    │
├──────────┤               │          │
│  FREE 100K│              └──────────┘
└──────────┘`}</pre>
            </Diagram>
            <Note variant="warning" title="Compaction is expensive">
              Moving gigabytes of data in RAM takes time, and all processes must
              be paused while it happens. Modern OSes use paging instead, which
              solves external fragmentation without moving any data.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            3. Paging
        ══════════════════════════════════════════════════════════════ */}
        <Section id="paging" title="Paging">
          <P>
            Paging is the dominant memory management scheme used by all modern
            operating systems. It eliminates external fragmentation entirely by
            breaking memory into small, equal-sized chunks.
          </P>

          <Sub id="paging-concept" title="Concept of Paging">
            <P>
              The key idea: divide both the logical address space and physical
              memory into equal-sized blocks. The logical blocks are called{" "}
              <strong className="text-foreground font-semibold">pages</strong>;
              the physical blocks are called{" "}
              <strong className="text-foreground font-semibold">frames</strong>.
              Any page can be loaded into any free frame — they don't have to be
              contiguous.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Page",
                  def: "A fixed-size block of logical (virtual) memory. Typically 4 KB on modern systems.",
                  color: "blue",
                },
                {
                  term: "Frame",
                  def: "A fixed-size block of physical memory. Always the same size as a page.",
                  color: "teal",
                },
                {
                  term: "Page Table",
                  def: "A per-process data structure that maps each page number to the frame it currently occupies.",
                  color: "purple",
                },
                {
                  term: "No external fragmentation",
                  def: "Because any frame can hold any page, scattered free frames can all be used — no hole is too small.",
                  color: "green",
                },
              ]}
            />
          </Sub>

          <Sub id="page-table" title="Page Table Structure">
            <P>
              Each process has its own page table. Each row (entry) in the page
              table describes one page. A typical page table entry (PTE)
              contains:
            </P>
            <Diagram label="Page Table Entry (PTE) — bit fields">
              <pre className="whitespace-pre text-[12px]">{`Bit fields in a 32-bit PTE:
┌──────────────────────────────┬───┬───┬───┬───┬───┐
│   Frame Number (20 bits)     │ P │ R │ M │ U │ X │
└──────────────────────────────┴───┴───┴───┴───┴───┘
  P = Present (1 = in RAM, 0 = on disk)
  R = Referenced (set by hardware when page is read)
  M = Modified / Dirty (set when page is written)
  U = User/Supervisor (protection level)
  X = Execute disable`}</pre>
            </Diagram>
            <Note title="The Present bit is critical">
              When <C>P = 0</C>, the page is not currently in RAM — it's either
              on disk (swapped out) or has never been loaded. Accessing it
              triggers a <strong className="text-foreground font-semibold">page fault</strong>,
              which causes the OS to load it from disk before resuming the process.
            </Note>
          </Sub>

          <Sub id="address-translation" title="Address Translation in Paging">
            <P>
              When a program accesses logical address <C>X</C>, the CPU splits
              it into two parts automatically:
            </P>
            <Diagram label="Logical address → physical address translation">
              <pre className="whitespace-pre text-[12px]">{`Logical address (32-bit, 4 KB pages):
┌──────────────────────┬──────────────┐
│   Page Number (20b)  │  Offset (12b)│
└──────────────────────┴──────────────┘
         │                    │
         ▼                    │
   Page Table                 │
   [page 0] → frame 5         │
   [page 1] → frame 12        │
   [page 2] → frame 3  ◄──────┘ (offset stays the same)
         │
         ▼
Physical address = Frame Number × Page Size + Offset
                = 3 × 4096 + offset`}</pre>
            </Diagram>
            <Steps
              items={[
                {
                  title: "Extract page number",
                  desc: "Take the upper bits of the logical address. For a 32-bit address with 4 KB pages, the top 20 bits are the page number.",
                },
                {
                  title: "Look up the page table",
                  desc: "Use the page number as an index into the process's page table to find the frame number.",
                },
                {
                  title: "Compute physical address",
                  desc: "Combine the frame number with the offset (lower 12 bits) to get the final physical address.",
                },
              ]}
            />
          </Sub>

          <Sub id="multi-level-paging" title="Multi-level Paging">
            <P>
              For a 32-bit address space with 4 KB pages, a single-level page
              table would need{" "}
              <strong className="text-foreground font-semibold">1 million entries</strong>{" "}
              (2²⁰). At 4 bytes per entry that's 4 MB of page table{" "}
              <em>per process</em>. For a 64-bit system this becomes astronomical.
              Multi-level paging solves this by making the page table itself
              paged.
            </P>
            <Diagram label="Two-level page table (32-bit, 4 KB pages)">
              <pre className="whitespace-pre text-[12px]">{`Logical address:
┌───────────┬───────────┬──────────────┐
│  P1 (10b) │  P2 (10b) │  Offset (12b)│
└───────────┴───────────┴──────────────┘
      │            │
      ▼            ▼
  Outer          Inner          Physical
  Page Table → Page Table  →   Frame
  (1024 rows)  (1024 rows)

Only inner tables that are actually needed are allocated.
A process using 1 MB needs only 1 outer entry + 1 inner table
instead of a full 4 MB flat table.`}</pre>
            </Diagram>
            <Note variant="tip" title="Key benefit">
              Most processes use only a small portion of their address space.
              Multi-level paging means unneeded regions have no inner page table
              at all, saving enormous amounts of memory.
            </Note>
          </Sub>

          <Sub id="translation-lookaside-buffer" title="Translation Lookaside Buffer (TLB)">
            <P>
              Every memory access normally requires two memory lookups: one to
              read the page table, then one to access the actual data. This
              would halve memory performance. The{" "}
              <strong className="text-foreground font-semibold">TLB</strong> is
              a small, ultra-fast hardware cache inside the CPU that stores
              recent page-to-frame mappings.
            </P>
            <CompareTable
              headers={["", "TLB Hit", "TLB Miss"]}
              rows={[
                ["What happens", "Frame number found in TLB cache", "Must read page table from RAM"],
                ["Memory accesses", "1 (just the data)", "2 (page table + data)"],
                ["Speed", "Near-native memory speed", "~2× slower"],
                ["Typical hit rate", "95–99%", "1–5%"],
              ]}
            />
            <Note title="TLB flush on context switch">
              When the OS switches from one process to another, the TLB must be
              flushed (cleared) because its mappings belong to the old process.
              Modern processors use an <strong className="text-foreground font-semibold">Address Space ID (ASID)</strong>{" "}
              tag to avoid full flushes — each entry is tagged with the process
              ID it belongs to.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            4. Segmentation
        ══════════════════════════════════════════════════════════════ */}
        <Section id="segmentation" title="Segmentation">
          <P>
            While paging divides memory into equal-sized chunks (invisible to
            the programmer), segmentation divides it into logical,
            variable-sized units that match how programmers think about their
            programs.
          </P>

          <Sub id="segmentation-concept" title="Concept of Segmentation">
            <P>
              A program is naturally divided into logical sections: the code
              (text), the global data, the stack, the heap, shared libraries,
              and so on. Segmentation exposes this structure directly — each
              logical section gets its own{" "}
              <strong className="text-foreground font-semibold">segment</strong>{" "}
              with its own base address, size, and protection flags.
            </P>
            <Diagram label="A process's segments in memory">
              <pre className="whitespace-pre text-[12px]">{`Segment 0: Code       → starts at 0x0040 0000, length 10 KB (read + execute)
Segment 1: Data       → starts at 0x1000 0000, length  4 KB (read + write)
Segment 2: Stack      → starts at 0x7FFF 0000, length  8 KB (read + write)
Segment 3: Heap       → starts at 0x0060 0000, length 20 KB (read + write)
Segment 4: libc.so    → starts at 0x2000 0000, length 64 KB (read + execute)`}</pre>
            </Diagram>
          </Sub>

          <Sub id="segment-table" title="Segment Table Structure">
            <P>
              Each process has a{" "}
              <strong className="text-foreground font-semibold">segment table</strong>.
              Each entry contains the segment's base (where it starts in
              physical memory) and its limit (how long it is).
            </P>
            <Diagram label="Segment Table">
              <pre className="whitespace-pre text-[12px]">{`Segment # │ Base Address │ Limit  │ Protection
──────────┼──────────────┼────────┼───────────
    0     │  0x0040 0000 │ 10 240 │ R-X
    1     │  0x1000 0000 │  4 096 │ RW-
    2     │  0x7FFF 0000 │  8 192 │ RW-
    3     │  0x0060 0000 │ 20 480 │ RW-
    4     │  0x2000 0000 │ 65 536 │ R-X`}</pre>
            </Diagram>
          </Sub>

          <Sub id="address-translation-segmentation" title="Address Translation in Segmentation">
            <P>
              A logical address in a segmented system is a pair:{" "}
              <C>(segment number, offset)</C>. The CPU uses the segment number
              to look up the base and limit in the segment table. If the offset
              is within the limit, the physical address is{" "}
              <C>base + offset</C>. If not, a{" "}
              <strong className="text-foreground font-semibold">segmentation fault</strong>{" "}
              is raised.
            </P>
            <Steps
              items={[
                {
                  title: "Extract segment number and offset",
                  desc: "The logical address is split: e.g. (segment=1, offset=200).",
                },
                {
                  title: "Look up segment table",
                  desc: "Find the entry for segment 1 — base = 0x1000 0000, limit = 4096.",
                },
                {
                  title: "Bounds check",
                  desc: "Is offset (200) < limit (4096)? Yes — proceed. If no, raise a segfault.",
                },
                {
                  title: "Compute physical address",
                  desc: "Physical address = base + offset = 0x1000 0000 + 200.",
                },
              ]}
            />
          </Sub>

          <Sub id="segmentation-vs-paging" title="Segmentation vs Paging">
            <CompareTable
              headers={["Property", "Paging", "Segmentation"]}
              rows={[
                ["Division unit", "Fixed-size pages (e.g. 4 KB)", "Variable-size logical segments"],
                ["Programmer visibility", "Invisible to programmer", "Matches programmer's view (code, data, stack)"],
                ["External fragmentation", "None", "Yes — variable sized holes"],
                ["Internal fragmentation", "Yes — last page may be partially used", "None"],
                ["Protection", "Per-page flags", "Per-segment flags (natural fit)"],
                ["Sharing", "Awkward — must share at page granularity", "Natural — share entire segments (e.g. libc)"],
                ["Used by", "All modern OSes", "x86 legacy; Intel 64-bit has mostly abandoned it"],
              ]}
            />
            <Note variant="tip" title="Modern systems use both">
              x86 processors historically used{" "}
              <strong className="text-foreground font-semibold">segmented paging</strong>: segments
              define logical regions, then paging maps those to physical frames.
              In 64-bit mode (long mode), segmentation is largely disabled and
              paging does all the work.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            5. Virtual Memory
        ══════════════════════════════════════════════════════════════ */}
        <Section id="virtual-memory" title="Virtual Memory">
          <P>
            Virtual memory is one of the most powerful ideas in operating
            systems. It allows a process to use more memory than physically
            exists in the machine — by storing some pages on disk and loading
            them into RAM only when accessed.
          </P>

          <Sub id="virtual-memory-concept" title="Concept of Virtual Memory">
            <P>
              Each process believes it has a large, private, contiguous address
              space (e.g. 0 to 2⁴⁸ on a 64-bit system). In reality, only the
              pages it is actively using are kept in RAM. The rest live on a
              reserved area of disk called the{" "}
              <strong className="text-foreground font-semibold">swap space</strong>{" "}
              (Linux) or <strong className="text-foreground font-semibold">page file</strong> (Windows).
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Run large programs",
                  def: "A program that needs 4 GB can run on a machine with 2 GB of RAM — the OS pages unused parts to disk.",
                  color: "blue",
                },
                {
                  term: "Run more programs",
                  def: "With virtual memory, 20 processes each thinking they have 2 GB can share 4 GB of actual RAM.",
                  color: "teal",
                },
                {
                  term: "Simpler programming model",
                  def: "Every program starts at address 0 and has a clean, isolated address space — no coordination needed.",
                  color: "purple",
                },
                {
                  term: "Security isolation",
                  def: "Process A's address 0x1000 maps to a different physical frame than Process B's address 0x1000.",
                  color: "green",
                },
              ]}
            />
          </Sub>

          <Sub id="demand-paging" title="Demand Paging">
            <P>
              Instead of loading an entire program into RAM when it starts,
              demand paging loads pages{" "}
              <strong className="text-foreground font-semibold">only when they are first accessed</strong>.
              This makes programs start faster and wastes less memory on code
              paths that are never executed.
            </P>
            <Steps
              items={[
                {
                  title: "Program starts",
                  desc: "The OS creates a page table with all entries marked as not-present (P=0). No pages are loaded into RAM yet.",
                },
                {
                  title: "First instruction executes",
                  desc: "CPU accesses the first page. P=0 → page fault! OS is invoked.",
                },
                {
                  title: "OS loads the page",
                  desc: "OS finds a free frame, reads the page from disk into that frame, updates the PTE (sets P=1, records frame number).",
                },
                {
                  title: "Resume execution",
                  desc: "OS restarts the faulting instruction. This time P=1, the TLB is updated, and execution continues normally.",
                },
              ]}
            />
          </Sub>

          <Sub id="page-fault" title="Page Fault Handling">
            <P>
              A{" "}
              <strong className="text-foreground font-semibold">page fault</strong>{" "}
              is a hardware exception raised when a process accesses a page that
              is not currently in RAM. It is not an error — it is a normal,
              expected event in a virtual memory system.
            </P>
            <Diagram label="Page fault handling sequence">
              <pre className="whitespace-pre text-[12px]">{`Process         CPU / MMU          OS Kernel         Disk
   │                │                  │                │
   │─── access ────▶│                  │                │
   │             Page                  │                │
   │             fault!                │                │
   │◀────────────── trap ─────────────▶│                │
   │                │        Find free frame             │
   │                │        If no free frame:           │
   │                │          → run page replacement    │
   │                │          → evict a victim page     │
   │                │◀── read page ──────────────────────│
   │                │        Update PTE (P=1)            │
   │                │        Update TLB                  │
   │◀── restart ────│                  │                │
   │  instruction   │                  │                │`}</pre>
            </Diagram>
            <Note variant="warning" title="Page faults are slow">
              A RAM access takes ~100 nanoseconds. A disk read takes ~10
              milliseconds — that's 100,000× slower. Minimising page faults is
              critical for performance. This is why choosing a good page
              replacement algorithm matters enormously.
            </Note>
          </Sub>

          <Sub id="copy-on-write" title="Copy-on-Write (CoW)">
            <P>
              When a process calls <C>fork()</C> to create a child process, the
              OS doesn't immediately copy all the parent's memory pages — that
              would be slow and wasteful. Instead, it uses{" "}
              <strong className="text-foreground font-semibold">Copy-on-Write</strong>:
              both parent and child share the same physical pages, marked as
              read-only.
            </P>
            <Steps
              items={[
                {
                  title: "fork() is called",
                  desc: "OS marks all shared pages as read-only in both parent and child page tables. No actual copying happens.",
                },
                {
                  title: "Both processes read the pages",
                  desc: "This works fine. Both see the same data from the same physical frames.",
                },
                {
                  title: "One process writes to a page",
                  desc: "A page-fault-like trap fires. OS detects this is a CoW page, not a real fault.",
                },
                {
                  title: "OS copies just that page",
                  desc: "A new physical frame is allocated, the page is copied, and only the writing process's PTE is updated. The other process still uses the original frame.",
                },
              ]}
            />
            <Note variant="tip" title="Why CoW matters">
              On Linux, many <C>fork()</C> calls are immediately followed by{" "}
              <C>exec()</C> (to run a new program). With CoW, no pages are
              copied at all in this common case — <C>exec()</C> replaces the
              entire address space anyway.
            </Note>
          </Sub>

          <Sub id="thrashing" title="Thrashing">
            <P>
              Thrashing happens when a system spends more time swapping pages
              between RAM and disk than actually executing process instructions.
              The CPU utilisation drops to near zero even though the system
              looks busy.
            </P>
            <Diagram label="The thrashing cycle">
              <pre className="whitespace-pre text-[12px]">{`Too many processes
        │
        ▼
Each process gets too few frames
        │
        ▼
Frequent page faults
        │
        ▼
Processes waiting for I/O (paging)
        │
        ▼
OS schedules more processes (CPU looks idle)
        │
        ▼
Even fewer frames per process  ◄─── loop
        │
        ▼
    THRASHING`}</pre>
            </Diagram>
            <ConceptGrid
              items={[
                {
                  term: "Working Set Model",
                  def: "Track the set of pages a process has used in the last Δ time units. Only run a process if enough frames are available for its full working set.",
                  color: "teal",
                },
                {
                  term: "Page-Fault Frequency",
                  def: "Monitor each process's page fault rate. If it's too high, give it more frames. If too low, take frames away.",
                  color: "blue",
                },
                {
                  term: "Reduce multiprogramming",
                  def: "If thrashing is detected, suspend some processes entirely and give their frames to the remaining ones.",
                  color: "amber",
                },
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            6. Page Replacement Algorithms
        ══════════════════════════════════════════════════════════════ */}
        <Section id="page-replacement" title="Page Replacement Algorithms">
          <P>
            When a page fault occurs and all frames are full, the OS must{" "}
            <strong className="text-foreground font-semibold">evict</strong> an
            existing page to make room. Choosing the right victim is critical —
            a bad choice leads to repeated page faults for the evicted page.
          </P>

          <Sub id="fifo" title="FIFO (First In, First Out)">
            <P>
              The simplest algorithm: evict the page that has been in memory the
              longest. Maintain a queue of pages in load order.
            </P>
            <Diagram label="FIFO example — 4 frames, reference string: 1 2 3 4 1 2 5 1 2 3 4 5">
              <pre className="whitespace-pre text-[12px]">{`Reference:   1  2  3  4  1  2  5  1  2  3  4  5
Frame 0:     1  1  1  1  1  1  5  5  5  5  4  4
Frame 1:        2  2  2  2  2  2  2  2  3  3  3
Frame 2:           3  3  3  3  3  3  3  3  3  5 ← wait, no...
Frame 3:              4  4  4  4  4  4  4  4  4
Fault:       ✗  ✗  ✗  ✗  -  -  ✗  -  -  ✗  ✗  -
Total faults: 8`}</pre>
            </Diagram>
            <Note variant="warning" title="Bélády's Anomaly">
              FIFO suffers from Bélády's Anomaly — adding more frames can
              sometimes <strong className="text-foreground font-semibold">increase</strong>{" "}
              the number of page faults. This counterintuitive behaviour is
              unique to FIFO and makes it unpredictable.
            </Note>
          </Sub>

          <Sub id="lru" title="LRU (Least Recently Used)">
            <P>
              LRU evicts the page that has not been used for the longest time.
              Based on the principle of{" "}
              <strong className="text-foreground font-semibold">temporal locality</strong>
              — if a page was used recently, it is likely to be used again soon.
            </P>
            <P>
              LRU does not suffer from Bélády's Anomaly and performs close to
              the optimal algorithm in practice. The challenge is{" "}
              <strong className="text-foreground font-semibold">implementation</strong>:
              tracking exact usage order requires hardware support or significant
              overhead.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Counter implementation",
                  def: "Give each PTE a timestamp counter. Update it on every access. Evict the page with the smallest counter value.",
                  color: "blue",
                },
                {
                  term: "Stack implementation",
                  def: "Maintain a stack of page numbers. On every access, move the referenced page to the top. Evict from the bottom.",
                  color: "teal",
                },
                {
                  term: "Approximate LRU (hardware)",
                  def: "Use the Reference bit in the PTE. Hardware sets it on access; software periodically clears it. Used by the Clock algorithm.",
                  color: "purple",
                },
              ]}
            />
          </Sub>

          <Sub id="optimal" title="Optimal Page Replacement">
            <P>
              The optimal algorithm (OPT / Bélády's algorithm) evicts the page
              that will{" "}
              <strong className="text-foreground font-semibold">not be used for the longest time in the future</strong>.
              This is the theoretical minimum number of page faults possible.
            </P>
            <Note variant="warning" title="Not implementable in practice">
              You cannot implement OPT in a real OS because it requires knowing
              the future sequence of page references. It is used only as a
              benchmark to measure how close other algorithms come to the ideal.
            </Note>
          </Sub>

          <Sub id="clock-algorithm" title="Clock (Second Chance) Algorithm">
            <P>
              The Clock algorithm is the most widely used in real OSes. It is an
              efficient approximation of LRU that avoids the overhead of
              maintaining a sorted history.
            </P>
            <Diagram label="Clock algorithm — circular buffer of frames">
              <pre className="whitespace-pre text-[12px]">{`Frames arranged in a circle with a "clock hand" pointer:

        R=1          R=0          R=1
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │  Page A  │ │  Page B  │ │  Page C  │
   └──────────┘ └──────────┘ └──────────┘
        ↑              ↑              ↑
   ┌──────────┐              ┌──────────┐
   │  Page E  │  ◄ HAND      │  Page D  │
   │  R = 0   │              │  R = 1   │
   └──────────┘              └──────────┘

On page fault:
  • If hand points to R=1: clear R to 0, advance hand (second chance)
  • If hand points to R=0: EVICT this page, load new page here`}</pre>
            </Diagram>
            <Steps
              items={[
                {
                  title: "Reference bit set on access",
                  desc: "Whenever a page is accessed, hardware sets its R (Reference) bit to 1.",
                },
                {
                  title: "Page fault occurs",
                  desc: "OS needs to find a victim. Start scanning from the clock hand position.",
                },
                {
                  title: "R=1 → give second chance",
                  desc: "Clear R to 0 and advance the hand. The page stays but loses its 'recently used' status.",
                },
                {
                  title: "R=0 → evict",
                  desc: "This page has not been accessed since the hand last passed it. Evict it and load the new page here.",
                },
              ]}
            />
          </Sub>

          <Sub id="comparison-algorithms" title="Comparison of Algorithms">
            <CompareTable
              headers={["Algorithm", "Fault Rate", "Implementable?", "Anomaly", "Used in practice"]}
              rows={[
                ["Optimal (OPT)", "Minimum possible", "No — needs future knowledge", "None", "Benchmark only"],
                ["LRU", "Near-optimal", "Costly — needs hardware counters", "None", "Approximated (Clock)"],
                ["Clock (2nd Chance)", "Good", "Yes — uses Reference bit", "None", "Linux, BSD, Windows"],
                ["FIFO", "Poor", "Yes — trivial queue", "Bélády's Anomaly", "Rarely (educational)"],
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            7. Memory Management Hardware
        ══════════════════════════════════════════════════════════════ */}
        <Section id="memory-management-hardware" title="Memory Management Hardware">
          <P>
            Memory management is a collaboration between software (the OS) and
            hardware. The OS sets up data structures; the hardware performs
            translations at full CPU speed on every memory access.
          </P>

          <Sub id="mmu" title="Memory Management Unit (MMU)">
            <P>
              The{" "}
              <strong className="text-foreground font-semibold">MMU</strong> is
              a hardware component (built into the CPU on modern chips) that
              automatically translates every virtual address the CPU generates
              into a physical address before it reaches RAM.
            </P>
            <Diagram label="MMU position in the CPU → Memory path">
              <pre className="whitespace-pre text-[12px]">{`CPU Core
┌──────────────────────────────────────┐
│  Execution Unit                      │
│    │ generates virtual address       │
│    ▼                                 │
│  ┌─────┐    TLB hit?  ┌───────────┐  │
│  │ TLB │ ──────────── │   MMU     │  │
│  └─────┘              │ (page walk│  │
│    │ miss             │  on miss) │  │
│    └──────────────────┘           │  │
│              │ physical address       │
└──────────────┼───────────────────────┘
               ▼
          RAM / Cache`}</pre>
            </Diagram>
          </Sub>

          <Sub id="base-limit-register" title="Base and Limit Registers">
            <P>
              Before paging became universal, the simplest hardware protection
              mechanism used just two CPU registers per process:
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Base Register",
                  def: "Holds the physical start address of the process's memory region. Every logical address is added to the base.",
                  color: "blue",
                },
                {
                  term: "Limit Register",
                  def: "Holds the size of the process's memory region. If logical address ≥ limit, a trap is raised (segfault).",
                  color: "red",
                },
              ]}
            />
            <Note>
              Base/limit registers are still used in some embedded systems and
              are the conceptual foundation of segmentation. On modern x86-64,
              this role is largely absorbed by the paging system.
            </Note>
          </Sub>

          <Sub id="paging-hardware-support" title="Hardware Support for Paging">
            <P>
              Paging requires significant hardware support to be practical:
            </P>
            <CompareTable
              headers={["Hardware Feature", "Purpose"]}
              rows={[
                ["CR3 register (x86)", "Holds the physical address of the current process's top-level page table (PGD). Updated on context switch."],
                ["TLB", "Caches recent page-to-frame mappings to avoid repeated page-table walks."],
                ["Page table walker", "Hardware circuit that automatically walks multi-level page tables on a TLB miss."],
                ["Reference bit (R)", "Set automatically by hardware when a page is read. Used by software for LRU approximation."],
                ["Dirty bit (M)", "Set automatically by hardware when a page is written. Tells OS whether the page must be written to disk before eviction."],
              ]}
            />
          </Sub>

          <Sub id="cache-memory" title="Role of Cache Memory">
            <P>
              CPU caches (L1, L2, L3) sit between the CPU and RAM and are
              separate from the TLB. While the TLB caches address translations,
              CPU caches store the actual data.
            </P>
            <Diagram label="Memory hierarchy — speed vs size">
              <pre className="whitespace-pre text-[12px]">{`              Fastest, smallest
              ┌──────────────┐
              │ CPU Registers│  ~0.3 ns  │  ~1 KB
              ├──────────────┤
              │  L1 Cache    │  ~1 ns    │  ~64 KB per core
              ├──────────────┤
              │  L2 Cache    │  ~4 ns    │  ~512 KB per core
              ├──────────────┤
              │  L3 Cache    │  ~10 ns   │  ~32 MB shared
              ├──────────────┤
              │     RAM      │  ~100 ns  │  8–64 GB
              ├──────────────┤
              │  SSD (NVMe)  │  ~100 µs  │  256 GB – 4 TB
              ├──────────────┤
              │  HDD         │  ~10 ms   │  1 TB+
              └──────────────┘
              Slowest, largest`}</pre>
            </Diagram>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            8. Advanced Concepts
        ══════════════════════════════════════════════════════════════ */}
        <Section id="advanced-concepts" title="Advanced Concepts">

          <Sub id="inverted-page-table" title="Inverted Page Table">
            <P>
              A standard page table has one entry per page in the{" "}
              <em>virtual</em> address space. For 64-bit systems, this would
              require astronomically large tables. An{" "}
              <strong className="text-foreground font-semibold">inverted page table</strong>{" "}
              flips the design: it has one entry per physical{" "}
              <em>frame</em> in RAM, regardless of how many virtual pages exist.
            </P>
            <CompareTable
              headers={["Property", "Standard Page Table", "Inverted Page Table"]}
              rows={[
                ["Size", "Proportional to virtual address space (huge for 64-bit)", "Proportional to physical RAM (fixed, manageable)"],
                ["Lookup", "Page number → frame (direct)", "Search for (PID, page#) → row index (slower)"],
                ["Per-process table", "Yes — one per process", "No — one global table"],
                ["Used by", "x86, ARM (most common)", "IBM POWER, IA-64"],
                ["Hash table needed?", "No", "Yes — to speed up lookups"],
              ]}
            />
          </Sub>

          <Sub id="shared-memory" title="Shared Memory">
            <P>
              Shared memory allows two or more processes to map the same
              physical frames into their respective virtual address spaces.
              It is the fastest inter-process communication (IPC) mechanism
              because data doesn't need to be copied — both processes access the
              same RAM directly.
            </P>
            <Diagram label="Shared memory between two processes">
              <pre className="whitespace-pre text-[12px]">{`Process A                        Process B
Virtual Space                    Virtual Space
┌─────────────┐                 ┌─────────────┐
│  code       │                 │  code       │
│  data       │                 │  data       │
│  heap       │                 │  heap       │
│  shared     │──────┐ ┌────────│  shared     │
│  region     │      │ │        │  region     │
│  0xA000     │      ▼ ▼        │  0xB000     │
└─────────────┘  ┌────────┐    └─────────────┘
                 │Physical│
                 │Frames  │  ← Same RAM, no copying
                 │(shared)│
                 └────────┘`}</pre>
            </Diagram>
          </Sub>

          <Sub id="memory-protection" title="Memory Protection">
            <P>
              Memory protection prevents a process from accessing memory it
              doesn't own. This is enforced at multiple levels:
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Page-level protection bits",
                  def: "Each PTE has Read (R), Write (W), and Execute (X) flags. The MMU checks these on every access.",
                  color: "blue",
                },
                {
                  term: "Privilege levels (rings)",
                  def: "x86 uses 4 privilege rings (0–3). Kernel runs in Ring 0; user processes in Ring 3. Ring 3 cannot execute privileged instructions.",
                  color: "teal",
                },
                {
                  term: "ASLR",
                  def: "Address Space Layout Randomisation: the OS randomises where the stack, heap, and libraries are loaded, making buffer overflow exploits harder.",
                  color: "purple",
                },
                {
                  term: "NX / XD bit",
                  def: "Non-Execute / Execute Disable: marks pages as non-executable so injected shellcode in data areas cannot run.",
                  color: "red",
                },
              ]}
            />
          </Sub>

          <Sub id="kernel-vs-user-space" title="Kernel Space vs User Space">
            <P>
              Every virtual address space is split into two halves. On a 64-bit
              Linux system, the lower half (0 to ~128 TB) belongs to user space.
              The upper half (~128 TB to ~256 TB) is kernel space — mapped into
              every process but only accessible when the CPU is in Ring 0.
            </P>
            <Diagram label="64-bit Linux virtual address space layout">
              <pre className="whitespace-pre text-[12px]">{`0xFFFF FFFF FFFF FFFF ┐
                      │  Kernel space
                      │  • Kernel code & data
                      │  • Page tables
0xFFFF 8000 0000 0000 ┘  • Device memory maps

            [gap — not usable]

0x0000 7FFF FFFF FFFF ┐
                      │  User space
                      │  • Stack       (grows down)
                      │  • Libraries   (mmap region)
                      │  • Heap        (grows up)
                      │  • BSS / Data
0x0000 0000 0040 0000 ┘  • Code (text)`}</pre>
            </Diagram>
            <Note variant="tip" title="Why kernel is mapped into every process">
              When a system call happens (e.g. <C>read()</C>), the CPU switches
              to kernel mode without changing the virtual address space. The
              kernel code is already mapped at a known address in the upper half
              — no address space switch needed. This is faster than switching to
              a separate kernel address space.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            9. Real World & Practical Understanding
        ══════════════════════════════════════════════════════════════ */}
        <Section id="real-world" title="Real World & Practical Understanding">

          <Sub id="linux-memory-management" title="Memory Management in Linux">
            <P>
              Linux uses a combination of paging (4-level or 5-level page tables
              on x86-64), demand paging, the Clock-like page replacement via the{" "}
              <strong className="text-foreground font-semibold">Active/Inactive LRU lists</strong>,
              and a slab allocator for kernel objects.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Buddy System",
                  def: "Physical memory allocator. Manages free frames in power-of-2 blocks (1, 2, 4, 8… frames). Efficient splitting and merging. Read /proc/buddyinfo to see it.",
                  color: "blue",
                },
                {
                  term: "Slab Allocator",
                  def: "Caches frequently used kernel objects (inodes, dentries, task_struct) so they can be reused without expensive re-initialisation.",
                  color: "teal",
                },
                {
                  term: "OOM Killer",
                  def: "When memory is critically low and swap is full, the Out-Of-Memory Killer selects and kills a process to free memory. Visible in dmesg.",
                  color: "red",
                },
                {
                  term: "Transparent Huge Pages",
                  def: "Linux can automatically use 2 MB pages (instead of 4 KB) for large allocations, reducing TLB pressure significantly.",
                  color: "purple",
                },
              ]}
            />
            <Note variant="tip" title="Useful /proc files for memory inspection">
              <C>/proc/meminfo</C> — overall memory usage.{" "}
              <C>/proc/[pid]/maps</C> — virtual memory map of a specific
              process. <C>/proc/[pid]/smaps</C> — detailed per-region
              breakdown. <C>/proc/vmstat</C> — page fault and swap statistics.
            </Note>
          </Sub>

          <Sub id="windows-memory-management" title="Memory Management in Windows">
            <P>
              Windows uses a similar paging model but with its own terminology
              and mechanisms. The Windows Memory Manager is part of the kernel
              (ntoskrnl.exe).
            </P>
            <CompareTable
              headers={["Windows Term", "Equivalent concept"]}
              rows={[
                ["Page File (pagefile.sys)", "Linux swap space — disk area for evicted pages"],
                ["Working Set", "The set of pages currently resident in RAM for a process"],
                ["Standby List", "Pages evicted from working sets but still in RAM — can be reclaimed quickly"],
                ["Modified List", "Dirty pages waiting to be written to disk before final release"],
                ["Pool (Paged / Non-paged)", "Kernel memory regions — Non-paged pool must always be in RAM (used by drivers)"],
                ["VAD Tree", "Virtual Address Descriptor — Windows's data structure describing process virtual memory regions"],
              ]}
            />
          </Sub>

          <Sub id="performance-optimization" title="Performance Optimization Techniques">
            <P>
              Understanding memory management helps you write faster code and
              configure systems better.
            </P>
            <Steps
              items={[
                {
                  title: "Improve spatial locality",
                  desc: "Access memory sequentially when possible. Iterating a 2D array row-by-row is ~10× faster than column-by-column due to cache line utilisation.",
                },
                {
                  title: "Reduce working set size",
                  desc: "The fewer distinct pages your hot code path touches, the less TLB and cache pressure. Keep hot data structures compact.",
                },
                {
                  title: "Use huge pages",
                  desc: "For applications that manage large memory regions (databases, JVMs), enabling 2 MB or 1 GB huge pages reduces TLB misses dramatically.",
                },
                {
                  title: "Avoid memory leaks",
                  desc: "Leaked memory grows the working set, pushing out useful pages and increasing page fault rates for all processes on the system.",
                },
                {
                  title: "Tune swap usage",
                  desc: "On Linux, set vm.swappiness (0–100) to control how aggressively the kernel swaps. For latency-sensitive workloads, lower values (10–20) are preferable.",
                },
              ]}
            />
          </Sub>

          <Sub id="debugging-memory-issues" title="Debugging Memory Issues">
            <P>
              When memory problems occur, these tools help diagnose what is
              happening at the OS and application level.
            </P>
            <CompareTable
              headers={["Tool", "Platform", "What it shows"]}
              rows={[
                ["free -h", "Linux", "Total, used, free, and available RAM and swap at a glance"],
                ["vmstat 1", "Linux", "Page fault rate, swap in/out, memory stats updated every second"],
                ["perf stat", "Linux", "Hardware cache misses, TLB misses, page faults for a process"],
                ["valgrind --leak-check=full", "Linux/macOS", "Heap memory leaks, use-after-free, and invalid accesses in C/C++ programs"],
                ["AddressSanitizer (ASan)", "All", "Compiler-based tool for detecting memory errors at runtime with ~2× overhead"],
                ["Task Manager / Resmon", "Windows", "Working set, commit size, page faults per process"],
                ["/proc/[pid]/smaps", "Linux", "Detailed breakdown of every memory region — RSS, PSS, swap usage"],
              ]}
            />
            <Note variant="tip" title="Page fault rate is the key metric">
              A healthy process should have a very low major page fault rate
              (faults that require disk I/O) after its initial startup. If{" "}
              <C>vmstat</C> shows continuous <C>si</C>/<C>so</C> (swap-in /
              swap-out) activity, your system is thrashing and needs more RAM or
              fewer processes.
            </Note>
          </Sub>
        </Section>

      </div>
    </main>
  );
}