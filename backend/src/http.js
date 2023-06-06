const express = require("express");
const app = express();
const cors = require("cors");

import http from "http";
import { Server } from "socket.io";
import routes from "./routes/router";

app.use(cors());

app.use(express.json());

app.use(routes);

const server = http.createServer(app);