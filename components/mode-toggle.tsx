"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size={"icon"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
