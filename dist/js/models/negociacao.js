export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    //esses valores são passados para dentro de um construtor
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        //o parametro que foi colocado no new date não modifica a data que está armazenada dentro da modelagem de negociação
        const data = new Date(this._data.getTime());
        return this._data;
    }
}
