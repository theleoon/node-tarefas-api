import { tarefa } from "../models/Tarefa.js";

class TarefaController {

    static async listarTarefas (req, res) {
      try {
        const listaTarefas = await tarefa.find({});
        res.status(200).json(listaTarefas);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
      }
    };
}

export default TarefaController;