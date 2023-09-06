import Database from "../database/Database.js";

class DatabaseMetodos{
    /**
     * Método de inserção de dados
     * @param {string} entidade 
     * @param {*} data *objeto email, telefone
     */
    static inserir(entidade, data){
        Database[entidade].push(data)
    }

    /**
     * Método de busca de dados
     * @param {string} entidade 
     * @returns {any}
     */
    static buscar(entidade){
        return Database[entidade]
    }

    static buscarPorId(entidade, id){
        return Database[entidade][id]
    }

    static deletarPorId(entidade, id){
        delete Database[entidade][id]
    }
}

export default DatabaseMetodos;