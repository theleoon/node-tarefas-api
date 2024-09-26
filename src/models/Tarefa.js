import mongoose from "mongoose";
import { responsavelSchema } from "./Responsavel.js";

const tarefaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, 'O título é obrigatório.'],
        minlength: [5, 'O título deve ter pelo menos 5 caracteres.'],
        maxlength: [100, 'O título pode ter no máximo 100 caracteres.'] 
    },
    prioridade: { 
        type: String, 
        required: [true, 'A prioridade é obrigatória.'],
        enum: {
            values: ['Baixa', 'Média', 'Alta'],
            message: 'A prioridade deve ser "Baixa", "Média" ou "Alta".'
        }
    },
    data: { 
        type: Date,
        required: [true, 'A data é obrigatória.'],
        validate: {
            validator: function(value) {
                return value >= new Date();
            },
            message: 'A data deve ser igual ou posterior à data atual.'
        }
     },
    descricao: { type: String },
    responsaveis: [ responsavelSchema ]
  }, { versionKey: false });
  
const tarefa = mongoose.model("tarefas", tarefaSchema);

export { tarefa, tarefaSchema };