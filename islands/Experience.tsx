import { useSignal } from "@preact/signals";
import { experienceData } from "../routes/api/data.ts";

export default function Experience() {
  const expandedJob = useSignal<string | null>(null);

  const toggleExpand = (jobTitle: string) => {
    if (expandedJob.value === jobTitle) {
      expandedJob.value = null;
    } else {
      expandedJob.value = jobTitle;
    }
  };

  return (
    <section id="experience" class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My journey in software development
          </p>
        </div>

        <div class="relative">
          {/* Timeline line */}
          <div class="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-500">
          </div>

          {experienceData.map((job, index) => (
            <div
              key={index}
              class={`relative mb-8 md:mb-0 ${
                index % 2 === 0
                  ? "md:text-right md:mr-auto md:ml-0 md:pr-16 md:pl-0"
                  : "md:text-left md:ml-auto md:mr-0 md:pl-16 md:pr-0"
              } max-w-full md:max-w-[45%] transition-all`}
            >
              {/* Timeline dot */}
              <div class="absolute left-5 md:left-auto md:right-0 w-3 h-3 rounded-full bg-indigo-600 transform translate-x-[0.5px] md:translate-x-[8px]">
              </div>

              <div
                onClick={() => toggleExpand(job.jobTitle)}
                class={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-all cursor-pointer ${
                  expandedJob.value === job.jobTitle
                    ? "border-indigo-700 dark:bg-gray-700"
                    : ""
                }`}
              >
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                  {job.jobTitle}
                </h3>
                <p class="text-sm text-indigo-600 dark:text-indigo-400">
                  {job.company}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {job.date}
                </p>

                {expandedJob.value === job.jobTitle && (
                  <div class="mt-4 text-sm text-gray-700 dark:text-gray-300 transition-all">
                    <p class="mb-3">{job.summary}</p>
                    <div class="mt-3">
                      <span class="font-medium block mb-1">Skills:</span>
                      <div class="flex flex-wrap gap-1">
                        {job.skills.split(", ").map((skill) => (
                          <span class="px-2 py-1 text-xs rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {job.softSkills && (
                      <div class="mt-3">
                        <span class="font-medium block mb-1">Soft Skills:</span>
                        <p>{job.softSkills}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
