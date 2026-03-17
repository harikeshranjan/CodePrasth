import { Topic } from "@/types/topic";
import { Cloud, GitBranch, TestTubeDiagonal } from "lucide-react";

export const topics: Topic[] = [
  {
    slug: "reference/git",
    color: "gray",
    icon: GitBranch,
    title: "Git",
    category: "Version control",
    description: "Snippets for common Git commands and workflows.",
  },
  {
    slug: "reference/selenium",
    color: "green",
    icon: TestTubeDiagonal,
    title: "Selenium",
    category: "Testing",
    description: "Snippets for automating web browsers with Selenium in Java.",
  },
  {
    slug: "reference/aws",
    color: "blue",
    icon: Cloud,
    title: "AWS",
    category: "Cloud",
    description: "Snippets for working with Amazon Web Services (AWS).",
  }
]