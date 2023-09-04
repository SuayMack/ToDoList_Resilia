import UsuariosModel from "../models/UsuariosModel"
import UsuariosMetodos from "../utils/UsuariosMetodos"

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
    app.get('/usuarios', (req, res) => {
      const usuario = new UsuariosMetodos.buscarTodosUsuarios()
      res.send(200).json(usuario)
    })
    //rota para buscar todos os usuarios
    app.get("/usuarios", (req, res) => {
      const body = Object.values(req.body)
      const usuario = new UsuariosModel(...body)
      UsuariosMetodos.inserirUsuario(usuario)
      res.status(200).json({
        error: false,
        message: "Usuario criado com sucesso",
      })
    })

    app.post("/usuarios", (req, res) => {
      res.status(200).json({"usuario":"priscila"})
    })
    
  }
}

export default UsuariosControler