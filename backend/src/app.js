/* APP CONFIGURATION FILE */
import express from "express";
import routes from "./routes";
import cors from "cors";

require('dotenv/config');

import "./database";
class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.middlewares();
    this.routes();
    
  }

  middlewares() {
    this.server.use(express.json()); // Define que a aplicaçao pode ler JSON
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
