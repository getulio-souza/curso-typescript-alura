export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    //esses valores são passados para dentro de um construtor

    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        private readonly valor: number
        ) {}

    get volume(): Number{
        return this.valor * this.quantidade;
    }
}

