import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  server: { host: "0.0.0.0", port: 5000, allowedHosts: true },
  preview: { host: "0.0.0.0", port: 4173 },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  build: {
    rollupOptions: {
      output: {
        manualChunks: { vendor: ["react", "react-dom", "react-router-dom"] },
      },
    },
  },
});
