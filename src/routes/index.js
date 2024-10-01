import express from "express";
import tarefas from "./tarefasRoutes.js";
import admin from "./adminRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Alura LevelUp"));

  app.use(express.json(), tarefas, admin);
};

export default routes;
