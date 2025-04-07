"use client";

import { ArrowRight, BookOpen, ChevronRight, CircleDot } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { Separator } from "./ui/separator";

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
          <Button variant={"outline"} className="md:hidden w-52 ml-6 mt-20 flex">
            <span className="text-foreground/80">Table of Contents</span>
            <ArrowRight size={20} className="text-foreground/80" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle className="text-3xl font-semibold text-center pt-4">
            Menu
          </DrawerTitle>
          <div className="flex flex-col space-y-6 text-lg py-8 px-10">
            {sidebar.map((section) => (
              <div key={section.id} className="space-y-3">
                <div className="flex items-center gap-2 px-2">
                  <BookOpen size={16} className="text-primary" />
                  <h3 className="font-medium text-foreground">
                    {section.heading}
                  </h3>
                </div>
                <Separator className="bg-foreground/10" />
                <ul className="flex flex-col space-y-1 pt-1">
                  {section.content.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className="relative flex items-center justify-between py-2 px-4 text-sm text-foreground/70 hover:text-foreground rounded-md transition-all hover:bg-primary/5 group"
                      >
                        <div className="flex items-center gap-2">
                          <CircleDot size={8} className="text-primary/60 group-hover:text-primary transition-colors" />
                          <span>{item.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.isUnderConstruction && (
                            <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-xs px-1.5 rounded-full">
                              Soon
                            </Badge>
                          )}
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <aside className="w-64 h-[calc(100vh-4rem)] md:block hidden fixed top-14 pb-10 left-16 z-50 border-r border-foreground/20 border-dashed overflow-y-auto ">
        <div className="flex items-center justify-center gap-2 px-5 pt-6 pb-4">
          <BookOpen size={18} className="text-primary" />
          <h2 className="text-lg font-medium text-foreground">
            Table of Contents
          </h2>
        </div>
        
        <Separator className="bg-foreground/10" />

        <div className="py-6 px-3 space-y-8">
          {sidebar.map((section) => (
            <div key={section.id} className="space-y-3">
              <div className="flex items-center gap-2 pl-2">
                <div className="w-1 h-6 bg-primary/60 rounded-full"></div>
                <h3 className="font-medium text-foreground tracking-wide text-sm">
                  {section.heading}
                </h3>
              </div>
              <ul className="flex flex-col space-y-1 ml-3">
                {section.content.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="relative flex items-center justify-between py-2 px-3 text-sm text-foreground/70 hover:text-foreground rounded-md transition-all hover:bg-primary/5 group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 group-hover:bg-primary transition-colors"></div>
                        <span>{item.title}</span>
                      </div>
                      {item.isUnderConstruction && (
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20 text-xs px-1.5 rounded-full">
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