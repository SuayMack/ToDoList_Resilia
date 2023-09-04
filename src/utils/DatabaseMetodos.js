import Database from "../database/Database,js";

class DatabaseMetodos {
  static inserir(entidade, data) {
    Database[entidade].push(data)
  }  

  static buscar(entidade) {
    return Database[entidade]
  }
}

export default DatabaseMetodos