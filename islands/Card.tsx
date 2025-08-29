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
        <img
          alt={props?.name}
          src={props?.picture}
          class={`h-56 w-full object-cover transition-all duration-500 ${
            isHovered.value ? "scale-105" : ""
          }`}
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
              class="px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105"
            >
              View Live
            </a>
          </div>
        )}
      </div>

      <div class="p-5 flex-1 flex flex-col z-10 relative">
        <div class="flex justify-between items-start mb-2">
          <a href={props?.deployedAt ?? props?.sourceCode} class="group">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors drop-shadow-sm">
              {props?.name}
            </h3>
          </a>
          {props?.sourceCode && (
            <a
              href={props.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              title="View Source Code"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
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
            <div class="mt-4 flex flex-wrap gap-1">
              {props.languages.map(
                (lang) =>
                  lang !== "all" && (
                    <span
                      title={`display only ${lang} projects`}
                      onClick={filterData ? () => filterData(lang) : undefined}
                      key={`${lang}-${props?.id}`}
                      class="whitespace-nowrap rounded-full inline-block px-2.5 py-1 text-xs font-medium text-indigo-800 bg-indigo-100/80 dark:bg-indigo-900/50 dark:text-indigo-200 mr-1.5 mb-1.5 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:cursor-pointer transition-all duration-300 hover:shadow-sm hover:shadow-indigo-300/30 dark:hover:shadow-indigo-500/30 backdrop-blur-sm hover:-translate-y-px"
                    >
                      {lang}
                    </span>
                  ),
              )}
            </div>
          )
          : null}
      </div>
    </article>
  );
}
