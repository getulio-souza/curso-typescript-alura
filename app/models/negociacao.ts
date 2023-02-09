export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    //esses valores são passados para dentro de um construtor

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
        ) {}

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

