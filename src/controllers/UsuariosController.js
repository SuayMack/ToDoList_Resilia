class UsuariosControler {

  //barra + ** para fazer comentário (JSdoc)
  /**
   * Método de rotas da entidade usuários
   * recebendo como argumento a instancia do Express
   * @param {Express} app 
   * usa-se o static para não precisar instanciar a classe
   * 
   * req e res são dois objetos muito importantes que representam uma solicitação do cliente 
   * (navegador, aplicativo móvel, etc.) para o servidor e a resposta que o servidor envia de 
   * volta para o cliente, respectivamente.
   */
  static rotas(app) {
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.get("/usuarios", (req, res) => {
      const body = req.body
      console.log(body)
      res.status(200).json(body)
    })

    app.post("/usuarios", (req, res) => {
      res.status(200).json({"usuario":"priscila"})
    })

    app.put("/usuarios", (req, res) => {
      res.status(200).json({"usuario":"priscila"})
    })
    
  }
}

export default UsuariosControler