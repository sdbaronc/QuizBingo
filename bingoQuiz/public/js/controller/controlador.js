export class controlador {
    constructor(vista, carton) {
        this.vista1 = vista;
        this.carton1 = carton;
        this.letras = ["B", "I", "N", "G", "O"];
        this.mostrarCarton();
        this.vista1.GetBotonBingo.addEventListener("click", () => {
            this.validarBingo();
        });
    }
    generarCarton() {
        let cont = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                cont++;
                let alea = Math.floor(Math.random() * 100);
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
    mostrarCarton() {
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
                else {
                    this.vista1.GetCarton.innerHTML += '<div class="num"> <p>' + element + '</p></div>';
                }
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
    validarpelota(letra, numero) {
        let devuelva = false;
        let un = letra + numero.toString();
        this.carton1.getSecuencia.forEach(element => {
            if (element == un) {
                devuelva = true;
            }
        });
        return devuelva;
    }
    generarpelota() {
        let inter = setInterval(() => {
            let letra = this.letras[Math.floor(Math.random() * 5)];
            let numero = Math.floor(Math.random() * 100);
            while (this.validarpelota(letra, numero)) {
                letra = this.letras[Math.floor(Math.random() * 5)];
                numero = Math.floor(Math.random() * 100);
            }
            this.carton1.getSecuencia.push(letra + numero.toString());
            this.mostrarPelota();
            if (this.carton1.getSecuencia.length == 500) {
                alert("felicitaciones ganaste");
                location.reload();
            }
        }, 2000);
        this.numero();
    }
    mostrarPelota() {
        this.vista1.GetSecu.innerHTML = "";
        this.carton1.getSecuencia.forEach(element => {
            this.vista1.GetSecu.innerHTML += element + " - ";
        });
    }
    numero() {
        for (let i = 0; i < 25; i++) {
            this.vista1.GetNumer[i].addEventListener("click", () => {
                this.vista1.GetNumer[i].style.background = "#818274";
            });
        }
    }
    validarBingo() {
        let contador = 0;
        this.carton1.getB.forEach(i => {
            let l = "B" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++;
                }
            });
        });
        this.carton1.getI.forEach(i => {
            let l = "I" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++;
                }
            });
        });
        this.carton1.getN.forEach(i => {
            let l = "N" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++;
                }
            });
        });
        this.carton1.getG.forEach(i => {
            let l = "G" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++;
                }
            });
        });
        this.carton1.getO.forEach(i => {
            let l = "O" + i.toString();
            this.carton1.getSecuencia.forEach(j => {
                if (l == j) {
                    contador++;
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
