import { serve } from 'https://deno.land/std/http/server.ts';
import { Template } from './Template.ts';

const s = serve({ port: 8000 });
console.log('http://localhost:8000');

const home = (req: any) => {
  return req.respond({
    status: 200,
    body: Template(`
      <div class="__deno_box">
        <h1>Hello World!!</h1>
        <h2>Welcome to Deno!!</h2>
        <p>URL: ${req.url}</p>
        <p>method: ${req.method}</p>
      </div>
    `),
  });
}

const about = (req: any) => {
  return req.respond({
    status: 200,
    body: Template(`
      <div class="__deno_box">
        <h1>About</h1>
        <p>URL: ${req.url}</p>
        <p>method: ${req.method}</p>
      </div>
    `),
  });
}

const not_found = (req: any) => {
  return req.respond({
    status: 404,
    body: 'not found.'
  });
}

for await (const req of s) {
  if (req.url === '/') {
    home(req);
  } 
  if (req.url === '/about') {
    about(req);
  }
  if (req.url !== '/' && req.url !== '/about') {
    not_found(req);
  }
}
