import { serve } from 'https://deno.land/std/http/server.ts';
// routes
import { routes, RoutesType } from './config/routes.ts';
// NotFound
import { NotFound } from './pages/NotFound.ts';

const s = serve({ port: 8000 });
console.log('Server is up on port 8000!!');

for await (const req of s) {
  routes.map(({ path, action }: RoutesType) => {
    if (req.url === path) {
      return action(req);
    }
  });
  if (!(routes.find(root => root.path === req.url))) {
    NotFound(req);
  }
}
