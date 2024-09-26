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

    static async novaTarefa(req, res) {
      let novaTarefa = new tarefa(req.body);
      try {
        await novaTarefa.save();
        res.status(201).json(novaTarefa);
      } catch (error) {
        res.status(400).json({ message: 'Erro ao criar tarefa', detalhes: error.message });
      }
    };

    static async buscarTarefasPaginadas(req, res) {
      try {
          // Pegando os parâmetros de página e limite da query string ou definindo valores padrão
          let { page = 1, limit = 10 } = req.query;

          // Garantindo que page e limit sejam inteiros
          page = parseInt(page);
          limit = parseInt(limit);

          // Calculando o número de documentos a pular
          const skip = (page - 1) * limit;

          // Buscando as tarefas com paginação
          const tarefas = await tarefa.find()
              .skip(skip)
              .limit(limit)
              .exec();

          // Contando o total de tarefas para fornecer informações sobre paginação
          const totalTarefas = await tarefa.countDocuments();

          // Respondendo com as tarefas e informações de paginação
          res.json({
              page,
              limit,
              totalPages: Math.ceil(totalTarefas / limit),
              totalTarefas,
              tarefas,
          });
      } catch (error) {
        res.status(400).json({ message: 'Erro ao listar tarefas', detalhes: error.message });
      }
  };


}

export default TarefaController;