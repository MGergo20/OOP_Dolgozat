import { receptLista } from "./recept.js";
import Receptek from "./Receptek.js";

const szuloElem = document.querySelector(".recept");
new Receptek(szuloElem, receptLista);

