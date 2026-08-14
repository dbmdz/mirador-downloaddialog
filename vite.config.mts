import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /^@emotion\/(react|styled)/,
        /^@mui\/(material|system)/,
        "mirador",
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom",
        "react-i18next",
      ],
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [
    react(),
    dts({ include: ["src"], exclude: "src/demo.ts", rollupTypes: true }),
  ],
  server: {
    open: true,
  },
});
