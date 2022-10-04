export class carton {
    private b: number[];
    private i: number[];
    private n: number[];
    private g: number[];
    private o: number[];
    private secuencia: string[];
    constructor() {
        this.b = [];
        this.i = [];
        this.n = [];
        this.g = [];
        this.o = [];

        this.secuencia = [];

    }

    public set setB(b: number[]) {
        this.b = b;
    }

    public get getB() {
        return this.b;
    }
    public set setI(b: number[]) {
        this.i = b;
    }

    public get getI() {
        return this.i;
    }
    public set setN(b: number[]) {
        this.n = b;
    }

    public get getN() {
        return this.n;
    }
    public set setG(b: number[]) {
        this.g = b;
    }

    public get getG() {
        return this.g;
    }
    public set setO(b: number[]) {
        this.o = b;
    }

    public get getO() {
        return this.o;
    }
    public set setSecuencia(b: string[]) {
        this.secuencia = b;
    }

    public get getSecuencia() {
        return this.secuencia;
    }

}