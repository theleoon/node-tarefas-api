import express from "express";
import TarefaController from "../controllers/tarefaController.js";

const routes = express.Router();

routes.get("/tarefas", TarefaController.listarTarefas);
routes.get("/tarefas/:id", TarefaController.listarTarefasPorId);
routes.get("/tarefas/:nome", TarefaController.listarTarefasPorNome);
routes.post("/tarefas", TarefaController.criaNovaTarefa);

export default routes;
