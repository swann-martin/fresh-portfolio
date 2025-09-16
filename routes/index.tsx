import { PageProps } from "$fresh/server.ts";
import Hero from "../islands/Hero.tsx";
import Navbar from "../islands/Navbar.tsx";
import Projects from "../islands/Projects.tsx";
import Experience from "../islands/Experience.tsx";
import Contact from "../islands/Contact.tsx";
import ThemeToggle from "../islands/ThemeToggle.tsx";
import ParticleBackground from "../islands/ParticleBackground.tsx";
import ErrorBoundary from "../islands/ErrorBoundary.tsx";

export default function Home(_props: PageProps) {
  return (
    <div class="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen relative">
      <ParticleBackground />
      <ThemeToggle />
      <Navbar />
      <div class="max-w-screen-xl mx-auto flex flex-col">
        <div class="w-full px-4">
          <Hero />
        </div>

        <div class="w-full px-4">
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
        </div>

        <div class="w-full">
          <ErrorBoundary>
            <Experience />
          </ErrorBoundary>
        </div>

        <div class="w-full">
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        </div>
      </div>

      <footer class="py-6 text-center text-gray-500 dark:text-gray-400 text-sm mt-8 border-t border-gray-100 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Swann Martin. All rights reserved.</p>
      </footer>
    </div>
  );
}
