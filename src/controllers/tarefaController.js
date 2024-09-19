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

    static async buscaTarefaPorId (req, res) {
      try {
        const id = req.params.id;
        const encontrado = await tarefa.findById(id);
        res.status(200).json(encontrado);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
      }
    };

    static async buscaTarefaPorTitulo (req, res) {
      const titulo = req.query.titulo;
      try {
        const tarefas = await tarefa.find({ titulo: { $regex: titulo, $options: 'i' } });
        res.status(200).json(tarefas);
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na busca` });
      }
    };
}

export default TarefaController;