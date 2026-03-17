import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Activity, Info, AlertTriangle, Lightbulb } from "lucide-react";

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

// ── Diagram / visual block ─────────────────────────────────────────────────

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

// ── Concept grid ───────────────────────────────────────────────────────────

function ConceptGrid({
  items,
}: {
  items: { term: string; def: string; color?: string }[];
}) {
  const colorMap: Record<string, string> = {
    blue:   "border-blue-200   bg-blue-50/50   dark:border-blue-900   dark:bg-blue-950/30",
    teal:   "border-teal-200   bg-teal-50/50   dark:border-teal-900   dark:bg-teal-950/30",
    amber:  "border-amber-200  bg-amber-50/50  dark:border-amber-900  dark:bg-amber-950/30",
    red:    "border-red-200    bg-red-50/50    dark:border-red-900    dark:bg-red-950/30",
    purple: "border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/30",
    green:  "border-green-200  bg-green-50/50  dark:border-green-900  dark:bg-green-950/30",
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

// ── Step list ──────────────────────────────────────────────────────────────

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
            <p className="text-[13px] text-muted-foreground leading-relaxed mt-0.5">
              {item.desc}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ── Formula block ──────────────────────────────────────────────────────────

function Formula({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 px-5 py-4">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </p>
      <p className="font-mono text-[13px] text-foreground leading-relaxed">{children}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function ProcessScheduling() {
  return (
    <main className="pb-24">

      {/* ── Page header ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl border border-border bg-muted flex items-center justify-center text-base select-none">
            ⚙️
          </div>
          <Badge variant="secondary" className="text-[11px] px-2.5 py-0.5 rounded-md">
            Operating Systems
          </Badge>
          <Badge
            variant="outline"
            className="text-[11px] px-2.5 py-0.5 rounded-md text-muted-foreground"
          >
            Computer Science
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground leading-tight mb-3">
          Process Scheduling
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
          A beginner-friendly deep dive into how operating systems decide which
          process runs next — covering process states, scheduling algorithms,
          Gantt chart analysis, real-time systems, multiprocessor scheduling,
          and how Linux and Windows do it in practice.
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen size={12} />
            <span>10 sections</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <div className="flex items-center gap-1.5">
            <Activity size={12} />
            <span>40+ concepts</span>
          </div>
          <Separator orientation="vertical" className="h-3.5" />
          <span>OS Theory · Beginner → Advanced</span>
        </div>
      </div>

      <div className="space-y-16">

        {/* ══════════════════════════════════════════════════════════════
            1. Introduction
        ══════════════════════════════════════════════════════════════ */}
        <Section id="introduction" title="Introduction to Process Scheduling">
          <P>
            At any given moment a computer may have dozens or hundreds of
            processes that want to run — but only one (or a handful, on a
            multi-core machine) can actually use the CPU at a time. The part of
            the operating system that decides{" "}
            <strong className="text-foreground font-semibold">who gets the CPU, when, and for how long</strong>{" "}
            is called the <strong className="text-foreground font-semibold">scheduler</strong>.
          </P>

          <Sub id="what-is-process-scheduling" title="What is Process Scheduling?">
            <P>
              Process scheduling is the mechanism by which the OS selects the
              next process from the ready queue to be executed on the CPU. The
              goal is to keep the CPU as busy as possible while being fair to
              all processes and meeting any deadlines.
            </P>
            <Note title="Analogy">
              Imagine a single cashier at a supermarket with a long queue of
              customers. The manager's policy for deciding who gets served next
              — first come first served, shortest item count first, VIP
              customers first — is exactly what a scheduling algorithm does for
              processes.
            </Note>
          </Sub>

          <Sub id="why-scheduling-is-needed" title="Why Process Scheduling is Needed">
            <P>
              Without scheduling, one greedy process could monopolise the CPU
              forever. Scheduling solves four fundamental problems:
            </P>
            <ConceptGrid
              items={[
                {
                  term: "CPU Utilisation",
                  def: "Keep the CPU busy 100% of the time instead of sitting idle while processes wait for I/O.",
                  color: "blue",
                },
                {
                  term: "Fairness",
                  def: "Every process should eventually get CPU time. No process should wait forever.",
                  color: "teal",
                },
                {
                  term: "Responsiveness",
                  def: "Interactive programs (like a text editor) must respond to keystrokes within milliseconds, not seconds.",
                  color: "purple",
                },
                {
                  term: "Throughput",
                  def: "Complete as many processes per unit time as possible — maximise the work done.",
                  color: "green",
                },
              ]}
            />
          </Sub>

          <Sub id="process-states" title="Process States and State Transitions">
            <P>
              A process is not always running. It moves through a well-defined
              set of states during its lifetime. Understanding these states is
              the foundation for understanding scheduling.
            </P>
            <Diagram label="Process state transition diagram">
              <pre className="whitespace-pre text-[12px]">{`
                    ┌─────────────────────────────────────────┐
                    │              admitted                   │
   ┌──────────┐     ▼          ┌───────────┐   scheduler  ┌──────────┐
   │   New    │──────────────▶ │   Ready   │─────────────▶│ Running  │
   └──────────┘                └───────────┘  dispatch     └──────────┘
                                     ▲              │              │
                                     │   I/O done   │ I/O or event │  exit
                                     │   or event   ▼  wait        ▼
                                     │        ┌──────────┐   ┌──────────┐
                                     └────────│ Waiting  │   │Terminated│
                                              │(Blocked) │   └──────────┘
                                              └──────────┘
                                                   ▲
                                     preempted ────┘  (returns to Ready)
`}</pre>
            </Diagram>
            <CompareTable
              headers={["State", "What it means", "Example trigger"]}
              rows={[
                ["New", "Process has been created but not yet admitted to the ready queue", "Program launched by user"],
                ["Ready", "Process is waiting in the ready queue for CPU time", "I/O completed, process unblocked"],
                ["Running", "Process is actively executing on a CPU core", "Scheduler selected this process"],
                ["Waiting (Blocked)", "Process is waiting for an event — I/O, signal, timer", "Called read() — waiting for disk"],
                ["Terminated", "Process has finished execution. Resources being freed", "Returned from main(), or killed"],
              ]}
            />
          </Sub>

          <Sub id="types-of-schedulers" title="Types of Schedulers (Long, Short, Medium)">
            <P>
              Scheduling happens at three different timescales, each handled by
              a different scheduler:
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Long-Term Scheduler (Job Scheduler)",
                  def: "Decides which programs are admitted from disk into the ready queue. Controls the degree of multiprogramming. Runs infrequently — every few minutes. Mostly absent in modern interactive OSes.",
                  color: "blue",
                },
                {
                  term: "Short-Term Scheduler (CPU Scheduler)",
                  def: "Decides which ready process gets the CPU next. Runs very frequently — every few milliseconds. This is what most people mean when they say 'scheduler'.",
                  color: "teal",
                },
                {
                  term: "Medium-Term Scheduler (Swapper)",
                  def: "Temporarily removes processes from memory to disk (swapping) to reduce the degree of multiprogramming and free up RAM. Reloads them later.",
                  color: "purple",
                },
              ]}
            />
            <Note variant="tip" title="Modern systems">
              Most modern desktop and server OSes don't have a distinct
              long-term scheduler — any process can enter the ready queue
              immediately. The short-term scheduler and virtual memory together
              handle everything dynamically.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            2. CPU Scheduling Basics
        ══════════════════════════════════════════════════════════════ */}
        <Section id="cpu-scheduling-basics" title="CPU Scheduling Basics">

          <Sub id="cpu-io-burst-cycle" title="CPU-I/O Burst Cycle">
            <P>
              Process execution alternates between two kinds of activity: doing
              computation on the CPU, and waiting for I/O (disk, network,
              keyboard). These are called{" "}
              <strong className="text-foreground font-semibold">CPU bursts</strong> and{" "}
              <strong className="text-foreground font-semibold">I/O bursts</strong>.
            </P>
            <Diagram label="CPU-I/O burst alternation for a single process">
              <pre className="whitespace-pre text-[12px]">{`Process lifecycle:
  ┌──────┐  ┌─────────┐  ┌──────┐  ┌─────────┐  ┌──────┐
  │ CPU  │  │   I/O   │  │ CPU  │  │   I/O   │  │ CPU  │  → exit
  │burst │  │  wait   │  │burst │  │  wait   │  │burst │
  │ 6ms  │  │  80ms   │  │ 3ms  │  │  40ms   │  │ 8ms  │
  └──────┘  └─────────┘  └──────┘  └─────────┘  └──────┘

CPU-bound process: long CPU bursts, few I/O bursts  (e.g. video encoding)
I/O-bound process: short CPU bursts, many I/O bursts (e.g. web server)`}</pre>
            </Diagram>
            <Note variant="tip" title="Why this matters for scheduling">
              I/O-bound processes voluntarily give up the CPU very quickly (short
              bursts). Giving them priority means the CPU is rarely truly idle —
              as soon as the I/O-bound process blocks, another process takes
              over. CPU-bound processes are the ones that need to be preempted.
            </Note>
          </Sub>

          <Sub id="preemptive-vs-non-preemptive" title="Preemptive vs Non-Preemptive Scheduling">
            <P>
              One of the most fundamental design decisions in a scheduler is
              whether it can forcibly take the CPU away from a running process.
            </P>
            <CompareTable
              headers={["Property", "Non-Preemptive", "Preemptive"]}
              rows={[
                ["CPU handover", "Process gives up CPU voluntarily (exits or blocks on I/O)", "OS can forcibly remove CPU from running process"],
                ["Context switches", "Fewer — only on I/O/exit", "More — on timer interrupts too"],
                ["Fairness", "Poor — one process can hog the CPU", "Good — all processes get regular turns"],
                ["Response time", "Unpredictable for interactive processes", "Bounded — timer interrupt limits max run time"],
                ["Complexity", "Simpler to implement", "Requires synchronisation — shared data race conditions"],
                ["Examples", "FCFS, SJF (non-preemptive)", "Round Robin, SRTF, Linux CFS"],
              ]}
            />
            <Note variant="warning" title="Kernel preemption is separate">
              Preemptive scheduling means the OS can preempt user processes. A
              fully preemptible kernel (like Linux with{" "}
              <C>CONFIG_PREEMPT</C>) can also preempt kernel code itself —
              important for real-time responsiveness.
            </Note>
          </Sub>

          <Sub id="dispatcher" title="Role of Dispatcher">
            <P>
              The <strong className="text-foreground font-semibold">dispatcher</strong> is
              the component that actually hands control of the CPU to the process
              the scheduler selected. It is different from the scheduler: the
              scheduler makes the decision; the dispatcher performs the handover.
            </P>
            <Steps
              items={[
                {
                  title: "Save current process state",
                  desc: "Store the running process's CPU registers, program counter, and stack pointer into its Process Control Block (PCB).",
                },
                {
                  title: "Switch to kernel mode if needed",
                  desc: "Ensure the OS has full control during the handover before any user code runs.",
                },
                {
                  title: "Load next process state",
                  desc: "Restore the selected process's registers and program counter from its PCB.",
                },
                {
                  title: "Switch to user mode",
                  desc: "Lower privilege level and jump to the restored program counter. The new process resumes exactly where it left off.",
                },
              ]}
            />
            <Formula label="Dispatch latency">
              Dispatch Latency = Time from scheduler decision → first instruction of new process
            </Formula>
            <P>
              Dispatch latency should be as small as possible — typically
              microseconds. Every context switch pays this cost, so excessive
              context switching degrades performance.
            </P>
          </Sub>

          <Sub id="context-switch" title="Context Switching">
            <P>
              A{" "}
              <strong className="text-foreground font-semibold">context switch</strong>{" "}
              is the act of saving the complete state of one process and
              restoring the state of another. The CPU does no useful work during
              a context switch — it is pure overhead.
            </P>
            <Diagram label="Context switch timeline">
              <pre className="whitespace-pre text-[12px]">{`Process A  ████████████│                  │████████████
                       │ save A's context │
                       │ load B's context │
Process B              │                  │████████████████
                        ◄────────────────►
                          Context Switch
                          (~1–10 µs)

  CPU time during switch: WASTED (no user process is running)`}</pre>
            </Diagram>
            <P>
              What gets saved in a context? Everything the process needs to
              resume exactly where it left off:
            </P>
            <ConceptGrid
              items={[
                { term: "CPU Registers", def: "All general-purpose registers: RAX, RBX, RCX, RDX, RSI, RDI, etc." },
                { term: "Program Counter (PC)", def: "The address of the next instruction to execute." },
                { term: "Stack Pointer (SP)", def: "Points to the top of the process's current stack." },
                { term: "Memory Maps", def: "The CR3 register (page table base) — switches the virtual address space." },
                { term: "Floating Point State", def: "FPU/SSE/AVX registers — often saved lazily only if the next process uses them." },
                { term: "OS Bookkeeping", def: "Scheduling priority, CPU time used, open file descriptors, signal mask." },
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            3. Scheduling Criteria
        ══════════════════════════════════════════════════════════════ */}
        <Section id="scheduling-criteria" title="Scheduling Criteria">
          <P>
            Before comparing algorithms we need agreed metrics — how do we
            measure whether one scheduling algorithm is better than another?
            Different metrics matter for different workloads.
          </P>

          <Sub id="cpu-utilization" title="CPU Utilization">
            <P>
              The percentage of time the CPU is doing useful work (running user
              or OS code) rather than sitting idle. Higher is better.
            </P>
            <Formula label="CPU Utilization">
              CPU Utilization (%) = (CPU busy time / Total time) × 100
            </Formula>
            <P>
              In practice, real systems target 40–90% CPU utilisation. Near
              100% means the system is overloaded — every new process makes
              response time worse. Below 40% suggests the system is
              under-utilised.
            </P>
          </Sub>

          <Sub id="throughput" title="Throughput">
            <P>
              The number of processes completed per unit time. Maximising
              throughput means getting more work done overall.
            </P>
            <Formula label="Throughput">
              Throughput = Number of processes completed / Time interval
            </Formula>
            <Note>
              Throughput and response time often trade off against each other.
              Optimising for throughput (e.g. running long batch jobs
              uninterrupted) hurts response time for interactive users.
            </Note>
          </Sub>

          <Sub id="turnaround-time" title="Turnaround Time">
            <P>
              How long it takes from the moment a process is submitted to the
              moment it completes. This is the total experience from the user's
              perspective.
            </P>
            <Formula label="Turnaround Time">
              Turnaround Time = Completion Time − Arrival Time
            </Formula>
            <Formula label="Average Turnaround Time">
              Average Turnaround Time = Σ(Turnaround Time of each process) / n
            </Formula>
          </Sub>

          <Sub id="waiting-time" title="Waiting Time">
            <P>
              The total time a process spends sitting in the ready queue —
              waiting to be given the CPU — across its entire lifetime. Waiting
              time does not include time spent doing I/O.
            </P>
            <Formula label="Waiting Time">
              Waiting Time = Turnaround Time − CPU Burst Time
            </Formula>
            <Note variant="tip" title="Why minimise waiting time?">
              Waiting time is purely wasted time. A process sitting in the ready
              queue is consuming no resources productively. Minimising average
              waiting time is the most commonly used optimisation goal.
            </Note>
          </Sub>

          <Sub id="response-time" title="Response Time">
            <P>
              The time from when a request is submitted to when the{" "}
              <em>first</em> response is produced — not when the process
              finishes. Critical for interactive systems.
            </P>
            <Formula label="Response Time">
              Response Time = Time of first CPU allocation − Arrival Time
            </Formula>
            <CompareTable
              headers={["System type", "Most important metric", "Reasoning"]}
              rows={[
                ["Batch processing", "Turnaround time, throughput", "No human waiting — optimise total work done"],
                ["Interactive (desktop/web)", "Response time", "User must see feedback within ~100ms"],
                ["Real-time", "Deadlines met (100%)", "Missing a deadline is a system failure"],
              ]}
            />
          </Sub>

          <Sub id="fairness" title="Fairness in Scheduling">
            <P>
              Fairness ensures that each process receives its fair share of the
              CPU over time. An unfair scheduler may give most CPU time to
              high-priority processes and starve lower-priority ones.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Starvation",
                  def: "A process never gets CPU time because higher-priority processes always preempt it. The extreme failure of fairness.",
                  color: "red",
                },
                {
                  term: "Ageing",
                  def: "Gradually increase a waiting process's priority the longer it waits. Prevents starvation by ensuring long-waiting processes eventually get the CPU.",
                  color: "green",
                },
                {
                  term: "Proportional share",
                  def: "Each process is allocated CPU time proportional to its assigned weight. Linux CFS implements this.",
                  color: "blue",
                },
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            4. Scheduling Algorithms
        ══════════════════════════════════════════════════════════════ */}
        <Section id="scheduling-algorithms" title="Scheduling Algorithms">
          <P>
            Each algorithm makes a different trade-off between the scheduling
            criteria above. None is universally best — the right choice depends
            on the workload.
          </P>

          <Sub id="fcfs" title="First Come First Serve (FCFS)">
            <P>
              The simplest scheduling algorithm: processes are executed in the
              exact order they arrive in the ready queue. Non-preemptive — once
              a process starts, it runs until it finishes or blocks.
            </P>
            <Diagram label="FCFS Gantt chart example">
              <pre className="whitespace-pre text-[12px]">{`Processes: P1 (burst=24ms), P2 (burst=3ms), P3 (burst=3ms)
All arrive at time 0.

 0        24       27       30
 ├────────────────┤────────┤────────┤
 │      P1        │   P2   │   P3   │

Waiting times:  P1=0,  P2=24,  P3=27
Average waiting time = (0 + 24 + 27) / 3 = 17ms  ← very poor`}</pre>
            </Diagram>
            <Note variant="warning" title="Convoy Effect">
              FCFS suffers from the{" "}
              <strong className="text-foreground font-semibold">convoy effect</strong>:
              one long CPU-bound process makes all short processes behind it
              wait. It's like being stuck behind a slow lorry on a single-lane
              road. This is why FCFS is rarely used in interactive systems.
            </Note>
          </Sub>

          <Sub id="sjf" title="Shortest Job First (SJF)">
            <P>
              SJF selects the process with the{" "}
              <strong className="text-foreground font-semibold">smallest CPU burst time</strong>{" "}
              next. It is provably optimal for minimising average waiting time —
              no other non-preemptive algorithm does better.
            </P>
            <Diagram label="SJF Gantt chart — same processes as FCFS">
              <pre className="whitespace-pre text-[12px]">{`Processes: P1 (burst=24ms), P2 (burst=3ms), P3 (burst=3ms)
All arrive at time 0.

SJF order: P2 → P3 → P1

 0        3        6                         30
 ├────────┤────────┤────────────────────────┤
 │   P2   │   P3   │          P1             │

Waiting times:  P1=6,  P2=0,  P3=3
Average waiting time = (6 + 0 + 3) / 3 = 3ms  ← much better!`}</pre>
            </Diagram>
            <Note variant="warning" title="The prediction problem">
              SJF requires knowing the future CPU burst length in advance —
              which is impossible. Real OSes estimate it using an{" "}
              <strong className="text-foreground font-semibold">exponential average</strong>{" "}
              of past bursts: <C>τ(n+1) = α × t(n) + (1-α) × τ(n)</C>, where{" "}
              <C>t(n)</C> is the actual last burst and <C>α</C> (typically 0.5)
              controls how much weight to give recent vs historical data.
            </Note>
          </Sub>

          <Sub id="srtf" title="Shortest Remaining Time First (SRTF)">
            <P>
              SRTF is the{" "}
              <strong className="text-foreground font-semibold">preemptive version of SJF</strong>.
              Whenever a new process arrives, if its burst time is shorter than
              the remaining time of the currently running process, the running
              process is preempted immediately.
            </P>
            <Diagram label="SRTF example — preemption in action">
              <pre className="whitespace-pre text-[12px]">{`Process   Arrival   Burst
  P1         0        8
  P2         1        4
  P3         2        9
  P4         3        5

 0   1        5        10        17       26
 ├───┤────────┤─────────┤─────────┤────────┤
 │P1 │   P2  │   P4    │   P1    │   P3   │
         ↑
   P2 arrives (4ms) < P1 remaining (7ms) → preempt P1`}</pre>
            </Diagram>
            <Note>
              SRTF gives the minimum possible average waiting time among all
              preemptive algorithms. The downside: a continuous stream of short
              jobs can starve a long job indefinitely.
            </Note>
          </Sub>

          <Sub id="priority-scheduling" title="Priority Scheduling">
            <P>
              Each process is assigned a{" "}
              <strong className="text-foreground font-semibold">priority number</strong>.
              The CPU always goes to the highest-priority ready process.
              Can be preemptive or non-preemptive. SJF is a special case of
              priority scheduling where priority = 1/burst_time.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Internal priority",
                  def: "Set by the OS based on measurable quantities: memory requirements, number of open files, ratio of CPU to I/O burst.",
                  color: "blue",
                },
                {
                  term: "External priority",
                  def: "Set by the user or administrator — paying customers get higher priority, system processes outrank user processes.",
                  color: "teal",
                },
                {
                  term: "Static priority",
                  def: "Priority is fixed at process creation and never changes. Simple but can cause starvation.",
                  color: "amber",
                },
                {
                  term: "Dynamic priority",
                  def: "Priority changes over time — e.g. increases the longer a process waits (ageing). Prevents starvation.",
                  color: "green",
                },
              ]}
            />
            <Note variant="warning" title="Priority Inversion">
              If a low-priority process holds a lock needed by a high-priority
              process, the high-priority process must wait — effectively running
              at the low priority. This is called{" "}
              <strong className="text-foreground font-semibold">priority inversion</strong>.
              It famously crashed the Mars Pathfinder rover in 1997.
            </Note>
          </Sub>

          <Sub id="round-robin" title="Round Robin (RR)">
            <P>
              Round Robin is designed for{" "}
              <strong className="text-foreground font-semibold">time-sharing systems</strong>.
              Each process gets a small fixed time slice called a{" "}
              <strong className="text-foreground font-semibold">quantum</strong>{" "}
              (typically 10–100ms). When the quantum expires, the process is
              preempted and moved to the back of the ready queue, regardless of
              whether it finished.
            </P>
            <Diagram label="Round Robin — quantum = 4ms">
              <pre className="whitespace-pre text-[12px]">{`Process   Burst
  P1        24
  P2         3
  P3         3

 0    4    7    10   14   18   22   26   30
 ├────┤────┤────┤────┤────┤────┤────┤────┤
 │ P1 │ P2 │ P3 │ P1 │ P1 │ P1 │ P1 │ P1 │
           ↑    ↑
       P2 done P3 done (both finish in first quantum)

Average waiting time = (6 + 4 + 7) / 3 = 5.67ms`}</pre>
            </Diagram>
            <P>
              The quantum size is a critical tuning parameter:
            </P>
            <CompareTable
              headers={["Quantum size", "Behaviour", "Downside"]}
              rows={[
                ["Very large (→ ∞)", "Degenerates to FCFS", "Poor response time for short jobs"],
                ["Very small (→ 0)", "Every process gets tiny slices — appears simultaneous", "Excessive context switches — most CPU time is overhead"],
                ["~10–100ms (practical)", "Good balance of responsiveness and throughput", "Must be tuned per workload"],
              ]}
            />
            <Note variant="tip" title="Rule of thumb">
              A good quantum means 80% of CPU bursts should be shorter than one
              quantum. This ensures most processes complete their burst in a
              single turn without being preempted unnecessarily.
            </Note>
          </Sub>

          <Sub id="multilevel-queue" title="Multilevel Queue Scheduling">
            <P>
              Rather than one queue, the ready queue is split into{" "}
              <strong className="text-foreground font-semibold">
                multiple queues based on process type
              </strong>
              . Each queue has its own scheduling algorithm and priority level.
              Processes are permanently assigned to a queue at creation.
            </P>
            <Diagram label="Multilevel Queue — 5 levels">
              <pre className="whitespace-pre text-[12px]">{`Priority ▲
         │
Highest  │  Queue 0:  System processes          → FCFS
         │  Queue 1:  Interactive processes     → Round Robin (q=8ms)
         │  Queue 2:  Interactive editing       → Round Robin (q=16ms)
         │  Queue 3:  Batch processes           → FCFS
Lowest   │  Queue 4:  Student/background jobs   → FCFS
         │
         └──────────────────────────────────────────────────►

Rule: A process in Queue N only runs if Queues 0..N-1 are all empty.`}</pre>
            </Diagram>
            <Note variant="warning" title="No movement between queues">
              Processes cannot move between queues. A CPU-bound process stuck in
              the lowest-priority queue will starve whenever there are
              interactive processes. This rigidity is fixed by the Multilevel
              Feedback Queue.
            </Note>
          </Sub>

          <Sub id="multilevel-feedback-queue" title="Multilevel Feedback Queue">
            <P>
              The{" "}
              <strong className="text-foreground font-semibold">
                Multilevel Feedback Queue (MLFQ)
              </strong>{" "}
              is the most sophisticated and most widely used scheduling scheme.
              Unlike the fixed multilevel queue, processes can{" "}
              <strong className="text-foreground font-semibold">move between queues</strong>{" "}
              based on their behaviour.
            </P>
            <Steps
              items={[
                {
                  title: "New process enters the highest-priority queue",
                  desc: "All new processes are assumed to be interactive (short CPU bursts) and get the best treatment initially.",
                },
                {
                  title: "If it uses its full quantum → demote",
                  desc: "A process that uses its entire quantum is likely CPU-bound. Move it down to the next lower queue (longer quantum, lower priority).",
                },
                {
                  title: "If it voluntarily gives up the CPU → stays or promotes",
                  desc: "A process that blocks on I/O before the quantum expires is I/O-bound. It keeps its current priority or moves up.",
                },
                {
                  title: "Ageing prevents starvation",
                  desc: "If a process waits too long in a low-priority queue, periodically promote it back to a higher queue.",
                },
              ]}
            />
            <Diagram label="MLFQ with 3 queues">
              <pre className="whitespace-pre text-[12px]">{`   Q0 (quantum=8ms,  highest priority)  ──►  new processes enter here
   Q1 (quantum=16ms, medium priority)   ──►  demoted from Q0
   Q2 (quantum=∞,    lowest priority)   ──►  FCFS — CPU-bound jobs
         ▲
         │  ageing (after waiting too long)
         └────────────────────────────────`}</pre>
            </Diagram>
            <Note variant="tip" title="Used by real OSes">
              Windows NT/XP/Vista/7 use a 32-level version of MLFQ. Linux uses
              the Completely Fair Scheduler (CFS) — a different but related
              approach. macOS uses a 4-level MLFQ for its kernel threads.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            5. Analysis of Scheduling Algorithms
        ══════════════════════════════════════════════════════════════ */}
        <Section id="algorithm-analysis" title="Analysis of Scheduling Algorithms">
          <P>
            To compare scheduling algorithms, we work through examples
            manually using Gantt charts and calculate the standard metrics.
          </P>

          <Sub id="gantt-charts" title="Gantt Charts">
            <P>
              A Gantt chart is a horizontal bar diagram that shows which process
              runs on the CPU at each point in time. It is the standard tool for
              visualising and verifying scheduling algorithm behaviour.
            </P>
            <Diagram label="Gantt chart anatomy">
              <pre className="whitespace-pre text-[12px]">{`  Time →
  0    4    8   12   16   20   24
  ├────┤────┤────┤────┤────┤────┤
  │ P3 │ P1 │ P2 │ P3 │ P1 │ P4 │
  └────┴────┴────┴────┴────┴────┘

  Reading: P3 runs from time 0 to 4.
           P1 runs from time 4 to 8.
           P2 runs from time 8 to 12.
           ...and so on.`}</pre>
            </Diagram>
          </Sub>

          <Sub id="average-waiting-time" title="Calculating Average Waiting Time">
            <P>
              Work through this step-by-step with a concrete example using all
              three algorithms: FCFS, SJF, and Round Robin.
            </P>
            <Diagram label="Example problem — 4 processes">
              <pre className="whitespace-pre text-[12px]">{`Process   Arrival Time   CPU Burst
  P1           0              5
  P2           1              3
  P3           2              8
  P4           3              6

─────────────────────────────────────────────────
FCFS (non-preemptive):
 0     5     8                16          22
 ├─────┤─────┤────────────────┤───────────┤
 │ P1  │ P2  │       P3       │    P4     │

Waiting:  P1=0, P2=4, P3=6, P4=13
Avg WT = (0+4+6+13)/4 = 5.75ms

─────────────────────────────────────────────────
SJF (non-preemptive, after all arrive at t=3):
 0     5     8    11          19         22
 ├─────┤─────┤────┤───────────┤──────────┤
 │ P1  │ P2  │ P4 │    P3     │  done    │

Waiting:  P1=0, P2=4, P3=9, P4=5
Avg WT = (0+4+9+5)/4 = 4.5ms`}</pre>
            </Diagram>
          </Sub>

          <Sub id="average-turnaround-time" title="Calculating Turnaround Time">
            <Formula label="Turnaround Time per process">
              Turnaround Time = Completion Time − Arrival Time
            </Formula>
            <Diagram label="Turnaround times for FCFS example">
              <pre className="whitespace-pre text-[12px]">{`Process  Arrival  Completion  Turnaround  Waiting
  P1        0         5           5          0
  P2        1         8           7          4
  P3        2        16          14          6
  P4        3        22          19         13
                              ──────────  ──────
                    Average =   11.25ms    5.75ms

Formula check: Turnaround = Waiting + Burst
  P1: 0 + 5 = 5  ✓
  P2: 4 + 3 = 7  ✓
  P3: 6 + 8 = 14 ✓
  P4: 13+ 6 = 19 ✓`}</pre>
            </Diagram>
          </Sub>

          <Sub id="comparison-of-algorithms" title="Comparison of Scheduling Algorithms">
            <CompareTable
              headers={["Algorithm", "Preemptive?", "Avg Wait", "Starvation?", "Best for"]}
              rows={[
                ["FCFS", "No", "Poor", "No", "Simple batch systems"],
                ["SJF", "No", "Optimal (non-preemptive)", "Yes — long jobs", "Batch with known burst times"],
                ["SRTF", "Yes", "Optimal (preemptive)", "Yes — long jobs", "Minimising avg wait time"],
                ["Priority", "Both", "Moderate", "Yes — low priority", "Systems with process classes"],
                ["Round Robin", "Yes", "Good for short jobs", "No", "Time-sharing, interactive"],
                ["Multilevel Queue", "Depends per queue", "Good", "Yes — lower queues", "Mixed workload systems"],
                ["MLFQ", "Yes", "Very good", "Rare (ageing helps)", "General purpose — most real OSes"],
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            6. Real-Time Scheduling
        ══════════════════════════════════════════════════════════════ */}
        <Section id="real-time-scheduling" title="Real-Time Scheduling">
          <P>
            Real-time systems don't just need to produce the correct result —
            they must produce it{" "}
            <strong className="text-foreground font-semibold">before a deadline</strong>.
            Correctness is defined by both the output and the time it arrives.
          </P>

          <Sub id="real-time-systems" title="Real-Time Systems Overview">
            <P>
              Real-time systems are found wherever timing is critical: medical
              devices (pacemakers), industrial controls (factory robots), vehicle
              systems (ABS brakes, autopilot), and multimedia (audio/video
              streaming).
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Periodic tasks",
                  def: "Must run at a fixed rate — e.g. a sensor sampler that must run every 10ms. Period T, computation time C, deadline D (usually D = T).",
                  color: "blue",
                },
                {
                  term: "Aperiodic tasks",
                  def: "Triggered by an external event with no fixed rate — e.g. an interrupt handler for a button press.",
                  color: "teal",
                },
                {
                  term: "Sporadic tasks",
                  def: "Like aperiodic but with a known minimum time between occurrences, allowing schedulability analysis.",
                  color: "purple",
                },
              ]}
            />
          </Sub>

          <Sub id="hard-vs-soft-real-time" title="Hard vs Soft Real-Time Systems">
            <CompareTable
              headers={["Property", "Hard Real-Time", "Soft Real-Time"]}
              rows={[
                ["Deadline miss consequence", "System failure / catastrophe", "Degraded quality — annoying but not fatal"],
                ["Examples", "Pacemaker, airbag controller, flight avionics", "Video streaming, online gaming, audio playback"],
                ["Timing guarantee", "Absolute — 100% of deadlines must be met", "Statistical — most deadlines should be met"],
                ["OS approach", "Dedicated RTOS (VxWorks, FreeRTOS)", "General OS with RT extensions (Linux PREEMPT_RT)"],
                ["Memory", "Often no virtual memory / paging (latency!)", "Virtual memory OK with care"],
              ]}
            />
          </Sub>

          <Sub id="rate-monotonic" title="Rate Monotonic Scheduling (RMS)">
            <P>
              RMS is the classic algorithm for scheduling periodic real-time
              tasks. The rule is simple:{" "}
              <strong className="text-foreground font-semibold">
                higher frequency = higher priority
              </strong>
              . A task that must run every 10ms gets higher priority than one
              that runs every 50ms.
            </P>
            <Formula label="RMS schedulability bound (Liu & Layland 1973)">
              {"CPU utilisation U = Σ(Ci / Ti) ≤ n(2^(1/n) − 1)"}
            </Formula>
            <P>
              Where <C>Ci</C> is the execution time and <C>Ti</C> is the period
              of task <C>i</C>. For large <C>n</C> this converges to ≈ 69%.
              If the total utilisation is under this bound, RMS guarantees all
              deadlines will always be met.
            </P>
            <Note variant="tip" title="Intuition">
              If you assign the highest priority to the most frequent task, you
              ensure the tasks that need to run the most often are never delayed
              by less-frequent, lower-priority tasks.
            </Note>
          </Sub>

          <Sub id="earliest-deadline-first" title="Earliest Deadline First (EDF)">
            <P>
              EDF is a{" "}
              <strong className="text-foreground font-semibold">dynamic priority</strong>{" "}
              algorithm: at every scheduling decision, the process whose
              absolute deadline is soonest gets the CPU. Priorities change as
              deadlines approach.
            </P>
            <CompareTable
              headers={["Property", "RMS", "EDF"]}
              rows={[
                ["Priority", "Static — based on period", "Dynamic — based on absolute deadline"],
                ["Optimal?", "Yes, for fixed-priority algorithms", "Yes, among all algorithms — can use up to 100% CPU"],
                ["Max CPU utilisation", "≈ 69% (for large n)", "100% (theoretically)"],
                ["Overhead", "Low — fixed priorities", "Higher — priorities must be recomputed dynamically"],
                ["Overload behaviour", "Predictable — lower-priority tasks miss first", "Unpredictable — any task may miss its deadline"],
                ["Used in practice", "Embedded systems, hard RT", "Soft RT, multimedia, Linux SCHED_DEADLINE"],
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            7. Thread Scheduling
        ══════════════════════════════════════════════════════════════ */}
        <Section id="thread-scheduling" title="Thread Scheduling">
          <P>
            Modern programs use multiple threads — lightweight execution units
            within a process that share the same address space. Scheduling
            threads involves both the OS kernel and user-level thread libraries.
          </P>

          <Sub id="user-vs-kernel-threads" title="User vs Kernel Threads">
            <CompareTable
              headers={["Property", "User-Level Threads", "Kernel-Level Threads"]}
              rows={[
                ["Managed by", "User-space thread library (e.g. pthreads in user mode)", "OS kernel directly"],
                ["Context switch cost", "Very low — no system call needed", "Higher — requires kernel involvement"],
                ["OS visibility", "Invisible — OS sees one process", "Fully visible — OS schedules each thread"],
                ["Blocking I/O", "Blocks entire process (all threads block)", "Only the calling thread blocks"],
                ["Parallelism (multi-core)", "Not possible — OS maps all to one core", "True parallelism across cores"],
                ["Examples", "Green threads (early Java, Go goroutines)", "Linux tasks, Windows threads"],
              ]}
            />
          </Sub>

          <Sub id="thread-scheduling-models" title="Thread Scheduling Models">
            <P>
              Thread libraries map user threads to kernel threads using one of
              three models:
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Many-to-One (M:1)",
                  def: "All user threads map to a single kernel thread. Simple, but no true parallelism and one blocking call blocks everything. Used by early Java green threads.",
                  color: "amber",
                },
                {
                  term: "One-to-One (1:1)",
                  def: "Each user thread maps to a dedicated kernel thread. True parallelism and independent blocking. Used by Linux (pthreads), Windows. Most common today.",
                  color: "teal",
                },
                {
                  term: "Many-to-Many (M:N)",
                  def: "Many user threads multiplex onto many (fewer) kernel threads. Best of both worlds in theory — complex in practice. Used by Go's goroutine scheduler.",
                  color: "blue",
                },
              ]}
            />
          </Sub>

          <Sub id="thread-priority" title="Thread Priority and Execution">
            <P>
              Within a process, threads can have different priorities. The OS
              scheduler considers thread priority when choosing which thread
              (across all processes) to run next.
            </P>
            <Steps
              items={[
                {
                  title: "Process-Contention Scope (PCS)",
                  desc: "The thread library schedules user threads onto the available kernel threads within a single process. Threads compete only within their process.",
                },
                {
                  title: "System-Contention Scope (SCS)",
                  desc: "Kernel threads compete globally with all other kernel threads across all processes. This is what the OS scheduler actually manages.",
                },
                {
                  title: "Priority inheritance",
                  desc: "If a high-priority thread waits for a mutex held by a low-priority thread, the low-priority thread temporarily inherits the high priority to prevent priority inversion.",
                },
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            8. Multiprocessor Scheduling
        ══════════════════════════════════════════════════════════════ */}
        <Section id="multiprocessor-scheduling" title="Multiprocessor Scheduling">
          <P>
            With multiple CPU cores, scheduling becomes significantly more
            complex. Now we must decide not just{" "}
            <em>when</em> a process runs but{" "}
            <em>which core</em> it runs on.
          </P>

          <Sub id="symmetric-vs-asymmetric" title="Symmetric vs Asymmetric Multiprocessing">
            <CompareTable
              headers={["Property", "Asymmetric (AMP)", "Symmetric (SMP)"]}
              rows={[
                ["Who schedules?", "One designated master CPU handles all scheduling", "Each CPU schedules itself from a shared queue"],
                ["Complexity", "Simple — only master accesses kernel data structures", "Complex — requires locks on shared ready queue"],
                ["Bottleneck", "Master CPU becomes a bottleneck", "No single bottleneck"],
                ["Scalability", "Poor — master limits throughput", "Good — scales with core count"],
                ["Used today?", "Embedded systems, older designs", "All modern desktops, servers (Linux, Windows)"],
              ]}
            />
            <Note>
              Almost all modern general-purpose systems (Intel Core, AMD Ryzen,
              Apple Silicon) use SMP. Each core has its own run queue in
              Linux's CFS, with periodic load-balancing between queues.
            </Note>
          </Sub>

          <Sub id="load-balancing" title="Load Balancing">
            <P>
              In SMP, one CPU might be overloaded while another sits idle. Load
              balancing migrates processes between CPU run queues to keep all
              cores equally busy.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Push migration",
                  def: "A dedicated task periodically checks if any CPU is overloaded and pushes processes to less-loaded CPUs. Linux runs this every 200ms.",
                  color: "blue",
                },
                {
                  term: "Pull migration",
                  def: "An idle CPU pulls a process from a busy CPU's run queue. Linux does this immediately when a CPU becomes idle.",
                  color: "teal",
                },
                {
                  term: "NUMA awareness",
                  def: "On NUMA (Non-Uniform Memory Access) systems, migrating a process away from the memory bank its data lives in is expensive. Schedulers try to keep processes on their preferred NUMA node.",
                  color: "purple",
                },
              ]}
            />
          </Sub>

          <Sub id="processor-affinity" title="Processor Affinity">
            <P>
              <strong className="text-foreground font-semibold">Processor affinity</strong>{" "}
              means keeping a process on the same CPU core across context
              switches. This is desirable because the CPU's caches (L1, L2)
              will still contain the process's data — migrating to another CPU
              wastes those warm caches.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Soft affinity",
                  def: "The OS tries to keep a process on the same CPU but may migrate it if load balancing demands it. Default in Linux.",
                  color: "teal",
                },
                {
                  term: "Hard affinity",
                  def: "The process is pinned to a specific CPU or set of CPUs. It will never migrate. Set via taskset (Linux) or SetThreadAffinityMask (Windows).",
                  color: "blue",
                },
              ]}
            />
            <Note variant="tip" title="Real-world use">
              High-performance databases (PostgreSQL, MySQL), game servers, and
              network packet processors often use hard CPU affinity to guarantee
              cache locality and eliminate scheduling jitter.
            </Note>
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            9. Advanced Concepts
        ══════════════════════════════════════════════════════════════ */}
        <Section id="advanced-concepts" title="Advanced Concepts">

          <Sub id="starvation" title="Starvation">
            <P>
              <strong className="text-foreground font-semibold">Starvation</strong>{" "}
              occurs when a process waits indefinitely in the ready queue because
              higher-priority processes constantly preempt it. The process is
              never chosen by the scheduler despite being ready to run.
            </P>
            <Diagram label="Starvation scenario — priority scheduling">
              <pre className="whitespace-pre text-[12px]">{`Time →
  P_high (priority=1) ████████████████████████████████████████
  P_high2 (priority=1)   arrives periodically, keeps CPU busy
  P_low  (priority=10)                                     never runs

  P_low has been in the ready queue for 10 minutes.
  Every time the CPU is free, a high-priority process is ready.
  P_low never gets scheduled. → STARVATION`}</pre>
            </Diagram>
          </Sub>

          <Sub id="aging" title="Aging Technique">
            <P>
              Aging is the standard solution to starvation. The longer a process
              waits without getting CPU time, the{" "}
              <strong className="text-foreground font-semibold">
                higher its priority is gradually raised
              </strong>
              . Eventually, even the lowest-priority process will be promoted
              high enough to be selected.
            </P>
            <Diagram label="Aging in action">
              <pre className="whitespace-pre text-[12px]">{`Process P_low starts with priority 10 (lower = worse)

Wait time 0min   → priority = 10
Wait time 5min   → priority = 9   (aged up by 1)
Wait time 10min  → priority = 8
Wait time 15min  → priority = 7
...
Wait time 45min  → priority = 1   ← now matches highest priority
                                    → gets scheduled!

Linux implementation: SCHED_OTHER processes have their
"nice value" effectively increased when starved.`}</pre>
            </Diagram>
          </Sub>

          <Sub id="priority-inversion" title="Priority Inversion">
            <P>
              Priority inversion is a subtle bug where a{" "}
              <strong className="text-foreground font-semibold">high-priority task</strong>{" "}
              is blocked waiting for a resource held by a{" "}
              <strong className="text-foreground font-semibold">low-priority task</strong>,
              which itself cannot run because{" "}
              <strong className="text-foreground font-semibold">medium-priority tasks</strong>{" "}
              keep preempting it.
            </P>
            <Diagram label="Priority inversion timeline">
              <pre className="whitespace-pre text-[12px]">{`Priority:  H (high)   M (medium)   L (low)

L acquires mutex R
H needs mutex R → blocks (waiting for L)
M preempts L (M has higher priority than L!)
H is now blocked on L, which is blocked on M.
Effective priority of H = priority of M.

Time →
  L  ████│     │   preempted by M
  M       │█████│   runs freely
  H       │     │   blocked waiting for R (held by L)
           ← Priority Inversion Window →

Fix: Priority Inheritance — L temporarily runs at H's priority.`}</pre>
            </Diagram>
            <Note variant="warning" title="Mars Pathfinder (1997)">
              The Mars Pathfinder spacecraft experienced system resets caused
              by priority inversion between a low-priority meteorological data
              task (holding a shared bus mutex) and a high-priority
              information bus task. The fix (enabling priority inheritance in
              VxWorks) was uploaded to the rover while it was on Mars.
            </Note>
          </Sub>

          <Sub id="deadlines-and-latency" title="Deadlines and Latency">
            <P>
              Two related timing constraints appear frequently in scheduling:
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Interrupt Latency",
                  def: "Time from when an interrupt arrives to when the OS starts executing the interrupt handler. Affected by whether the CPU is executing a non-interruptible instruction or kernel critical section.",
                  color: "blue",
                },
                {
                  term: "Dispatch Latency",
                  def: "Time for the scheduler to stop one process and start another. Dominated by context switch cost and any kernel locks that must be released first.",
                  color: "teal",
                },
                {
                  term: "Conflict Phase",
                  def: "Part of dispatch latency: the OS must wait for any kernel-mode process to give up the CPU (preempt kernel code) and release any kernel data structure locks.",
                  color: "amber",
                },
                {
                  term: "Dispatch Phase",
                  def: "The actual work of switching context: saving the old process state, loading the new process state, and returning to user mode.",
                  color: "purple",
                },
              ]}
            />
          </Sub>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            10. Real World & Practical Understanding
        ══════════════════════════════════════════════════════════════ */}
        <Section id="real-world" title="Real World & Practical Understanding">

          <Sub id="linux-scheduler" title="Process Scheduling in Linux (CFS)">
            <P>
              Linux uses the{" "}
              <strong className="text-foreground font-semibold">
                Completely Fair Scheduler (CFS)
              </strong>
              , introduced in Linux 2.6.23 (2007), for all normal
              (non-real-time) processes. CFS abandons the traditional
              queue-based approach entirely.
            </P>
            <ConceptGrid
              items={[
                {
                  term: "Virtual runtime (vruntime)",
                  def: "CFS tracks how much CPU time each process has consumed, weighted by its priority (nice value). Processes with lower vruntime get priority. This is the only scheduling metric.",
                  color: "blue",
                },
                {
                  term: "Red-black tree",
                  def: "All runnable processes are stored in a red-black tree ordered by vruntime. The leftmost node (minimum vruntime) is always the next process to run. O(log n) operations.",
                  color: "teal",
                },
                {
                  term: "No time quantum",
                  def: "CFS has no fixed quantum. Instead, it divides a target scheduling period (default 6ms for ≤8 processes) proportionally among all runnable processes by weight.",
                  color: "purple",
                },
                {
                  term: "Nice values",
                  def: "Linux nice values range from -20 (highest priority) to +19 (lowest). Each unit is a 10% CPU weight difference. Root required for negative nice values.",
                  color: "green",
                },
              ]}
            />
            <Note variant="tip" title="Useful Linux scheduling commands">
              <C>nice -n 10 ./my-program</C> — run with lower priority.{" "}
              <C>renice -n -5 -p 1234</C> — change priority of running process.{" "}
              <C>chrt -f 50 ./my-program</C> — run as real-time SCHED_FIFO at
              priority 50. <C>/proc/sched_debug</C> — dump the CFS scheduler
              state. <C>perf sched</C> — record and analyse scheduling events.
            </Note>
          </Sub>

          <Sub id="windows-scheduler" title="Process Scheduling in Windows">
            <P>
              Windows uses a{" "}
              <strong className="text-foreground font-semibold">
                32-level priority-based preemptive scheduler
              </strong>.
              Priorities 1–15 are dynamic (can be boosted by the OS);
              priorities 16–31 are real-time (fixed, cannot be boosted).
              Priority 0 is reserved for the zero-page thread.
            </P>
            <CompareTable
              headers={["Priority range", "Class", "Used for"]}
              rows={[
                ["1–15", "Dynamic (variable)", "Normal user processes. OS can temporarily boost priority for foreground windows, I/O completion, etc."],
                ["16–31", "Real-time (fixed)", "System-critical threads. Not preemptable by dynamic threads. Requires elevated privilege."],
                ["0", "Reserved", "Zero-page thread — clears free memory pages in background"],
              ]}
            />
            <Note>
              Windows boosts the priority of the foreground window's process
              by 1–2 levels so the UI feels responsive even when background
              tasks are running. This boost is removed when the window loses
              focus.
            </Note>
          </Sub>

          <Sub id="performance-tuning" title="Performance Tuning Techniques">
            <P>
              Understanding scheduling helps you make programs faster and
              systems more responsive through configuration.
            </P>
            <Steps
              items={[
                {
                  title: "Use nice values to deprioritise background work",
                  desc: "Long-running background jobs like backups, builds, or batch processing should run at nice +10 to +19 so they don't impact interactive responsiveness.",
                },
                {
                  title: "Pin latency-sensitive threads to isolated cores",
                  desc: "Use taskset or cpuset to dedicate specific CPU cores to critical threads. Combine with isolcpus= kernel boot parameter to prevent the OS from scheduling other work there.",
                },
                {
                  title: "Tune the scheduler for your workload class",
                  desc: "Write to /sys/kernel/debug/sched/latency_ns (Linux) to adjust the minimum scheduler period. Lower values improve responsiveness; higher values improve throughput for batch workloads.",
                },
                {
                  title: "Use SCHED_FIFO or SCHED_RR for real-time threads",
                  desc: "Audio servers (PipeWire, PulseAudio), game engines, and trading systems use real-time scheduling policies via pthread_setschedparam() to guarantee low latency.",
                },
                {
                  title: "Reduce context switches",
                  desc: "Excessive context switching wastes CPU time. Profile with perf stat -e context-switches. If context-switches per second > 100k, investigate — you may have too many threads or overly aggressive scheduling.",
                },
              ]}
            />
          </Sub>

          <Sub id="debugging-scheduling-issues" title="Debugging Scheduling Issues">
            <P>
              When a program is slower than expected or system responsiveness
              is poor, scheduling is often a contributing factor. These tools
              help diagnose what is happening.
            </P>
            <CompareTable
              headers={["Tool", "Platform", "What it shows"]}
              rows={[
                ["top / htop", "Linux", "Per-process CPU%, priority (NI), and scheduling class in real time"],
                ["perf sched record/report", "Linux", "Full scheduler trace — which process ran on which CPU, wait times, context switches"],
                ["perf stat -e sched:*", "Linux", "Count of context switches, migrations, and wakeup events for a process"],
                ["/proc/[pid]/schedstat", "Linux", "Per-process time on CPU, time waiting in run queue, number of timeslices"],
                ["ftrace (sched events)", "Linux", "Kernel-level function tracing — capture every context switch and wake-up event"],
                ["Process Monitor (ProcMon)", "Windows", "Detailed per-process scheduling events, CPU time, and context switches"],
                ["Windows Performance Analyzer (WPA)", "Windows", "Timeline view of CPU scheduling, thread activity, and context switches"],
                ["Instruments (Time Profiler)", "macOS", "Thread scheduling timeline, CPU sampling, wait analysis"],
              ]}
            />
            <Note variant="tip" title="The most common scheduling bug">
              The most frequent scheduling-related performance issue is{" "}
              <strong className="text-foreground font-semibold">lock contention</strong>:
              many threads fighting over the same mutex causes frequent blocking
              and wakeup cycles, generating thousands of unnecessary context
              switches per second. Profile with <C>perf lock</C> on Linux or{" "}
              <C>lock contention</C> in WPA on Windows.
            </Note>
          </Sub>
        </Section>

      </div>
    </main>
  );
}