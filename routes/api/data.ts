import { FreshContext } from "$fresh/server.ts";

export type PortfolioData = {
  id: string;
  name: string;
  deployedAt?: string;
  languages: string[];
  languagesIcons: string[];
  sourceCode: string;
  info: string;
  picture: string;
};

export const portfolioData: PortfolioData[] = [
  {
    id: Math?.random()?.toString(),
    name: "Pizzeria locale",
    deployedAt: "https://pizzerialocale.vercel.app/",
    languages: ["nextjs", "react", "typescript", "tailwind", "all"],
    languagesIcons: ["fab fa-js", "fab fa-react"],
    sourceCode: "https://github.com/swann-martin/pizzerialocale",
    info:
      "A simple website using Nextjs, typescript, tailwind, a postgresql database and drizzle orm. It was made because I really did not enjoy my local pizzeria website and I wanted to learn drizzle.",
    picture: "/pizzerialocaleOg.avif",
  },
  {
    id: Math?.random()?.toString(),
    name: "Wedding website",
    deployedAt: "https://mariage-orpin-delta.vercel.app/",
    languages: ["nextjs", "react", "typescript", "tailwind", "all"],
    languagesIcons: ["fab fa-js", "fab fa-react"],
    sourceCode: "https://github.com/swann-martin/mariage",
    info:
      "A simple website using Nextjs, typescript, tailwind. It was used to give informations about a wedding event.",
    picture: "/project12.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "Sauvons la friche Josaphat",
    languages: ["wordpress", "php", "all"],
    deployedAt: "https://www.sauvonslafrichejosaphat.be/",
    languagesIcons: ["fa-brands fa-wordpress", "fa-brands fa-elementor"],
    sourceCode: "",
    info:
      "I worked on the existing website of an organization which aims to prevent an urbanisation project to destroy a local animal sanctuary in Bruxelles. I was tasked with maintaining and updating the website informations and content. This project was using Wordpress with an old Twenty-Twenty template. I redesigned and remade most of the pages. I used Elementor since it was easier to use for an amateur and the site might be maintained by one in the future.",
    picture: "/project11.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "Sofas shop",
    deployedAt: "https://swannmartin-lesofa.deno.dev/",
    languages: ["vite", "react", "typescript", "tailwind", "all"],
    languagesIcons: ["fab fa-js", "fab fa-react"],
    sourceCode: "https://github.com/swann-martin/react-leSofa",
    info:
      "A simple website using React, typescript, tailwind, react-router and vite. It is a mock website for a fake company very interested in sofas.",
    picture: "/project4.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "Sharewash",
    languages: [
      "typescript",
      "expo",
      "react native",
      "zustand",
      "mobile",
      "all",
    ],
    languagesIcons: ["fab fa-js", "fab fa-react", "fab fa-css3-alt"],
    sourceCode: "https://github.com/swann-martin/sharewash",
    info:
      "This project was made to follow up on the WashAtHome end of course project wich was made. My aim was to recreate and adapt the app for mobile by using typescript, react native, expo and zustand.",
    picture: "/project10.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "Menuiserie Joire",
    languages: [
      "typescript",
      "react",
      "preact",
      "deno",
      "fresh",
      "tailwind",
      "all",
    ],
    deployedAt: "https://menuiserie-joire.deno.dev/",
    languagesIcons: ["fab fa-js", "fab fa-react"],
    sourceCode: "https://github.com/swann-martin/lanerie",
    info:
      "This project was made for a wood artisan shop. My aim was to create a simple SPA using the framework fresh with deno, typescript, preact and tailwind-css.",
    picture: "/project9.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "WashAtHome",
    languages: ["javascript", "react", "sass", "redux", "all"],
    languagesIcons: ["fab fa-js", "fab fa-react", "fab fa-sass"],
    sourceCode: "https://github.com/swann-martin/washathome",
    info:
      " This project was in group as an end of training project for my specialization in React.js with O'Clock School. It was made using Reactjs, Redux, Sass, react-leaflet, nodejs . ",
    picture: "/project7.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "Burgers Restaurant",
    deployedAt: "https://moms-burgers.vercel.app/",
    languages: ["react", "typescript", "scss", "all"],
    languagesIcons: ["fab fa-js", "fab fa-react", "fab fa-sass"],
    sourceCode: "https://github.com/swann-martin/moms-burgers",
    info:
      "Just a simple example of a burger shop build for fun using react with hooks for the cart. ",
    picture: "/project1.webp",
  },

  {
    id: Math?.random()?.toString(),
    name: "News App",
    deployedAt:
      "https://codeberg.org/swann-martin/flutter-news-app/src/branch/develop",
    languages: ["dart", "flutter", "newsapi", "mobile", "all"],
    languagesIcons: ["fa fa-code", "fa-regular fa-rectangle-terminal"],
    sourceCode:
      "https://codeberg.org/swann-martin/flutter-news-app/src/branch/develop",
    info:
      "This website was made in order to learn flutter and dart. It is an on going side project",
    picture: "/project2.webp",
  },
  {
    id: Math?.random()?.toString(),
    name: "Spotify Clone UI",
    deployedAt: "https://swannmartin-vue-spotify.deno.dev/",
    languages: ["javascript", "vue", "tailwind", "all"],
    languagesIcons: ["fab fa-js", "fab fa-css3-alt"],
    sourceCode: "https://github.com/swann-martin/vue-spotify-clone",
    info:
      "This project was made following a YouTube tutorial to learn Vue3, Pinia and tailwind.",
    picture: "/project8.webp",
  },

  {
    id: Math?.random()?.toString(),
    name: "jummmp créé ton cv",
    deployedAt: "",
    languages: ["javascript", "php", "css", "symfony", "all"],
    languagesIcons: [
      "fab fa-js",
      "fab fa-php",
      "fab fa-css3-alt",
      "fab fa-symfony",
    ],
    sourceCode: "https://github.com/swann-martin/archive_jummmp",
    info:
      "Web application delivered during the evaluation for the CNCP certification Web Integration Techniques & Web Development Techniques. Directed by Swann Martin, Michael Krysztofiak & Thomas Barnabé.",
    picture: "/project3.webp",
  },
  // {
  //   id: Math?.random()?.toString(),
  //   name: "AnimalSitter",
  //   deployedAt: "",
  //   languages: ["php", "css", "eQual", "all"],
  //   languagesIcons: ["fab fa-js", "fab fa-php", "fab fa-css3-alt"],
  //   sourceCode: "https://github.com/swann-martin/animalsitter",
  //   info: "Web app for a mock pet sitter. The aim was to learn eQual Framework.",
  //   picture: "",
  // },
  // {
  //   id: Math?.random()?.toString(),
  //   name: "Quiz App",
  //   languages: ["typescript", "css", "opendb-api", "all"],
  //   languagesIcons: ["fab fa-js", "fab fa-css3-alt"],
  //   sourceCode: "https://github.com/swann-martin/react-quiz",
  //   info: "This project was made following a YouTube tutorial to learn React.js and TypeScript and material ui. Trivia API was used to generate the questions.",
  //   picture: "./media/project5.webp"
  // },

  {
    id: Math?.random()?.toString(),
    name: "More projects on Github",
    languages: ["all"],
    languagesIcons: [],
    sourceCode: "https://github.com/swann-martin/",
    info: " More projects on Github",
    picture:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
];

export const experienceData = [
  {
    jobTitle: "Developer Full-Stack PHP - TypeScript",
    company: "OpenGraphy | BELGIUM",
    companyLink: "https://opengraphy.com/",
    date: "March 2024 - Present ",
    summary:
      "Optimizing application performance, developing new features and maintaining legacy code, leveraging a wide range of technologies like Vue, Laravel, Ajax to deliver projects",
    skills: "PHP, TypeScript, Mysql, Css, Wordpress, Docker, Laravel, AWS, Git",
    softSkills: "Problem Solving, Debuging, AWS",
  },
  {
    jobTitle: "Developer Full-Stack PHP - TypeScript",
    company: "YesBabylon | BELGIUM",
    companyLink: "https://yesbabylon.com/",
    date: "November - December 2023",
    summary: "Development of apps and ERP systems using Equal Framework",
    skills:
      "PHP, TypeScript, Mysql, Css, Wordpress, Docker, Equal and Symbiose Framework, Git",
    softSkills: "Problem Solving, Debuging, Docker",
  },
  {
    jobTitle: "Freelance React Developer",
    company: "Freelance Developer | BELGIUM",
    companyLink: "https://swannmartin.xyz/",
    date: "2023",
    summary: "Development of websites and apps in React, React Native",
    skills: "React, React Native, Supabase, Firebase, Git",
    softSkills: "Self-organized, Autonomous, Problem Solving,",
  },
  {
    jobTitle: "Developer",
    company: "Beecoming | FRANCE",
    companyLink: "https://beecoming.fr/",
    date: "December 2021 - November 2022",
    summary: "Hybrid & web development",
    skills:
      "React Native, Node, Reactjs, Angular, Ionic, git, Jira, Office 360",
    softSkills: "Self-organized, Autonomy, problem solving, team work",
  },
  {
    jobTitle: "Trainee Developer",
    company: "Webforce 3 & O'clock",
    companyLink: "https://www.wf3.fr//",
    date: "Decembre 2020  - Septembre 2021",
    summary: "Training in Web & Mobile Developement",
    skills: "React, Angular, Ionic, Php, Symfony, Mysql, Scss, Wordpress",
    softSkills: "Certification Techniques de développement Web RS1448",
    softSkills2: "Certification Techniques d'intégration RSRS1447",
  },
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const body = JSON.stringify(portfolioData);
  return new Response(body);
};
