import "dotenv/config";
import app from "./src/app.js";
import Tarefa from "./src/models/Tarefa.js";
import { prioridadeEValida, campoEstaVazio } from "./src/models/ValidacaoTarefa.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor em execução!");
  console.log("host: localhost:" + PORT);
  testaCodigoImplementado();
});

function validarPrioridade(campoPrioridade){
  // Baixa, Média ou Alta.
  const prioridadesValidas = ["Baixa", "Média", "Alta", "Urgente"]
  return prioridadesValidas.includes(campoPrioridade);
}

function validarCampoVazio(campoTexto){
  return campoTexto.trim() === "";
}

function testaCodigoImplementado(){

  const responsaveis = [
    { nome: "Fernando" },
    { nome: "Isabela" }
  ]

  const tarefa = new Tarefa(
    "Criar acesso do novo desenvolvedor",
    "Urgente",
    "10/10/2024",
    "     ",
    responsaveis
  );

  tarefa.adicionarResponsavel("Ricardo");
  console.log(tarefa);

  console.log("Prioridade válida? " + validarPrioridade("Urgente"));
  console.log("O campo está vazio? " + validarCampoVazio("          "));
  campoEstaVazio();
  prioridadeEValida();
}

