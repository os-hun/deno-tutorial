export const NotFound = (req: any) => req.respond({
  status: 404,
  body: 'not found.',
});