"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-darkBackground dark:bg-lightBackground hover:bg-darkBackground/80 dark:hover:bg-lightBackground/80 transition-colors animate-bounce"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all text-lightBackground dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all text-darkBackground dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
