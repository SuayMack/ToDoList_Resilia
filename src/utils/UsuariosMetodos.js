import UsuariosModel from "../models/UsuariosModel.js";
import DatabaseMetodos from "./DatabaseMetodos.js";

const USUARIOS_TABELA = "Usuarios"

class UsuariosMetodos extends DatabaseMetodos{
    /**
     * Método de inserção de dados da tabela Usuários
     * @param {UsuariosModel} data 
     */
    static inserirUsuario(data){
        this.inserir(USUARIOS_TABELA, data)
    }

    /**
     * Método que retorna todos os registros da tabela Usuários
     * @returns {Array<UsuariosModel>}
     */
    static buscarTodosOsUsuarios(){
        return this.buscar(USUARIOS_TABELA)
    }

    /**
     * Atualiza um registro específico da tabela usuários através do identificador
     * @param {string} id
     * @param {any} data
     */
    static buscarUsuariosPorId(id){
        return this.buscar(USUARIOS_TABELA, id)
    }

    static deletarUsuarioPorId(id){
        return this.deletarPorId(USUARIOS_TABELA, id)
    }

    static AtualizarUsuarioPorId(id, data){
        this.atualizarPorId(USUARIOS_TABELA, id, data)
    }
}

export default UsuariosMetodos;