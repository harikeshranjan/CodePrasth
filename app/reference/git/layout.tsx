import ContentTable from "@/components/content-table";
import { gitReferenceContentTable } from "@/data/reference-git-content-table";

export default function GitReferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12 items-start">
        {/* Main content */}
        <div className="flex-1 min-w-0">{children}</div>

        {/* Sticky TOC — only visible on xl+ */}
        <ContentTable data={gitReferenceContentTable} />
      </div>
    </div>
  );
}