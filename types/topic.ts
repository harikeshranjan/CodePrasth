import { ElementType } from "react";

export type Topic = {
  slug: string;
  color: string;
  icon: ElementType;
  title: string;
  category: string;
  description: string;
};

export interface LearnTopic extends Topic {
  subtopics?: Subtopic[];
  onClick?: () => void;
}

export interface Subtopic {
  slug: string;
  color: string;
  icon: React.ComponentType;
  title: string;
  description: string;
}