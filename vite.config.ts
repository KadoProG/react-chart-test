import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  base: "/react-chart-test/",
  build: {
    rollupOptions: {
      // パッケージサイズ取得の場合は個々を有効にして検証する
      // output: {
      //   manualChunks: (id) => {
      //     if (id.includes("recharts")) {
      //       return "recharts";
      //     }
      //     if (id.includes("node_modules")) {
      //       return "vendor";
      //     }
      //   },
      // },
    },
  },
});
