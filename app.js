import express from 'express'

const app = express()
const port = process.env.PORT | 3000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/usuarios", (req, res) => {
  res.status(200).json({"usuario":"priscila"})
})

app.get("/tarefas", (req, res) => {
  res.status(200).json({"tarefa":"estudar"})
})