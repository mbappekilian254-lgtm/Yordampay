import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  // In AI Studio Cloud Run containers, NGINX binds to port 8080 and reverse-proxies
  // all traffic to localhost:3000. The Node/Express app must always listen on port 3000.
  const PORT = process.env.PORT && process.env.PORT !== '8080' ? parseInt(process.env.PORT, 10) : 3000;
  const distPath = path.resolve(__dirname, 'dist');
  const hasDist = fs.existsSync(distPath);

  app.use(express.json());

  // Health check for Cloud Run and monitoring
  app.get('/api/health', (_req, res) => {
    res.status(200).json({
      status: 'ok',
      service: 'YordamPay',
      time: new Date().toISOString()
    });
  });

  if (process.env.NODE_ENV === 'production' || hasDist) {
    // Production mode: serve built assets
    app.use(express.static(distPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    // Development mode: mount Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[YordamPay] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[YordamPay] Server startup error:', err);
  process.exit(1);
});
