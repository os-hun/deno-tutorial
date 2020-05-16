import { Template } from '../Template.ts';

export const Home = (req: any) => req.respond({
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