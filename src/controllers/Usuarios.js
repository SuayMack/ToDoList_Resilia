class UsuariosControler {

  //barra + ** para fazer comentário (JSdoc)
  /**
   * Método de rotas da entidade usuários
   * recebendo como argumento a instancia do Express
   * @param {Express} app 
   */
  static rotas(app) {
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.get("/usuarios", (req, res) => {
      res.status(200).json({"usuario":"priscila"})
    })
    
  }
}

export default UsuariosControler