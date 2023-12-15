/*----------------------------------------------------------------------------*/
/* CLASE Alimana */
export class Alimana {
    /*----------------------------------------------------------------------------*/
    /* ATRIBUTOS DE LA CLASE */
    #_nombre;
    #_tipo;
    /*----------------------------------------------------------------------------*/
    /* CONSTRUCTOR */
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }//end constructor
    /*----------------------------------------------------------------------------*/
    /* SETTER */
    /* El nombre debe ser un String */
    set nombre(nuevoNombre) {
        // Si el nombre coincide con las características solicitadas
        // El nombre puede ser literal (typeof) u objeto de clase String (instanceof)
        if ((typeof(nuevoNombre) === "string" || nuevoNombre instanceof String)) {
            this.#_nombre = nuevoNombre;
        } else {
            throw "¡El nombre debe ser una cadena!";
        } //end else
    }//end set nombre(nuevoNombre)
    
    /* El tipo debe ser una selección entre una serie de opciones de tipos */
    set tipo(nuevoTipo) {
        // Los distintos tipos posibles de alimañas
        switch (nuevoTipo) {
            case "Rata":
            case "Cucaracha":
            case "Culebra":
            case "Otros":
                this.#_tipo = nuevoTipo;
                break;
            default:
                throw "¡Tipo no válido!";
        }//end switch
    }//end set tipo(nuevoTipo)
    /*----------------------------------------------------------------------------*/
    /* GETTERS */
    get nombre() {
        return this.#_nombre;
    } //end get nombre()

    get tipo() {
        return this.#_tipo;
    }// end get tipo()
    /*----------------------------------------------------------------------------*/
    /* toString() */
    toString() {
        return "La Alimaña " + this.#_nombre + " es de tipo " + this.#_tipo;
    }//end toString()
    /*----------------------------------------------------------------------------*/
}//end class Alimana
/*----------------------------------------------------------------------------*/
