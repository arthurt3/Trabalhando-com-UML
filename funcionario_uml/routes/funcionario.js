const express = require('express')
const router = express.Router()//módulo que irá trabalhar com rotas

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')
const { where } = require('sequelize')

//Criando rotas 
//1ª rota - inserir dados na tabela

router.post('/store',async(req,res)=>{
      const resultado = await funcionario.create({
        nome : req.body.nome,
        salario: req.body.salario,
        cargo:req.body.cargo,
        departamentoId:req.body.departamento//esse campo é a chave estrangeira 
      })

      if (resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Não foi possível cadastrar"})
    }
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
    const resultado = await funcionario.destroy({
        where:{
            id:req.params.id //estamos recebendo o id via parâmetro, que está sendo passado na rota, no caso é o :id que estamos recebendo.

        }
    })
})

//5ª rota - exibir formulario de cadastro
router.get("/create",(req,res)=>{
    res.render('funcionarios/addFuncionario')
})
module.exports = router