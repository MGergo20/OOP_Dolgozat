import { receptLista } from "./recept.js";
export default class ReceptekElonezet {
  #nev = ""
  #kep;
  #szuloElem;
  #kedvencgomb;
  

    constructor(nev, kep, szuloElem, kedvencgomb) {
        this.#nev = nev;
        this.#kep = kep;
        this.#szuloElem = szuloElem;
        this.#kedvencgomb = kedvencgomb; 
        this.megjelenit();

    }
    megjelenit() {
        let html = `
            <div class="elem">
                <h2>${this.#nev}</h2>
                <img src="${this.#kep}" alt="kep">
                <button class="kedvenc">${this.#kedvencgomb ? "Kedvenc" : "Nem kedvenc"}</button>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", html);
    }
 
}
