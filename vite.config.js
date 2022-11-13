import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  base:
    process.env.NODE_ENV === "production"
      ? "/<parallax_landing_page_vue>/"
      : "./",
});
