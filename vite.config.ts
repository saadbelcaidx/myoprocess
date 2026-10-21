import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

// Two entries: index.html is the homepage (plain HTML, no React); app.html mounts the React pages.
// Production sends these routes to app.html through vercel.json; the dev middleware below does the same.
const APP_ROUTES = new Set(['/private-help', '/opps', '/go-skool']);

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
          const cleanPath = url.endsWith('/') ? url.slice(0, -1) : url;
          if (APP_ROUTES.has(cleanPath)) { req.url = '/app.html'; return next(); }
          if (url === '/' || url.startsWith('/@') || url.startsWith('/src/') || url.startsWith('/node_modules')) return next();
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
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(process.cwd(), 'index.html'),
        app: path.resolve(process.cwd(), 'app.html'),
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
