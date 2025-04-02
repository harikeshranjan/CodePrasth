import Sidebar from "@/components/sidebar"
import { vercelSidebarLinks } from "@/lib/datalists"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Sidebar sidebar={vercelSidebarLinks} />
      {children}
    </section>
  )
}