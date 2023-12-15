import { Alimana } from "./Alimana.js";
/*----------------------------------------------------------------------------*/
/* CLASE Exterminador */
export class Exterminador {
    /*----------------------------------------------------------------------------*/
    /* ATRIBUTOS DE LA CLASE */
    #_codigo;
    /*----------------------------------------------------------------------------*/
    /* CONSTRUCTOR */
    constructor(codigo) {
        this.codigo = codigo;
    }//end constructor
    /*----------------------------------------------------------------------------*/
    /* SETTER */
    set codigo(nuevoCodigo) {
        // Si el codigo coincide con las características solicitadas
        // El codigo puede ser literal (typeof) u objeto de clase String (instanceof)
        if ((typeof(nuevoCodigo) === "string" || nuevoCodigo instanceof String)) {
            
            // Las cuatro primeras posiciones son letras y los dos últimos dígitos
            if (nuevoCodigo.length !== 6 || !isNaN(nuevoCodigo.slice(0, 4)) || isNaN(nuevoCodigo.slice(4))) {
                throw "¡Las 4 primeras posiciones del código deben ser letras y las dos últimas dígitos!";
            } else {
                this.#_codigo = nuevoCodigo;
            }
        } else {
            throw "¡El código debe ser una cadena!";
        } //end else
    }//end set codigo(nuevoCodigo)
    /*----------------------------------------------------------------------------*/
    /* GETTERS */
    get codigo() {
        return this.#_codigo;
    }//end get
    /*----------------------------------------------------------------------------*/
    /* MÉTODOS */
    /* Método que devuelve una probabilidad */
    #probabilidad(tipo) {
        // Si el tipo de la probabilidad coincide con las características solicitadas
        // El tipo de la probabilidad puede ser literal (typeof) u objeto de clase String (instanceof)
        if ((typeof(tipo) === "string" || tipo instanceof String)) {
            switch (tipo) {
                case "Rata":
                  return 67;    // También se puede poner 0.67 y luego en el random no se multiplica por 100
                case "Cucaracha":
                  return 50;
                case "Culebra":
                  return 30;
                case "Otros":
                  return 99;
                default:
                  return 0;
            }//end switch
        }//end if
    }//end método #probabilidad(tipo)

    /* Método para matar a la antimaña */
    matarAlimana(alimana) {
        let tipoAlimana = alimana.tipo;
        let probabilidad;
        let random;

        probabilidad = this.#probabilidad(tipoAlimana);
        random = Math.random() * 100;
    
        // Compruebo si es de tipo Alimaña
        if (alimana instanceof Alimana) {
            if (random <= probabilidad) {
                    return true;
                } else {
                    return false;
            }//end else
        }//end if
    }//end método matarAlimana(alimana)
    /*----------------------------------------------------------------------------*/
    /* toString() */
    toString() {
        return "Exterminador - Código: " + this.codigo;
    }//end toString()
    /*----------------------------------------------------------------------------*/
}//end class Exterminador
/*----------------------------------------------------------------------------*/
