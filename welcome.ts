import { serve } from 'http/server.ts';

const s = serve({ port: 8000 });
console.log('http://localhost:8000');

for await (const req of s) {
  req.respond({
    status: 200,
    headers: new Headers({
      'Content-Type': 'text/html; charset=UTF-8'
    }),
    body: `
      <html>
        <head>
          <title>Deno tutorial</title>
          <style>
            html {margin: 0;padding: 0;}
            body {margin: 0;padding: 0;color: #333;}
            .__deno_box {padding: 10px;}
          </style>
        </head>
        <body>
          <div class="__deno_box">
            <h1>Hello World!!</h1>
            <h2>Welcome to Deno!!</h2>
            <p>URL: ${req.url}</p>
            <p>method: ${req.method}</p>
          </div>
        </body>
      </html>
    `,
  });
}
