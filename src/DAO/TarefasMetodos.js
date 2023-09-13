import DatabaseMetodos from "./DatabaseMetodos.js"

const TAREFAS_TABELA = "Tarefas"

class TarefasMetodos extends DatabaseMetodos {
  static inserirTarefa(data) {
    this.inserir(TAREFAS_TABELA, data)
  }

  static buscarTodasTarefas() {
    this.inserir(USUARIOS_TABELA)
  }

}

export default TarefasMetodos