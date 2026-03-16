import { Topic } from "@/types/topic";
import { Calculator, MonitorCog, Network } from "lucide-react";

export const topics: Topic[] = [
  {
    slug: "os",
    color: "gray",
    icon: MonitorCog,
    title: "Operating System",
    category: "Software",
    description: "Learn about operating systems, their components, and how they manage hardware and software resources.",
  },
  {
    slug: "networking",
    color: "gray",
    icon: Network,
    title: "Networking",
    category: "Software",
    description: "Learn about computer networking, including protocols, architectures, and security.",
  },
  {
    slug: "quantum-physics",
    color: "blue",
    icon: Calculator,
    title: "Quantum Physics",
    category: "Fundamental Science",
    description: "Explore the mathematical foundations and physical principles governing the universe at the smallest scales.",
  }
];