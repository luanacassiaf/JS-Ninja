"use strict";

var convidado = {
  nome: "Felipe",
  idade: 37,
  endereco: {
    lagradouro: "Av X",
    numero: 399
  }
};
var nome = convidado.nome,
    idade = convidado.idade,
    numero = convidado.endereco.numero;
console.log(nome);
console.log(idade);
console.log(numero);

var imprimir = function imprimir(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome);
  console.log(idade);
};

imprimir(convidado);
