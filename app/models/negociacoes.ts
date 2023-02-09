//aqui temos uma lista de negociações

import { Negociacao } from "./negociacao.js";

//essa classe guarda, de maneira privada, uma lista de negociações
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    
    //recebo um parametro 'negociacao' do tipo 'negociacoes" e 
    adiciona(negociacao: Negociacao) {
        //adiciona a negociacao dentro da lista 
        this.negociacoes.push(negociacao);
    }

    //vamos retornar a lista que será rendenizada na tela 
    lista(): Array<Negociacao>{
        return this.negociacoes;
    }
}