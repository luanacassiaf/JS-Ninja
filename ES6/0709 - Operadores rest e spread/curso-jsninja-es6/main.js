// REST
// Pegar o resto das propriedades de um objeto

const convidado = { nome: "Felipe", idade: 37, endereco: "Av X, 39" };
const { nome, ...rest } = convidado;

// console.log(nome);
// console.log(rest);

const convidados = [
  { nome: "Felipe", idade: 37, endereco: "Av X, 39" },
  { nome: "Bruno", idade: 23, endereco: "Av Y, 49" },
  { nome: "Isabele", idade: 21, endereco: "Av Z, 59" },
  { nome: "João", idade: 41, endereco: "Av W, 69" }
];

const [felipe, bruno, ...outros] = convidados;

// console.log(felipe);
// console.log(bruno);
// console.log(outros);

const arr = [1, 2, 3, 4];
const [a, b, ...resto] = arr;

// console.log(a);
// console.log(b);
// console.log(resto);

// Spread
// Repassar as propriedades para OUTRO objeto

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

// console.log(arr3);

const convidado1 = { nome: "Felipe", idade: 37, endereco: "Av X, 39" };
const novoConvidado = { ...convidado1, idade: 38 };

// console.log(novoConvidado);
