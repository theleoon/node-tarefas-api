import mongoose from "mongoose";
import responsavelSchema from "./Responsavel.js";


const tarefaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    prioridade: { type: String },
    data: { type: Date },
    descricao: { type: String },
    responsaveis: responsavelSchema
  }, { versionKey: false });
  
  const tarefa = mongoose.model("tarefas", tarefaSchema);


function validarPrioridade(campoPrioridade){
    const prioridadesValidas = ["Baixa", "Média", "Alta"]
    if(prioridadesValidas.includes(campoPrioridade)) return campoPrioridade
    return ""
}
  
function validarCampoVazio(campoTexto){
    if(campoTexto.trim() === "") return "";
    return campoTexto
}

export default Tarefa;