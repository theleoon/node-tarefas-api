import express from "express";
import AdminController from "../controllers/adminController.js";

const routes = express.Router();

routes.get("/admin", AdminController.painelDeAdmin);

export default routes;
