import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
    host: "localhost",
    port: 5000,
    strictPort: true,
  },
  plugins: [react(), tsconfigPaths()],
});












// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'
// import tsconfigPaths from "vite-tsconfig-paths"
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//       }
//     },
//     host: 'localhost', // '127.0.0.1' force IPv4
//     port: 5000,        // try a different port
//     strictPort: true, // false = allow Vite to choose another free port if 3000 is taken
//   },
//   plugins: [react(), tsconfigPaths(), tailwindcss()], 
// })