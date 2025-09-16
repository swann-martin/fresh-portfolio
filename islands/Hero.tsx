import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function Hero() {
  const typedText = useSignal("");
  const isDeleting = useSignal(false);
  const loopNum = useSignal(0);
  const typingSpeed = useSignal(150);

  const phrases = [
    "Web Developer",
    "Full Stack Engineer",
    "Problem Solver",
    "Creative Thinker",
    "Code Artist",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum.value % phrases.length;
      const fullText = phrases[i];

      typedText.value = isDeleting.value
        ? fullText.substring(0, typedText.value.length - 1)
        : fullText.substring(0, typedText.value.length + 1);

      typingSpeed.value = isDeleting.value ? 80 : 150;

      if (!isDeleting.value && typedText.value === fullText) {
        setTimeout(() => (isDeleting.value = true), 1000);
      } else if (isDeleting.value && typedText.value === "") {
        isDeleting.value = false;
        loopNum.value = loopNum.value + 1;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed.value);
    return () => clearTimeout(timer);
  }, [typedText.value, isDeleting.value, loopNum.value, typingSpeed.value]);

  return (
    <section id="about" aria-labelledby="hero-heading">
      <div class="mx-auto max-w-screen-xl py-12 sm:py-16 lg:py-20 dark:text-white relative z-10">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-[400px] shadow-2xl transform transition-all hover:scale-[1.03] duration-500 group">
            <div class="absolute inset-0 bg-indigo-600/10 dark:bg-indigo-500/20 group-hover:bg-indigo-600/5 dark:group-hover:bg-indigo-500/10 transition-colors duration-300 z-10">
            </div>
            <img
              alt="Professional headshot of Swann Martin, a web developer"
              src="swann.jpg"
              loading="eager"
              class="absolute inset-0 h-full w-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            </div>
          </div>

          <div class="lg:py-24 flex flex-col items-center lg:items-start relative z-10">
            <div class="flex items-center mb-8 relative">
              <div class="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-xl" aria-hidden="true">
              </div>
              <img
                class="h-16 w-16 lg:h-20 lg:w-20 mr-4 animate-float"
                src="/logo.svg"
                width="128"
                height="128"
                alt="Swann's Logo - stylized 'S' in a diamond shape"
                style="animation: float 6s ease-in-out infinite"
              />
              <div class="flex flex-col">
                <h1 id="hero-heading" class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Swann Martin
                </h1>
                <div class="h-8 flex items-center" aria-live="polite" aria-atomic="true">
                  <span class="text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-200">
                    I am a{" "}
                    <span class="text-indigo-600 dark:text-indigo-400 font-semibold" aria-label={`Currently showing: ${typedText.value}`}>
                      {typedText.value}
                    </span>
                    <span class="animate-pulse" aria-hidden="true">|</span>
                  </span>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-bold sm:text-4xl mb-6 text-center lg:text-left bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Turning Ideas into Digital Reality
            </h2>

            <p class="mt-4 text-gray-700 dark:text-gray-200 text-lg leading-relaxed text-center lg:text-left backdrop-blur-sm relative">
              <span class="absolute -left-4 top-0 w-1 h-full bg-indigo-500 opacity-70" aria-hidden="true">
              </span>
              As a passionate full-stack developer, I specialize in creating modern web applications
              using cutting-edge technologies. From React and TypeScript to Deno and Fresh, I bring
              ideas to life with clean, efficient, and scalable code.
            </p>

            <div class="mt-10 flex flex-wrap gap-4">
              <a
                href="https://swannmartin.xyz"
                class="inline-block rounded-full bg-indigo-600 px-10 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Visit my main website"
              >
                View My Work
              </a>
              <a
                href="#contact"
                class="inline-block rounded-full bg-white/10 backdrop-blur-sm dark:bg-gray-800/70 px-10 py-4 text-base font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600/60 dark:border-indigo-400/60 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                aria-label="Scroll to contact section"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
