import DatabaseMetodos from "./DatabaseMetodos.js"

const USUARIOS_TABELA = "Usuarios"

class UsuariosMetodos extends DatabaseMetodos {
  static inserirUsuario(data) {
    this.inserir(USUARIOS_TABELA, data)
  }

  static buscarTodosUsuarios() {
    this.inserir(USUARIOS_TABELA)
  }

}

export default UsuariosMetodos