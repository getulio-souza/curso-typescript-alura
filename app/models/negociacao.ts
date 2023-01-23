export class Negociacao {
    #data;
    #quantidade;
    #valor;

    //esses valores são passados para dentro de um construtor

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    //para que tenhamos acesso aos atributos privados, podemos usar geters para acessá-los seguindo a lógica abaixo 
    get data(){
        return this.#data;
    }

    get quantidade() {
        return this.#quantidade;
    }

    //para retornar o volume 
    get volume() {
        //multiplicamos a quantidade pelo valor para termos o volume 
        return this.#quantidade * this.#valor;
    }
}
