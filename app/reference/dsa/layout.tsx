import Sidebar from "@/components/sidebar"
import { dsaSidebarLinks } from "@/lib/datalists"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Sidebar sidebar={dsaSidebarLinks} />
      {children}
    </section>
  )
}