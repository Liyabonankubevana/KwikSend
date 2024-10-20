import express from 'express';
import routes from './routes';

import fetch, { Headers, Request, Response } from 'node-fetch';

// Polyfill Fetch API components in Node.js environment
if (!(globalThis as any).fetch) {
  (globalThis as any).fetch = fetch;
  (globalThis as any).Headers = Headers;
  (globalThis as any).Request = Request;
  (globalThis as any).Response = Response;
}

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register API routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});