import { negociacaoController } from "./controllers/negociacao-controller.js";
const controller = new negociacaoController();
//agora precisamos pegar o formulário e armazená-lo dentro de uma variável 
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    //evita o refresh da página depois que clicamos no botão submit
    event.preventDefault();
    //toda vez que chamamos o "form", chamamos também o método "adicionar"
    controller.adicionar();
});
