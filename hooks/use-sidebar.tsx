"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext({
  isSidebarOpen: false,
  setIsSidebarOpen: (value: boolean) => {},
  isDesktop: false,
  toggleSidebar: () => {},
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // Default to false for mobile
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setIsSidebarOpen(desktop); // Open sidebar only on desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, isDesktop, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};