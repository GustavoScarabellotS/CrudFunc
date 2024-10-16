const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Funcionario = require('./funcionarios');

router.use(bodyParser.urlencoded({extended:true}));

router.get("/novo",(req,res)=>{
    res.render("funcionario/cad_func");
})

router.get("/controlefuncionario", (req,res)=>{
    Funcionario.findAll().then((funcionario)=>{
        res.render("funcionario/controle_func",{funcionario})
    })
})

router.post("/updatefunc",(req, res)=>{
    id = req.body.id;
    nome = req.body.nome;
    setor = req.body.setor;
    salario = req.body.salario;
    Funcionario.update(
        {nome:nome, 
         setor:setor,
         salario:salario}, 
        {where:{id_funcionario:id}}
    ).then(()=>{
        res.redirect("/controlefuncionario")
    })
})

router.post("/deletafunc", (req, res)=>{
    let id = req.body.id;
    Funcionario.destroy({
        where:{
            id_funcionario:id
        }
    }).then(()=>{
        res.redirect("/controlefuncionario")
    })
})

router.get("/editafunc/:id", (req, res)=>{
    let id = req.params.id;
    Funcionario.findByPk(id).then((funcionario)=>{
        res.render("funcionario/alte_func", {funcionario})
    })
})

router.post("/salvafunc", (req,res)=>{
    nome = req.body.nome;
    setor = req.body.setor;
    salario = req.body.salario;
    Funcionario.create({
        nome:nome,
        setor:setor,
        salario:salario
    }).then(()=>{
        res.redirect("/novo");
    })
})

module.exports = router;