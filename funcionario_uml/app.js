// CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

//configurar express para receber os dados do formulario
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//CARREGANDO ROTAS
const foncionarioRouter = require('./routes/funcionario')

//ultilizando rotas

app.use('/funcionario',foncionarioRouter)

// EXIBINDO INFORMAÇÕES NA TELA
app.get("/",(req, res)=>{
    res.send("<h1>Tudo Funcionando</h1>")
})


//EXECUTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})