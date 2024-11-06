const express = require('express')
const router = express.Router()//módulo que irá trabalhar com rotas

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

//Criando rotas 
//1ª rota - inserir dados na tabela

router.post('/store',async(req,res)=>{
      const resultado = await funcionario.create({
        nome : 'jose Almeida',
        salario: 1700,
        cargo:'zelador',
        departamentoId:1//esse campo é a chave estrangeira 
      })
})

//2ª rota - Exibir pagina raiz de funcionario
router.get('/', (req,res)=>{
    res.send("<h1> Página inicial de Funcionário</h1>")
})

//3ª rota - consultar  dados da tabela
router.get('/show',async(req,res)=>{
    let resultado = await funcionario.findAll()
    if (resultado){
        console.log(resultado)
    }
    else{
        console.log("Não foi possível exibir os dados")
    }
})

//4ª rota deletar dados da tabela

router.get('/destroy/:id', async(req,res)=>{
    
})

module.exports = router