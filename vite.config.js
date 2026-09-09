import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listens on all local IP addresses (localhost, 127.0.0.1, 0.0.0.0)
    port: 3000,
    open: true // Automatically opens default browser (Chrome) on npm run dev
  }
});
