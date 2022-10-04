import { controlador } from "./controller/controlador.js";
import { carton } from "./model/modelo.js";
import { vista } from "./view/vista.js";

const page = new controlador(new vista, new carton);