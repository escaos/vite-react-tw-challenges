import { defineConfig } from "vite-jest";

export default defineConfig({
  transform: {
    "^.+\\.tsx?$": "vite-jest",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
});
