export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    //esses valores são passados para dentro de um construtor

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        private readonly valor: number
        ) {}

    get volume(): Number{
        return this.valor * this.quantidade;
    }

    get data(): Date{
        //o parametro que foi colocado no new date não modifica a data que está armazenada dentro da modelagem de negociação
        const data = new Date(this._data.getTime());
        return this._data;
    }
}



let a: number = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
}

let d = c.apple * 4;