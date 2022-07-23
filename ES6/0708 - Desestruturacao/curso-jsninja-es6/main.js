const convidado = {
  nome: "Felipe",
  idade: 37,
  endereco: { lagradouro: "Av X", numero: 399 }
};

const {
  nome,
  idade,
  endereco: { numero }
} = convidado;

console.log(nome);
console.log(idade);
console.log(numero);

const imprimir = ({ nome, idade }) => {
  console.log(nome);
  console.log(idade);
};

imprimir(convidado);
