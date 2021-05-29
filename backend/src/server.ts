import express from 'express';

import "./database";

import { routes } from './routes'

const app = express();

app.use(express.json())

app.use(routes)

app.get('/', (request, response) => {
  response.json("Welcome to the 4Devs API")
});

app.listen(3333, () => console.log("Server is running 🚀️"))
