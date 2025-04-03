import Sidebar from "@/components/sidebar"
import { numpySidebarLinks } from "@/lib/datalists"
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Sidebar sidebar={numpySidebarLinks} />
      {children}
    </section>
  )
}