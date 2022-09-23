import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  base: "/",
  mode: "development",
  publicDir: "public",
  plugins: [react()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  logLevel: "info",
  clearScreen: true,
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
    https: false,
    open: true,
    hmr: true,
    cors: true,
    force: true,
    base: "/dist"
  },
  build: {
    target: "modules",
    outDir: "dist",
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
    manifest: true,
    minify: "terser",
    terserOptions: {
      compress: true,
      ecma: 2015,
      ie8: true,
      safari10: true
    },
  }
})