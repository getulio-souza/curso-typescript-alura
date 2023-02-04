export class Negociacao {
    //esses valores são passados para dentro de um construtor
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this.data;
    }
    get quantidade() {
        return this.quantidade;
    }
    get valor() {
        return this.valor;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
}
