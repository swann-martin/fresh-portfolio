import { useSignal } from "@preact/signals";
import type { PortfolioData } from "../routes/api/data.ts";
import { portfolioData } from "../routes/api/data.ts";
import Card from "./Card.tsx";

export default function Projects() {
  const selectedLanguage = useSignal("all");
  const filteredData = useSignal(portfolioData);
  const searchQuery = useSignal("");
  const isLoading = useSignal(false);

  // allow to filter the data by language when the user clicks on a button
  const filterData = (lang: string) => {
    isLoading.value = true;
    setTimeout(() => {
      filteredData.value = portfolioData.filter((item: PortfolioData) => {
        return item?.languages?.includes(lang);
      });
      isLoading.value = false;
    }, 300); // Add slight delay for animation
  };

  // Filter by search query
  const handleSearch = (e: Event) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    searchQuery.value = query;

    if (query.trim() === "") {
      if (selectedLanguage.value === "all") {
        filteredData.value = portfolioData;
      } else {
        filterData(selectedLanguage.value);
      }
      return;
    }

    isLoading.value = true;
    setTimeout(() => {
      filteredData.value = portfolioData.filter((item: PortfolioData) => {
        return (
          (selectedLanguage.value === "all" ||
            item?.languages?.includes(selectedLanguage.value)) &&
          (item.name.toLowerCase().includes(query) ||
            item.info.toLowerCase().includes(query))
        );
      });
      isLoading.value = false;
    }, 300);
  };

  // Extract all unique languages from portfolio data
  const allLanguages = Array.from(
    new Set(
      portfolioData.flatMap(
        (item) => item.languages?.filter((lang) => lang !== "all") || [],
      ),
    ),
  ).sort();

  // Always add "all" at the beginning
  allLanguages.unshift("all");

  return (
    <section id="projects" class="py-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent dark:from-transparent dark:via-indigo-900/5 dark:to-transparent pointer-events-none">
      </div>
      <div>
        <div class="text-center mb-10">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4 relative inline-block">
            My Projects
            <span class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-100 origin-left">
            </span>
          </h2>
          <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of work across different technologies and
            domains
          </p>
        </div>

        <div class="mb-8">
          <div class="max-w-md mx-auto">
            <label for="project-search" class="sr-only">Search projects</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="h-5 w-5 text-indigo-500 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                id="project-search"
                type="search"
                class="block w-full pl-10 pr-3 py-3 border-2 border-indigo-300/50 dark:border-indigo-600/30 rounded-full leading-5 bg-white/80 dark:bg-gray-700/90 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md"
                placeholder="Search projects..."
                value={searchQuery.value}
                onInput={handleSearch}
                aria-describedby="search-help"
                autocomplete="off"
              />
            </div>
            <div id="search-help" class="sr-only">
              Search through project names and descriptions
            </div>
          </div>
        </div>

        <div class="mb-8">
          <div class="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto" role="group" aria-label="Filter projects by technology">
            {allLanguages.map((lang) => (
              <button
                type="button"
                class={`text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  selectedLanguage.value === lang
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105 font-semibold"
                    : "bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:-translate-y-0.5 backdrop-blur-sm"
                }`}
                key={lang}
                onClick={() => {
                  selectedLanguage.value = lang;
                  searchQuery.value = "";
                  if (lang === "all") {
                    filteredData.value = portfolioData;
                  } else {
                    filterData(lang);
                  }
                }}
                aria-pressed={selectedLanguage.value === lang}
                aria-label={`Filter projects by ${lang === "all" ? "all technologies" : lang}`}
              >
                {lang === "all"
                  ? "All Projects"
                  : lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div class="py-6">
          {isLoading.value
            ? (
              <div class="flex justify-center items-center py-20">
                <div class="relative animate-spin rounded-full h-16 w-16">
                  <div class="absolute inset-0 rounded-full border-4 border-indigo-200 dark:border-indigo-900/30">
                  </div>
                  <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400">
                  </div>
                  <div class="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-400/60 dark:border-t-indigo-600/60 animate-ping">
                  </div>
                </div>
              </div>
            )
            : filteredData.value.length > 0
            ? (
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-flow-dense">
                {filteredData.value.map((
                  item: PortfolioData,
                  _index: number,
                ) => (
                  <div
                    key={item?.id}
                    class="flex flex-col h-[500px] transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <Card props={item} filterData={filterData} />
                  </div>
                ))}
              </div>
            )
            : (
              <div class="text-center py-20">
                <div class="flex flex-col items-center">
                  <svg
                    class="h-20 w-20 text-gray-400 dark:text-gray-500 mb-4 opacity-70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <p class="text-gray-600 dark:text-gray-400 text-xl mb-3">
                    No projects found matching your criteria.
                  </p>
                  <p class="text-gray-500 dark:text-gray-500 mb-6">
                    Try adjusting your search or filter settings
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      selectedLanguage.value = "all";
                      searchQuery.value = "";
                      filteredData.value = portfolioData;
                    }}
                    class="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
                  >
                    Show all projects
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
