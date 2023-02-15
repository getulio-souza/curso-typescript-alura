import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from '../views/negociacoes-view.js';
export class negociacaoController {
    //o constuctor está sendo inicializado
    // com o auxilio do document.querySelector do javascript, estamos pegando os inputs pelos IDs
    constructor() {
        this.negociacoes = new Negociacoes();
        //vamos criar uma nova propriedade para rendenizar o elemento do DOM. Ele é o nosso ID da div que criamos na 'negociacoes view'
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        //capturamos os valores dos inputs através do document querselector do javascript 
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        //agora carregamos a tabela (mesmo que esteja vazia)
        //assim que a página é criada, chamamos o método update
        //passando o this.negociacoes conseguimos gerar o html 
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        //criamos uma negociacao e armazenamos o valor dela dentro da variavel 'negociacao'
        const negociacao = this.criarNegociacao();
        //depois de criada a negociacao, adicionamos ela dentro da lista 'negociacoes'
        this.negociacoes.adiciona(negociacao);
        //agora atualizamos de acordo com o que foi colocado na tabela (os dados do tbody)
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
        //criamos uma expressão regular que será responsável por substituir os hifens por virgulas para separar ano, mês e dia
        // const exp = /-/g;
        // //usamos o método replace para fazer a substituição de hifen (que vem como padrão) por vírgula e passamos o exp como primeiro parametro e o que queremos substituir como segundo parametro
        // const date = new Date(this.inputData.value.replace(exp, ','))
        // //convertemos a 'quantidade' para numero inteiro por meio do 'parseInt passando o inputQuantidade como parametro
        // const quantidade = parseInt(this.inputQuantidade.value);
        // //fazemos a mesma conversão para o inputValor só que usando o parseFloat porque o valor possuí números não inteiros
        // const valor = parseFloat(this.inputValor.value);
        // //agora passamos as variáveis criadas acima como parametro do 'New Negociacao'
        // const negociacao = new Negociacao(date, quantidade, valor);
        // console.log(negociacao);
    }
    //podemos mover o código acima para dentro de um método e atribuir um tipo para o retorno dele 
    criarNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    //aqui limpamos os campos do formulário passando uma string em branco " "
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        //colocamos o focus no inputData
        this.inputData.focus();
    }
}
