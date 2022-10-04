export class vista {
    private carton: any;
    private botonCarton: any;
    private botonbingo: any;
    private display: any;
    private secu: any;
    private numeros: any;
    constructor() {
        this.carton = this.getElement('.carton');
        this.botonCarton = this.getElement('.cartones');
        this.botonbingo = this.getElement('.bingo');
        this.display = this.getElement('.display');
        this.secu = this.getElement('.secu');
        this.numeros = this.getElementClas('num')
        this.mensajear("Pida un carton y espere a que salgan todos los numeros que hay en él")


    }
    public getElement = (selector: string): HTMLElement | null => document.querySelector(selector);
    public getElementClas = (selector: string): HTMLCollection | null => document.getElementsByClassName(selector);

    public set SetDisplay(dispaly: HTMLElement) {
        this.display = dispaly;
    }

    public get GetDisplay() {
        return this.display;
    }
    public set SetCarton(dispaly: HTMLElement) {
        this.carton = dispaly;
    }

    public get GetCarton() {
        return this.carton;
    }
    public set SetBotonBingo(dispaly: HTMLElement) {
        this.botonbingo = dispaly;
    }

    public get GetBotonBingo() {
        return this.botonbingo;
    }
    public set SetBotonCarton(dispaly: HTMLElement) {
        this.botonCarton = dispaly;
    }

    public get GetBotonCarton() {
        return this.botonCarton;
    }
    public set Setsecu(dispaly: HTMLElement) {
        this.secu = dispaly;
    }

    public get GetSecu() {
        return this.secu;
    }
    public set SetNumer(dispaly: HTMLCollection) {
        this.numeros = dispaly;
    }

    public get GetNumer() {
        return this.numeros;
    }







    public mensajear(texto: string) {
        this.display.innerHTML = '<p>' + texto + '</p>';
    }

}