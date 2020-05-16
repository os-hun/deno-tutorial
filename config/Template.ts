export const Template = (children?: any) => `
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
      ${children ? children : 'Not Content'}
    </body>
  </html>
`;