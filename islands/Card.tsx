import type { PortfolioData } from "../routes/api/data.ts";
import { useSignal } from "@preact/signals";

export default function Card({
  props,
  key,
  filterData,
}: {
  props: PortfolioData;
  key?: number | string;
  filterData?: (lang: string) => void;
}) {
  const isHovered = useSignal(false);
  const imageLoaded = useSignal(false);
  const imageError = useSignal(false);

  return (
    <article
      key={key}
      class="bg-white/90 dark:bg-gray-800/90 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700/50 flex flex-col h-full relative group"
      onMouseEnter={() => (isHovered.value = true)}
      onMouseLeave={() => (isHovered.value = false)}
    >
      <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500">
      </div>
      <div class="relative overflow-hidden h-56">
        {!imageLoaded.value && !imageError.value && (
          <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
            <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l5 4H7l5-4z"/>
            </svg>
          </div>
        )}
        {imageError.value && (
          <div class="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
              <p class="text-xs text-gray-500">Image unavailable</p>
            </div>
          </div>
        )}
        <img
          alt={`Screenshot of ${props?.name} project`}
          src={props?.picture}
          loading="lazy"
          class={`h-56 w-full object-cover transition-all duration-500 ${
            isHovered.value ? "scale-105" : ""
          } ${imageLoaded.value ? "opacity-100" : "opacity-0"}`}
          onLoad={() => (imageLoaded.value = true)}
          onError={() => (imageError.value = true)}
        />
        {props?.deployedAt && (
          <div
            class={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center pb-8 ${
              isHovered.value ? "opacity-100" : ""
            }`}
          >
            <a
              href={props.deployedAt}
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label={`View ${props?.name} live demo`}
            >
              View Live
            </a>
          </div>
        )}
      </div>

      <div class="p-5 flex-1 flex flex-col z-10 relative">
        <div class="flex justify-between items-start mb-2">
          <a
            href={props?.deployedAt ?? props?.sourceCode}
            class="group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
            aria-label={`Learn more about ${props?.name} project`}
          >
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors drop-shadow-sm">
              {props?.name}
            </h3>
          </a>
          {props?.sourceCode && (
            <a
              href={props.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              class="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded p-1"
              aria-label={`View ${props?.name} source code on GitHub`}
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>

        <p class="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-300 flex-grow">
          {props?.info}
        </p>

        {props?.languages && props.languages.length > 0
          ? (
            <div class="mt-4 flex flex-wrap gap-1" role="group" aria-label="Project technologies">
              {props.languages.map(
                (lang) =>
                  lang !== "all" && (
                    <button
                      type="button"
                      title={`Filter projects by ${lang}`}
                      onClick={filterData ? () => filterData(lang) : undefined}
                      key={`${lang}-${props?.id}`}
                      class="whitespace-nowrap rounded-full inline-block px-2.5 py-1 text-xs font-medium text-indigo-800 bg-indigo-100/80 dark:bg-indigo-900/50 dark:text-indigo-200 mr-1.5 mb-1.5 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-indigo-300/30 dark:hover:shadow-indigo-500/30 backdrop-blur-sm hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                      aria-label={`Filter by ${lang}`}
                    >
                      {lang}
                    </button>
                  ),
              )}
            </div>
          )
          : null}
      </div>
    </article>
  );
}
