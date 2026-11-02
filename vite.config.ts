import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    {
      name: "dev-html-rewrite",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/" || req.url === "/index.html") {
            req.url = "/index.dev.html";
          }
          next();
        });
      },
      closeBundle() {
        try {
          if (fs.existsSync("dist/index.dev.html")) {
            fs.copyFileSync("dist/index.dev.html", "dist/index.html");
            fs.copyFileSync("dist/index.dev.html", "index.html");
          } else if (fs.existsSync("dist/index.html")) {
            fs.copyFileSync("dist/index.html", "index.html");
          }
          if (fs.existsSync("dist/assets")) {
            fs.cpSync("dist/assets", "assets", { recursive: true });
          }
          if (fs.existsSync("public")) {
            fs.cpSync("public", "./", { recursive: true });
          }
          fs.writeFileSync(".nojekyll", "");
        } catch (e) {
          console.error("Error copying build outputs to root:", e);
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.dev.html"),
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
