import ContentTable from "@/components/content-table";
import { processSchedulingTopics } from "@/data/learn-process-scheduling-contemt-table";

export default function ProcessSchedulingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-24 flex gap-12 items-start">
        {/* Main content */}
        <div className="flex-1 min-w-0">{children}</div>

        {/* Sticky TOC — only visible on xl+ */}
        <ContentTable data={processSchedulingTopics} />
      </div>
    </div>
  );
}