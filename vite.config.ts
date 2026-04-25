import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-public-html-dirs',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url || req.method !== 'GET') return next();
          const url = req.url.split('?')[0];
          if (url === '/' || url.startsWith('/@') || url.startsWith('/src/') || url.startsWith('/node_modules')) return next();
          const cleanPath = url.endsWith('/') ? url.slice(0, -1) : url;
          if (path.extname(cleanPath)) return next();
          const candidate = path.join(process.cwd(), 'public', cleanPath, 'index.html');
          if (fs.existsSync(candidate)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            fs.createReadStream(candidate).pipe(res);
            return;
          }
          next();
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
