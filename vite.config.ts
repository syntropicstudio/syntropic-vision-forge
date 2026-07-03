// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig as defineViteConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isGitHubPages = process.env.BUILD_GITHUB_PAGES === "true";

// For GitHub Pages: plain Vite SPA build (no SSR, no nitro)
// For normal builds: Lovable's TanStack Start config with SSR + Cloudflare nitro
export default isGitHubPages
  ? defineViteConfig({
      base: "/syntropic-vision-forge/",
      plugins: [react(), tailwindcss(), tsconfigPaths()],
      build: { outDir: "dist" },
    })
  : defineLovableConfig({
      tanstackStart: {
        server: { entry: "server" },
      },
    });

