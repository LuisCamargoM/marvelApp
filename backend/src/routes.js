/* ROUTES CONFIGURATION FILE */
import { Router } from "express";

/* CONTROLLERS */
import UserController from "./app/controllers/UserController";
// import CartController from "./app/controllers/CartController";
import SessionController from "./app/controllers/SessionController";

/* MIDDLEWARES */
import authStateData from "./app/middlewares/authStateData";

/* ROUTES*/
const routes = new Router();

// routes.get("/cart", authStateData, CartController.show);
// routes.post("/cart", authStateData, CartController.store);

routes.post("/login", SessionController.store);

routes.get("/users", UserController.show);
routes.post("/users", UserController.store);

export default routes;