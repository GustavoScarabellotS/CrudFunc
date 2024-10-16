const express = require('express');
const app = express();
const conexao = require('./database/basedados');
const Funcionario = require('./cont_funcionario/funcionarios');
const ControleFuncionario = require('./cont_funcionario/controleFuncionario');
const { where } = require('sequelize');

app.use("/", ControleFuncionario)

app.set("view engine","ejs");
app.use(express.static('public'));

conexao.authenticate().then(()=>{
    console.log("CONECTADO COM O BANCO");
}).catch((erroMsg)=>{
    console.log(erroMsg);
})

app.get("/",(req,res)=>{
    Funcionario.findAll().then((funcionario) =>{
    res.render("primeiro",{funcionario})
})
})

app.get("/cadfuncionario",(req,res)=>{
    Funcionario.findAll().then((funcionario) =>{
    res.render("cad_funcionario",{funcionario})
})
})

app.get("/controlefunc",(req,res)=>{
    Funcionario.findAll().then((funcionario) =>{
    res.render("cotrole_func",{funcionario})
})
})

app.listen(3000,()=>{
    console.log("SERVIDOR RODANDO");

})
