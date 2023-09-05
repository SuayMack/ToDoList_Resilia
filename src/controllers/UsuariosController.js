import UsuariosModel from "../models/UsuariosModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"
import UsuariosMetodos from "../utils/UsuariosMetodos.js"

class UsuariosControler {

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
    /**
    * Rota para buscar todos os usuários
    */
    app.get("/usuarios", (req, res)=>{
    const usuarios = UsuariosMetodos.buscarTodosOsUsuarios()
    res.status(200).json(usuarios)
  })

  app.get("/usuarios/:id", (req, res)=>{
    const id = req.params.id
    const resposta = UsuariosMetodos.buscarUsuarioPorId(id)
    res.status(200).json(resposta)
  })

  //Criar a rota apagar no Node.js
  app.delete("/usuarios/:id", (req, res)=>{
    const id = req.params.id
    const isValid = ValidacaoServices.validarExistencia(id)
    if(isValid){
      UsuariosMetodos.deletarUsuariosPorId(id)
      res.status(204).json()
    }
      res.status(404).json({error: true, message: "Usuário não encontrado"})
    
  })

  /**
 * Rota apra inserir um novo usuário
 */
  app.post("/usuarios", (req, res)=>{
    const body = Object.values(req.body)
    const usuarioModelado = new UsuariosModel(...body)
    UsuariosMetodos.inserirUsuario(usuarioModelado)
    res.status(200).json({
      error: false,
      message: "Usuário criado com sucesso"
    })
  })

      
  }
}

export default UsuariosControler