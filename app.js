import express from 'express'
import Usuarios from './src/controllers/UsuariosController.js'
import TarefasControler from './src/controllers/Tarefas.js'

/**
 * instância do Express
 * inicialização do que foi importado
 */
const app = express()
/**
 * varável de alocação de porta
 */
const port = process.env.PORT | 3000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

Usuarios.rotas(app)
TarefasControler.rotas(app)