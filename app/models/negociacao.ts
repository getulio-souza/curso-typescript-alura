export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    //esses valores são passados para dentro de um construtor

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this.data;
    }

    get quantidade(): Number {
        return this.quantidade;
    }

    get valor(): Number{
        return this.valor;
    }

    get volume(): Number{
        return this._valor * this._quantidade;
    }
}

