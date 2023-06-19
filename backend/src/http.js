import express from 'express';
import cors from 'cors';
import routes from './router.js';

const app = express();

import http from 'http';

app.use(cors());

app.use(express.json());

app.use(routes);

const server = http.createServer(app);

export default server;
