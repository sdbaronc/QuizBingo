import { carton } from "src/model/modelo";
import { vista } from "src/view/vista";

export class controlador {
    public vista1: vista;
    public carton1: carton

    public letras: string[]
    constructor(vista: vista, carton: carton) {
        this.vista1 = vista;
        this.carton1 = carton;
        this.letras = ["B", "I", "N", "G", "O"]
        this.mostrarCarton();
        this.vista1.GetBotonBingo.addEventListener("click", () => {
            this.validarBingo();
        })
    }

    public generarCarton() {
        let cont: number = 0;
        for (let i: number = 0; i < 5; i++) {
            for (let j: number = 0; j < 5; j++) {
                cont++;
                let alea: number = Math.floor(Math.random() * 100);

                if (i == 0) {
                    this.carton1.getB.push(alea);
                }
                else if (i == 1) {
                    this.carton1.getI.push(alea);
                }
                else if (cont == 11 || cont == 12 || cont == 14 || cont == 15) {
                    this.carton1.getN.push(alea);
                }


                else if (cont == 13) {
                    this.carton1.getN.push(404);
                }
                else if (i == 3) {
                    this.carton1.getG.push(alea);
                }
                else if (i == 4) {
                    this.carton1.getO.push(alea);
                }
            }

        }

    }
    public mostrarCarton() {
        this.generarCarton();
        this.vista1.GetBotonCarton.addEventListener("click", () => {
            this.carton1.getB.forEach(element => {
                this.vista1.GetCarton.innerHTML += ' <div class="num"> <p>' + element + '</p></div>';
            });
            this.carton1.getI.forEach(element => {
                this.vista1.GetCarton.innerHTML += '<div class="num"> <p>' + element + '</p></div>';
            });
            this.carton1.getN.forEach(element => {
                if (element == 404) {
                    this.vista1.GetCarton.innerHTML += '<div class="num"> <p> &#9733;</p></div>';
                }
                else { this.vista1.GetCarton.innerHTML += '<div class="num"> <p>' + element + '</p></div>'; }
            });
            this.carton1.getG.forEach(element => {
                this.vista1.GetCarton.innerHTML += '<div class="num"> <p>' + element + '</p></div>';
            });
            this.carton1.getO.forEach(element => {
                this.vista1.GetCarton.innerHTML += '<div class="num"> <p>' + element + '</p></div>';
            });
            this.vista1.GetBotonCarton.style.display = 'none';

            this.generarpelota();
            this.numero();


        });


    }
    public validarpelota(letra: string, numero: number): boolean {


        let devuelva: boolean = false
        let un: string = letra + numero.toString();
        this.carton1.getSecuencia.forEach(element => {
            if (element == un) {
                devuelva = true;
            }
        });
        return devuelva;

    }
    public generarpelota() {
        let inter = setInterval(() => {

            let letra: string = this.letras[Math.floor(Math.random() * 5)];
            let numero: number = Math.floor(Math.random() * 100);
            while (this.validarpelota(letra, numero)) {
                letra = this.letras[Math.floor(Math.random() * 5)];
                numero = Math.floor(Math.random() * 100);

            }
            this.carton1.getSecuencia.push(letra + numero.toString())
            this.mostrarPelota();
            if (this.carton1.getSecuencia.length == 500) {
                alert("felicitaciones ganaste");
                location.reload();

            }



        }, 2000)
        this.numero();





    }
    public mostrarPelota() {
        this.vista1.GetSecu.innerHTML = "";
        this.carton1.getSecuencia.forEach(element => {
            this.vista1.GetSecu.innerHTML += element + " - ";
        });

    }
    public numero() {
        for (let i: number = 0; i < 25; i++) {
            this.vista1.GetNumer[i].addEventListener("click", () => {
                this.vista1.GetNumer[i].style.background = "#818274"

            });
        }
    }
    public validarBingo() {
        let contador: number = 0
        this.carton1.getB.forEach(i => {
            let l: string = "B" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++

                }
            });
        });
        this.carton1.getI.forEach(i => {
            let l: string = "I" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++

                }
            });
        });
        this.carton1.getN.forEach(i => {
            let l: string = "N" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++

                }
            });

        });
        this.carton1.getG.forEach(i => {
            let l: string = "G" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++

                }
            });

        });
        this.carton1.getO.forEach(i => {
            let l: string = "O" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++

                }
            });
        });

        if (contador > 23) {
            alert("felicitaciones ganaste");
            location.reload();
        }
        else {
            alert("sigue intentando solo tienes: " + contador + " numeros");

        }
    }



}