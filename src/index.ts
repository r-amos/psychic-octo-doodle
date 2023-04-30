import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (request: Request, response: Response) =>
  response.send('Hello, World!'),
);
app.listen(8000, () => console.log('Open for business...'));
