"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";

interface ContentProps {
  id: string;
  title: string;
  path: string;
  isUnderConstruction: boolean;
}

interface SidebarProps {
  id: string;
  heading: string;
  content: ContentProps[];
}

export default function Sidebar({ sidebar }: { sidebar: SidebarProps[] }) {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild className="w-full">
          <Button variant={"outline"} className="md:hidden mt-20 flex">
            <span className="text-foreground/80">Table of Contents</span>
            <ArrowRight size={20} className="text-foreground/80" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle className="text-3xl font-semibold text-center pt-4">
            Menu
          </DrawerTitle>
          <div className="flex flex-col space-y-4 text-lg py-8 px-10">
            {sidebar.map((section) => (
              <div key={section.id}>
                <h3 className="flex items-center font-medium text-foreground/80 px-5">
                  {section.heading}
                  <ArrowRight size={14} className="mt-0.5 ml-2" />
                </h3>
                <ul className="flex flex-col text-sm text-foreground/80">
                  {section.content.map((item) => (
                    <li
                      key={item.id}
                      className={`hover:bg-foreground/10 rounded-md px-5`}
                    >
                      <Link
                        href={item.path}
                        className="relative flex justify-between py-2 text-sm text-foreground/80 rounded-md"
                      >
                        {item.title}
                        {item.isUnderConstruction && (
                          <Badge className="bg-red-500 text-white text-xs px-1.5 rounded-full">
                            Soon
                          </Badge>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <aside className="w-64 h-screen md:block hidden fixed top-14 left-16 z-50 border-r border-foreground/20 border-dashed overflow-y-auto">
        <h2 className="text-xl font-medium text-foreground/80 px-5 md:px-10 py-5 text-center underline decoration-foreground/80 underline-offset-5 decoration-1">
          Table of Contents
        </h2>

        <div className="py-3 px-5 space-y-4">
          {sidebar.map((section) => (
            <div key={section.id}>
              <h3 className="flex items-center font-medium text-foreground/80 px-5">
                {section.heading}
                <ArrowRight size={14} className="mt-0.5 ml-2" />
              </h3>
              <ul className="flex flex-col text-sm text-foreground/80">
                {section.content.map((item) => (
                  <li
                    key={item.id}
                    className={`hover:bg-foreground/10 rounded-md px-5`}
                  >
                    <Link
                      href={item.path}
                      className="relative flex justify-between py-2 text-sm text-foreground/80 rounded-md"
                    >
                      {item.title}
                      {item.isUnderConstruction && (
                        <Badge className="bg-red-500 text-white text-xs px-1.5 rounded-full">
                          Soon
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
