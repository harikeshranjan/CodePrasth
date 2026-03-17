export const memoryManagementTopics = [
  {
    id: "introduction",
    heading: "Introduction to Memory Management",
    subheadings: [
      { id: "what-is-memory-management", heading: "What is Memory Management?" },
      { id: "why-memory-management-is-needed", heading: "Why Memory Management is Needed" },
      { id: "logical-vs-physical-memory", heading: "Logical vs Physical Memory" },
      { id: "address-binding", heading: "Address Binding Concepts" },
    ],
  },
  {
    id: "memory-allocation",
    heading: "Memory Allocation Techniques",
    subheadings: [
      { id: "contiguous-allocation", heading: "Contiguous Memory Allocation" },
      { id: "fixed-partitioning", heading: "Fixed Partitioning" },
      { id: "dynamic-partitioning", heading: "Dynamic Partitioning" },
      { id: "internal-external-fragmentation", heading: "Internal vs External Fragmentation" },
      { id: "compaction", heading: "Memory Compaction" },
    ],
  },
  {
    id: "paging",
    heading: "Paging",
    subheadings: [
      { id: "paging-concept", heading: "Concept of Paging" },
      { id: "page-table", heading: "Page Table Structure" },
      { id: "address-translation", heading: "Address Translation in Paging" },
      { id: "multi-level-paging", heading: "Multi-level Paging" },
      { id: "translation-lookaside-buffer", heading: "Translation Lookaside Buffer (TLB)" },
    ],
  },
  {
    id: "segmentation",
    heading: "Segmentation",
    subheadings: [
      { id: "segmentation-concept", heading: "Concept of Segmentation" },
      { id: "segment-table", heading: "Segment Table Structure" },
      { id: "address-translation-segmentation", heading: "Address Translation in Segmentation" },
      { id: "segmentation-vs-paging", heading: "Segmentation vs Paging" },
    ],
  },
  {
    id: "virtual-memory",
    heading: "Virtual Memory",
    subheadings: [
      { id: "virtual-memory-concept", heading: "Concept of Virtual Memory" },
      { id: "demand-paging", heading: "Demand Paging" },
      { id: "page-fault", heading: "Page Fault Handling" },
      { id: "copy-on-write", heading: "Copy-on-Write" },
      { id: "thrashing", heading: "Thrashing" },
    ],
  },
  {
    id: "page-replacement",
    heading: "Page Replacement Algorithms",
    subheadings: [
      { id: "fifo", heading: "FIFO (First In First Out)" },
      { id: "lru", heading: "LRU (Least Recently Used)" },
      { id: "optimal", heading: "Optimal Page Replacement" },
      { id: "clock-algorithm", heading: "Clock (Second Chance) Algorithm" },
      { id: "comparison-algorithms", heading: "Comparison of Algorithms" },
    ],
  },
  {
    id: "memory-management-hardware",
    heading: "Memory Management Hardware",
    subheadings: [
      { id: "mmu", heading: "Memory Management Unit (MMU)" },
      { id: "base-limit-register", heading: "Base and Limit Registers" },
      { id: "paging-hardware-support", heading: "Hardware Support for Paging" },
      { id: "cache-memory", heading: "Role of Cache Memory" },
    ],
  },
  {
    id: "advanced-concepts",
    heading: "Advanced Concepts",
    subheadings: [
      { id: "inverted-page-table", heading: "Inverted Page Table" },
      { id: "shared-memory", heading: "Shared Memory" },
      { id: "memory-protection", heading: "Memory Protection" },
      { id: "kernel-vs-user-space", heading: "Kernel Space vs User Space" },
    ],
  },
  {
    id: "real-world",
    heading: "Real World & Practical Understanding",
    subheadings: [
      { id: "linux-memory-management", heading: "Memory Management in Linux" },
      { id: "windows-memory-management", heading: "Memory Management in Windows" },
      { id: "performance-optimization", heading: "Performance Optimization Techniques" },
      { id: "debugging-memory-issues", heading: "Debugging Memory Issues" },
    ],
  },
] as const;