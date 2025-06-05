import ReceptekElonezet from "./ReceptekElonezet.js";

export default class Receptek {
    #receptek = [];
    #szuloElem;

    constructor(szuloElem, receptLista) {
        this.#receptek = receptLista;
        this.#szuloElem = szuloElem;
        this.#init();
    }
    #init(){
        this.#receptek.forEach((element) => {
            new ReceptekElonezet(
                element.nev,
                element.kep,
                this.#szuloElem,
                element.kedvenc
            );
        });
    }
}
