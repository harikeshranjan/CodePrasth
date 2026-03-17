import ContentTable from "@/components/content-table";
import { seleniumJavaReferenceContentTable } from "@/data/reference-selenium-content-table";

export default function SeleniumReferenceLayout({
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
        <ContentTable data={seleniumJavaReferenceContentTable} />
      </div>
    </div>
  );
}