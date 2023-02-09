//aqui temos uma lista de negociações

import { Negociacao } from "./negociacao.js";

//essa classe guarda, de maneira privada, uma lista de negociações
export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    
    //recebo um parametro 'negociacao' do tipo 'negociacoes" e 
    adiciona(negociacao: Negociacao) {
        //adiciona a negociacao dentro da lista 
        this.negociacoes.push(negociacao);
    }

    //vamos retornar a lista que será rendenizada na tela 
    // o read only array retorna somente uma lista do tipo leitura 
    lista(): readonly Negociacao[] {
        //podemos usar o spread operador para pegar cada item dessa lista e colocá-lo dentro de uma nova lista
        // return [...this.negociacoes];
        return this.negociacoes;
    }
}