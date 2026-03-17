import { LearnTopic } from "@/types/topic";
import { Calculator, MemoryStick, MonitorCog, Network, Timer } from "lucide-react";

export const topics: LearnTopic[] = [
  {
    slug: "#",
    color: "gray",
    icon: MonitorCog,
    title: "Operating System",
    category: "Software",
    description: "Learn about operating systems, their components, and how they manage hardware and software resources.",
    subtopics: [
      {
        slug: "memory-management",
        color: "gray",
        icon: MemoryStick,
        title: "Memory Management",
        description: "Understand how operating systems manage memory, including concepts like paging, segmentation, and virtual memory.",
      },
      {
        slug: "process-scheduling",
        color: "gray",
        icon: Timer,
        title: "Process Scheduling",
        description: "Learn about how operating systems schedule processes, including algorithms like round-robin, priority scheduling, and multilevel queues.",
      },
    ],
  },
  {
    slug: "#",
    color: "gray",
    icon: Network,
    title: "Networking",
    category: "Software",
    description: "Learn about computer networking, including protocols, architectures, and security.",
  },
  {
    slug: "#",
    color: "blue",
    icon: Calculator,
    title: "Quantum Physics",
    category: "Fundamental Science",
    description: "Explore the mathematical foundations and physical principles governing the universe at the smallest scales.",
  }
];