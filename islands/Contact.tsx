export default function Contact() {
  return (
    <section
      id="contact"
      class="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 relative overflow-hidden"
    >
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent">
      </div>
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/30 dark:bg-indigo-500/20 rounded-full blur-3xl">
        </div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 dark:bg-purple-500/10 rounded-full blur-3xl">
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
            Get In Touch
          </h2>
          <div class="h-1 w-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full my-6">
          </div>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div class="bg-white/80 dark:bg-gray-800/80 backdrop-filter backdrop-blur-md rounded-xl shadow-xl p-8 sm:p-10 transition-all duration-500 text-center border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800/50 group relative">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          </div>
          <div class="flex flex-col items-center justify-center space-y-8 relative z-10">
            <div class="text-gray-700 dark:text-gray-300 text-lg max-w-2xl leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's create something
              amazing together!
            </div>

            <a
              href="mailto:contact@swannmartin.xyz"
              class="group/btn relative inline-flex items-center px-7 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-md opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500">
              </span>
              <svg
                class="h-5 w-5 mr-3 animate-pulse-glow"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span class="relative z-10">Email Me</span>
            </a>
          </div>
        </div>

        <div class="mt-16 text-center relative">
          <p class="text-gray-600 dark:text-gray-400 text-lg mb-6">
            You can also find me on:
          </p>
          <div class="mt-6 flex justify-center space-x-8">
            <a
              href="https://github.com/swann-martin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/swann-martin/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:contact@swannmartin.xyz"
              class="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <span class="sr-only">Email</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent">
      </div>
    </section>
  );
}
