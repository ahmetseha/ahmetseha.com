import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToogle() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-10 h-10 p-3 rounded"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-white" />
        ) : (
          <Moon className="w-4 h-4 text-gray-800" />
        )}
      </button>
    </div>
  );
}
