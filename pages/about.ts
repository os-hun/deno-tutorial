import { Template } from '../config/Template.ts';

export const About = (req: any) => req.respond({
  status: 200,
  body: Template(`
    <div class="__deno_box">
      <h1>About</h1>
      <p>URL: ${req.url}</p>
      <p>method: ${req.method}</p>
    </div>
  `),
});
