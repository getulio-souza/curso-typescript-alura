//aqui temos uma lista de negociações
//essa classe guarda, de maneira privada, uma lista de negociações
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //recebo um parametro 'negociacao' do tipo 'negociacoes" e 
    adiciona(negociacao) {
        //adiciona a negociacao dentro da lista 
        this.negociacoes.push(negociacao);
    }
    //vamos retornar a lista que será rendenizada na tela 
    lista() {
        return this.negociacoes;
    }
}
