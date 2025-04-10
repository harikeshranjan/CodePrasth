import Sidebar from "@/components/sidebar"
import { fastapiSidebarLinks } from "@/lib/datalists"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Sidebar sidebar={fastapiSidebarLinks} />
      {children}
    </section>
  )
}