import 'reflect-metadata';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { createNestApp } from './src/backend/main';
import path from 'path';

async function bootstrap() {
  const server = express();
  const PORT = 3000;

  // Create NestJS app
  const nestApp = await createNestApp();
  // Initialize NestJS app but don't listen yet
  await nestApp.init();
  
  // Use NestJS as middleware for /api
  const nestHttpServer = nestApp.getHttpAdapter().getInstance();
  server.use('/api', nestHttpServer);

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    server.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    server.use(express.static(distPath));
    server.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

bootstrap();
