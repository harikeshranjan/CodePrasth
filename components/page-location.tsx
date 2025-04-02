"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import { Badge } from "./ui/badge";
import { usePathname } from "next/navigation";

export default function PageLocation() {
  const pathname = usePathname();
  const path = pathname.split("/").filter((page) => page !== "");

  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }


  return (
    <Breadcrumb className="hidden md:block md:fixed top-14 right-20 z-50 w-[calc(100vw-26rem)] mx-auto py-3 px-14 bg-white dark:bg-neutral-950">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <Badge variant={"secondary"} className="py-0.5 px-2">Home</Badge>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {path.map((page, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link href={`/${page}`}>
                  <Badge variant="secondary" className="py-0.5 px-2">{capitalize(page)}</Badge>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator key={page} />
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}