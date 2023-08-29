import express from 'express'
import Usuarios from './src/controllers/Usuarios.js'
import TarefasControler from './src/controllers/Tarefas.js'

const app = express()
const port = process.env.PORT | 3000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

Usuarios.rotas(app)
TarefasControler.rotas(app)