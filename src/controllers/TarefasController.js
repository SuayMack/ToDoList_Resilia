class TarefasControler {

  //barra + ** para fazer comentário (JSdoc)
  /**
   * Método de rotas da entidade usuários
   * recebendo como argumento a instancia do Express
   * @param {Express} app 
   */
  static rotas(app) {
    app.get("/tarefas", (req, res) => {
      res.status(200).json(
        {"tarefa":"estudar, correr, dormir"}
      )
    })

    app.post("/tarefas", (req, res) => {
      res.status(200).json({"tarefa":"estudar, correr, dormir"})
    })
    
  }
}

export default TarefasControler