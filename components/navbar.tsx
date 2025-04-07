"use client";

import Link from "next/link";
import { navbarLinks } from "@/lib/datalists";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 h-14 w-full flex justify-between items-center md:px-16 border-b-1 border-dashed border-foreground/20 bg-background/90 backdrop-filter backdrop-blur-lg z-50">
      <div className="h-full flex items-center pl-4 border-l border-dashed border-foreground/20">
        <Link href={"/"} className="text-xl font-semibold tracking-wide">
          Code<span className="text-3xl">Prasth</span>
        </Link>
      </div>

      <div className="hidden md:flex h-full items-center">
        <ul className="flex space-x-5">
          {navbarLinks.map((link) => (
            <li
              key={link.id}
              className="relative cursor-pointer transition-colors text-foreground/80 hover:text-foreground/50 rounded-full border py-1.5 px-4 flex items-center justify-center"
            >
              <Link href={link.path}>
                <span>{link.title}</span>
              </Link>
              {link.isUnderConstruction && (
                <span className="absolute top-0 -right-3 translate-x-1 -translate-y-1 text-xs bg-red-500 text-white rounded-full px-1 py-0.5">
                  Soon
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>


      <div className="h-full flex items-center space-x-4 pr-4 border-r border-dashed border-foreground/20">
        <span className="text-sm text-foreground/50 font-mono items-center justify-center">
          v1.2.0
        </span>
        <Link href="https://github.com/harikeshranjan/CodePrasth" className="cursor-pointer p-0.5 rounded-md hover:bg-white/5 transition-colors flex items-center justify-center">
          {mounted && (
            <svg
              fill={resolvedTheme === "dark" ? "#fff" : "#000"}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
            </svg>
          )}
        </Link>
        <ModeToggle />

        <div className="h-full w-10 md:hidden flex items-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant={"outline"} className="">
                <Menu size={24} />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle className="text-3xl font-semibold text-center pt-4">
                Menu
              </DrawerTitle>
              <ul className="flex flex-col justify-center items-center space-y-4 text-lg py-8">
                {navbarLinks.map(link => (
                  <li key={link.id} className="w-2/3 text-center cursor-pointer transition-colors text-foreground/80 hover:text-foreground/50 rounded-full border py-1.5">
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
