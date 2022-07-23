const convidado = { nome: "Felipe Fontoura", idade: 37 };
const { nome, idade } = convidado;

const msg1 = "Olá " + nome + ", idade " + idade + ". Convidado aceito.";
const msg2 = `Olá ${nome}, idade ${idade}. Convidado aceito.`;

console.log(msg2);
