import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
  // Enable static file caching
  staticCache: {
    "/static/": "max-age=31536000", // Cache static files for 1 year
    "/favicon.ico": "max-age=86400", // Cache favicon for 1 day
  },
});
