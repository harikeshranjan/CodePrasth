import { Topic } from "@/types/topic";
import { GitBranch } from "lucide-react";

export const topics: Topic[] = [
  {
    slug: "git",
    color: "gray",
    icon: GitBranch,
    title: "Git",
    category: "Version control",
    description: "Snippets for common Git commands and workflows.",
  }
]