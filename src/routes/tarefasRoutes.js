import express from "express";
import TarefaController from "../controllers/tarefaController.js";

const routes = express.Router();

routes.get("/tarefas", TarefaController.listarTarefas);

export default routes;
