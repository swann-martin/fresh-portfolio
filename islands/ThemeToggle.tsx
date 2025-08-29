import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";

const isDarkMode = signal(false);

export default function ThemeToggle() {
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      isDarkMode.value = true;
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      isDarkMode.value = false;
      document.documentElement.classList.remove("dark");
    } else {
      // Check system preference
      const prefersDark =
        globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;
      isDarkMode.value = prefersDark;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      class="fixed bottom-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      aria-label={isDarkMode.value
        ? "Switch to light mode"
        : "Switch to dark mode"}
    >
      {isDarkMode.value
        ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )
        : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
    </button>
  );
}
