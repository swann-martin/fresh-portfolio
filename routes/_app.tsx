import { Head } from "$fresh/runtime.ts";
import type { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" type="image/svg+xml" href="./favicon.ico" />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Swann Martin - Full-Stack Developer specializing in React, TypeScript, Deno, and Fresh. Creating modern web applications with clean, efficient code."
        />
        <meta
          name="keywords"
          content="web developer, full-stack developer, React, TypeScript, Deno, Fresh, JavaScript, portfolio"
        />
        <meta name="author" content="Swann Martin" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Swann Martin - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Full-Stack Developer specializing in React, TypeScript, Deno, and Fresh. Creating modern web applications with clean, efficient code."
        />
        <meta property="og:image" content="/homephone.webp" />
        <meta property="og:image:width" content="1870" />
        <meta property="og:image:height" content="939" />
        <meta property="og:url" content="https://swannmartin.xyz" />
        <meta property="og:site_name" content="Swann Martin Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Swann Martin - Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Full-Stack Developer specializing in React, TypeScript, Deno, and Fresh."
        />
        <meta name="twitter:image" content="/homephone.webp" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Swann Martin",
            "jobTitle": "Full-Stack Developer",
            "url": "https://swannmartin.xyz",
            "sameAs": [
              "https://github.com/swann-martin",
              "https://www.linkedin.com/in/swann-martin/",
            ],
            "knowsAbout": [
              "React",
              "TypeScript",
              "Deno",
              "Fresh",
              "JavaScript",
              "Web Development",
              "Full-Stack Development",
            ],
          })}
        </script>

        <title>Swann Martin - Full-Stack Developer</title>

        <link rel="stylesheet" href="/styles.css" />
        <style>
          {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes pulse-glow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
          }

          .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
        `}
        </style>
        {/* Theme initialization script */}
        <script src="/js/theme-init.js"></script>
      </Head>
      <body class="bg-white dark:bg-gray-800 transition-colors duration-300">
        <Component />
      </body>
    </>
  );
}
