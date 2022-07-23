"use strict";

var convidado = {
  nome: "Felipe Fontoura",
  idade: 37
};
var nome = convidado.nome,
    idade = convidado.idade;
var msg1 = "Olá " + nome + ", idade " + idade + ". Convidado aceito.";
var msg2 = "Ol\xE1 ".concat(nome, ", idade ").concat(idade, ". Convidado aceito.");
console.log(msg2);
