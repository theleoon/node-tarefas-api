import express from "express";
import TarefaController from "../controllers/tarefaController.js";

const routes = express.Router();

routes.get("/tarefas", TarefaController.listarTarefas);
routes.get("/tarefas/busca", TarefaController.buscaTarefaPorTitulo);
routes.get("/tarefas/paginado", TarefaController.buscarTarefasPaginadas);
routes.get("/tarefas/:id", TarefaController.buscaTarefaPorId);
routes.post("/tarefas", TarefaController.novaTarefa)

export default routes;
