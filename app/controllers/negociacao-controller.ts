import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class negociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();


    //o constuctor está sendo inicializado
    // com o auxilio do document.querySelector do javascript, estamos pegando os inputs pelos IDs
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adicionar(): void {
        //criamos uma negociacao e armazenamos o valor dela dentro da variavel 'negociacao'
        const negociacao = this.criarNegociacao();
        //depois de criada a negociacao, adicionamos ela dentro da lista 'negociacoes'
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        
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
    criarNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    //aqui limpamos os campos do formulário passando uma string em branco " "
    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        //colocamos o focus no inputData
        this.inputData.focus();
    }
}
