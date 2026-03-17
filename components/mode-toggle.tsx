'use client'

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"

function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-lg border border-border p-0.5 cursor-pointer transition-colors duration-200 hover:bg-accent"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  )
}

export default ModeToggle