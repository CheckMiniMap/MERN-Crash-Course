import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1', // force IPv4
    port: 3000,        // try a different port
    strictPort: false, // allow Vite to choose another free port if 3000 is taken
  },
  plugins: [react(), tsconfigPaths()],
})