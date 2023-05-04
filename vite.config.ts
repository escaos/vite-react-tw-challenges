import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If your vite.config.js is in JavaScript, use `import path from 'path';` instead.
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
