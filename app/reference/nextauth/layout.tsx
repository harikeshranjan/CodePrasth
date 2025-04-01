import Sidebar from "@/components/sidebar"
import { nextauthSidebarLinks } from "@/lib/datalists"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Sidebar sidebar={nextauthSidebarLinks} />
      {children}
    </section>
  )
}