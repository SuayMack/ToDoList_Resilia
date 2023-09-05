import UsuariosMetodos from "../utils/UsuariosMetodos.js";

class ValidacaoServices {
  static validarExistencia(id){
    const usuario = UsuariosMetodos.buscarUsuariosPorId(id)
    if(usuario){
      return true
    }else{
      return false
    }
  }
}
export default ValidacaoServices;