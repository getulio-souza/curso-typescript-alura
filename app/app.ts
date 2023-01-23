import { Negociacao } from "./models/negociacao.js";

//com a negociacao importada, vamos criar uma instância dela
const negociacao = new Negociacao(new Date());

console.log(negociacao.volume);

//repare que não houve alteração da propriedade 'quantidade' da classe negociacao

