import { JSX } from "preact";
import { useSignal } from "@preact/signals";

export default function Navbar(): JSX.Element {
  const isMenuOpen = useSignal(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return (
    <header class="w-full py-4 px-6 bg-transparent">
      <div class="flex justify-between items-center max-w-screen-lg mx-auto">
        {/* Logo */}
        <div class="flex items-center space-x-2">
          <img
            class="h-10 w-auto"
            src="/logo.svg"
            alt="Portfolio Logo"
            width="40"
            height="40"
          />
          <span class="font-bold text-xl text-gray-900 dark:text-white">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav class="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200">
          <a
            href="#about"
            class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#contact"
            class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          class="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen.value
              ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              )
              : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen.value && (
          <div class="md:hidden absolute top-16 right-0 left-0 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg transition-all duration-300 ease-in-out">
            <nav class="flex flex-col py-4 px-6 space-y-4 text-gray-700 dark:text-gray-200">
              <a
                href="#about"
                onClick={toggleMenu}
                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={toggleMenu}
                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
