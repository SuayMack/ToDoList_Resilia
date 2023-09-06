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
      const resposta = UsuariosMetodos.buscarUsuariosPorId(id)
      res.status(200).json(resposta)
    })

    //Criar a rota apagar no Node.js
    app.delete("/usuarios/:id", (req, res)=>{
      const id = req.params.id
      const isValid = ValidacaoServices.validarExistencia(id)
      if(isValid){
        UsuariosMetodos.deletarUsuarioPorId(id)
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
      const isValid = ValidacaoServices.validaCamposUsuario(...body)
        if(isValid){
          UsuariosMetodos.inserirUsuario(usuarioModelado)
          res.status(200).json({
            error: false,
            message: "Usuário criado com sucesso"
          })
        }
      res.status(400).json({error: true, message: "Campos inválidos"})
    })

      /**
      //req - acessar objeto da requisição
      * Rota para atualizar um usuário
      * const req = {
        params:{
            id: "valor"
        },
        body: {}
      }
      */
    app.put("/usuarios/:id", (req, res)=>{
      const id = req.params.id
      const body = req.body
      const exists = ValidacaoServices.validarExistencia(id)
      const isValid = ValidacaoServices.validaCamposUsuario(body.nome, body.email, body.telefone)
      if(exists){
        if(isValid){
          const usuarioModelado = new UsuariosModel(body.nome, body.email, body.telefone)
          UsuariosMetodos.AtualizarUsuarioPorId(id, usuarioModelado)
          res.status(204).json()
        }
        res.status(400).json({error: true, message: "Campos inválidos"})
      }
      res.status(404).json({error: true, message: `Usuário não encontrado para o id ${id}`})	
    })

      
  }
}

export default UsuariosControler