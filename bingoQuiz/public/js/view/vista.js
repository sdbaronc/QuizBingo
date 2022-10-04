export class vista {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.getElementClas = (selector) => document.getElementsByClassName(selector);
        this.carton = this.getElement('.carton');
        this.botonCarton = this.getElement('.cartones');
        this.botonbingo = this.getElement('.bingo');
        this.display = this.getElement('.display');
        this.secu = this.getElement('.secu');
        this.numeros = this.getElementClas('num');
        this.mensajear("Pida un carton y espere a que salgan todos los numeros que hay en él");
    }
    set SetDisplay(dispaly) {
        this.display = dispaly;
    }
    get GetDisplay() {
        return this.display;
    }
    set SetCarton(dispaly) {
        this.carton = dispaly;
    }
    get GetCarton() {
        return this.carton;
    }
    set SetBotonBingo(dispaly) {
        this.botonbingo = dispaly;
    }
    get GetBotonBingo() {
        return this.botonbingo;
    }
    set SetBotonCarton(dispaly) {
        this.botonCarton = dispaly;
    }
    get GetBotonCarton() {
        return this.botonCarton;
    }
    set Setsecu(dispaly) {
        this.secu = dispaly;
    }
    get GetSecu() {
        return this.secu;
    }
    set SetNumer(dispaly) {
        this.numeros = dispaly;
    }
    get GetNumer() {
        return this.numeros;
    }
    mensajear(texto) {
        this.display.innerHTML = '<p>' + texto + '</p>';
    }
}
