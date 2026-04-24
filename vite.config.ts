import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, UserConfig } from "vite";
import dts from "vite-plugin-dts";

const buildMode = process.env.BUILD_MODE ?? "plugin";

const pluginConfig: UserConfig = {
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /^@emotion\/(react|styled)/,
        /^@mui\/(material|system)/,
        "mirador",
        "react",
        "react/jsx-runtime",
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
};

const demoConfig: UserConfig = {
  build: {
    outDir: resolve(__dirname, "demo/dist"),
    rollupOptions: {
      input: {
        demo: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [react()],
  server: {
    open: true,
  },
};

export default defineConfig(buildMode !== "demo" ? pluginConfig : demoConfig);
