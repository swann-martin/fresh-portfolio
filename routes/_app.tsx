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
          content="Swann Martin will code your website in React, TypeScript, Next or Wordpress. He can also make hybrid mobile apps for ios and android using React Native. Author: Swann Martin, Category: Web Development"
        />
        <meta property="og:image" content="https://swannmartin.xyz/home.webp" />
        <meta property="og:image:width" content="1870" />
        <meta property="og:image:height" content="939" />
        <meta property="og:title" content="Swann Martin Developer" />
        <meta
          property="og:description"
          content="Swann Martin will code your website in React, TypeScript, Next or Wordpress. He can also make hybrid mobile apps in React Native"
        />
        <title>Swann Martin Developer</title>

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
