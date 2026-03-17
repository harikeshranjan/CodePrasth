export const processSchedulingTopics = [
  {
    id: "introduction",
    heading: "Introduction to Process Scheduling",
    subheadings: [
      { id: "what-is-process-scheduling", heading: "What is Process Scheduling?" },
      { id: "why-scheduling-is-needed", heading: "Why Process Scheduling is Needed" },
      { id: "process-states", heading: "Process States and State Transitions" },
      { id: "types-of-schedulers", heading: "Types of Schedulers (Long, Short, Medium)" },
    ],
  },
  {
    id: "cpu-scheduling-basics",
    heading: "CPU Scheduling Basics",
    subheadings: [
      { id: "cpu-io-burst-cycle", heading: "CPU-I/O Burst Cycle" },
      { id: "preemptive-vs-non-preemptive", heading: "Preemptive vs Non-Preemptive Scheduling" },
      { id: "dispatcher", heading: "Role of Dispatcher" },
      { id: "context-switch", heading: "Context Switching" },
    ],
  },
  {
    id: "scheduling-criteria",
    heading: "Scheduling Criteria",
    subheadings: [
      { id: "cpu-utilization", heading: "CPU Utilization" },
      { id: "throughput", heading: "Throughput" },
      { id: "turnaround-time", heading: "Turnaround Time" },
      { id: "waiting-time", heading: "Waiting Time" },
      { id: "response-time", heading: "Response Time" },
      { id: "fairness", heading: "Fairness in Scheduling" },
    ],
  },
  {
    id: "scheduling-algorithms",
    heading: "Scheduling Algorithms",
    subheadings: [
      { id: "fcfs", heading: "First Come First Serve (FCFS)" },
      { id: "sjf", heading: "Shortest Job First (SJF)" },
      { id: "srtf", heading: "Shortest Remaining Time First (SRTF)" },
      { id: "priority-scheduling", heading: "Priority Scheduling" },
      { id: "round-robin", heading: "Round Robin (RR)" },
      { id: "multilevel-queue", heading: "Multilevel Queue Scheduling" },
      { id: "multilevel-feedback-queue", heading: "Multilevel Feedback Queue" },
    ],
  },
  {
    id: "algorithm-analysis",
    heading: "Analysis of Scheduling Algorithms",
    subheadings: [
      { id: "gantt-charts", heading: "Gantt Charts" },
      { id: "average-waiting-time", heading: "Calculating Average Waiting Time" },
      { id: "average-turnaround-time", heading: "Calculating Turnaround Time" },
      { id: "comparison-of-algorithms", heading: "Comparison of Scheduling Algorithms" },
    ],
  },
  {
    id: "real-time-scheduling",
    heading: "Real-Time Scheduling",
    subheadings: [
      { id: "real-time-systems", heading: "Real-Time Systems Overview" },
      { id: "hard-vs-soft-real-time", heading: "Hard vs Soft Real-Time Systems" },
      { id: "rate-monotonic", heading: "Rate Monotonic Scheduling (RMS)" },
      { id: "earliest-deadline-first", heading: "Earliest Deadline First (EDF)" },
    ],
  },
  {
    id: "thread-scheduling",
    heading: "Thread Scheduling",
    subheadings: [
      { id: "user-vs-kernel-threads", heading: "User vs Kernel Threads" },
      { id: "thread-scheduling-models", heading: "Thread Scheduling Models" },
      { id: "thread-priority", heading: "Thread Priority and Execution" },
    ],
  },
  {
    id: "multiprocessor-scheduling",
    heading: "Multiprocessor Scheduling",
    subheadings: [
      { id: "symmetric-vs-asymmetric", heading: "Symmetric vs Asymmetric Multiprocessing" },
      { id: "load-balancing", heading: "Load Balancing" },
      { id: "processor-affinity", heading: "Processor Affinity" },
    ],
  },
  {
    id: "advanced-concepts",
    heading: "Advanced Concepts",
    subheadings: [
      { id: "starvation", heading: "Starvation" },
      { id: "aging", heading: "Aging Technique" },
      { id: "priority-inversion", heading: "Priority Inversion" },
      { id: "deadlines-and-latency", heading: "Deadlines and Latency" },
    ],
  },
  {
    id: "real-world",
    heading: "Real World & Practical Understanding",
    subheadings: [
      { id: "linux-scheduler", heading: "Process Scheduling in Linux (CFS)" },
      { id: "windows-scheduler", heading: "Process Scheduling in Windows" },
      { id: "performance-tuning", heading: "Performance Tuning Techniques" },
      { id: "debugging-scheduling-issues", heading: "Debugging Scheduling Issues" },
    ],
  },
] as const;