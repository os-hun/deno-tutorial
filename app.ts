import { serve } from 'https://deno.land/std/http/server.ts';
// pages
import { Home } from './pages/home.ts';
import { About } from './pages/about.ts';

const s = serve({ port: 8000 });
console.log('http://localhost:8000');

const not_found = (req: any) => {
  return req.respond({
    status: 404,
    body: 'not found.'
  });
}

for await (const req of s) {
  if (req.url === '/') {
    Home(req);
  } 
  if (req.url === '/about') {
    About(req);
  }
  if (req.url !== '/' && req.url !== '/about') {
    not_found(req);
  }
}
