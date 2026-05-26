import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Intercepts all requests starting with /api
      '/api': {
        target: 'https://web-production-8d219.up.railway.app/',
        changeOrigin: true,
        // Removes '/api' from the path before forwarding to FastAPI
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});