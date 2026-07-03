// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig as defineViteConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const isGitHubPages = process.env.BUILD_GITHUB_PAGES === "true";

// Generates a minimal index.html at build time so no committed file is needed.
function spaHtmlPlugin(): Plugin {
  return {
    name: "spa-html",
    apply: "build",
    generateBundle(_, bundle) {
      const entry = Object.keys(bundle).find((k) => bundle[k].type === "chunk" && (bundle[k] as any).isEntry);
      const css = Object.keys(bundle).find((k) => k.endsWith(".css"));
      const base = "/syntropic-vision-forge/";
      const html = `<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SyntropicStudio — Digitální řešení na míru</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" />
    ${css ? `<link rel="stylesheet" href="${base}assets/${css}" />` : ""}
  </head>
  <body>
    <script type="module" src="${base}assets/${entry}"></script>
  </body>
</html>`;
      this.emitFile({ type: "asset", fileName: "index.html", source: html });
      this.emitFile({ type: "asset", fileName: "404.html", source: html });
      this.emitFile({ type: "asset", fileName: ".nojekyll", source: "" });
    },
  };
}

// For GitHub Pages: plain Vite SPA build (no SSR, no nitro)
// For normal builds: Lovable's TanStack Start config with SSR + Cloudflare nitro
export default isGitHubPages
  ? defineViteConfig({
      root: __dirname,
      base: "/syntropic-vision-forge/",
      plugins: [react(), tailwindcss(), tsconfigPaths(), spaHtmlPlugin()],
      build: {
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
          input: resolve(__dirname, "src/client.tsx"),
        },
      },
    })
  : defineLovableConfig({
      tanstackStart: {
        server: { entry: "server" },
      },
    });

