/*----------------------------------------------------------------------------*/
import { Humano } from "./Humano.js";
/*----------------------------------------------------------------------------*/
/* CLASE ETERNO */
export class Eterno extends Humano {
  /*----------------------------------------------------------------------------*/
  /* ATRIBUTOS DE LA CLASE */
  #_cargo;
  /*----------------------------------------------------------------------------*/
  /* CONSTRUCTOR */
  constructor(nombre, siglo, realidad, cargo) {
    // Hereda todas las propiedades de "Humano"
    super(nombre, siglo, realidad);

    // Compruebo si el siglo en Eterno no es menor a 23
    if (siglo < 23) {
      throw "¡El siglo debe ser un número y no puede ser menor al siglo 'XXIII'!";
    }//end if

    /* Se llama directamente al setter */
    this.cargo = cargo;
  } //end constructor(nombre, siglo, realidad, cargo)
  /*----------------------------------------------------------------------------*/
  /* SETTERS */
  set cargo(nuevoCargo) {
    // Los distintos cargos posibles en la eternidad
    switch (nuevoCargo) {
      case "Aprendiz":
      case "Técnico":
      case "Ejecutor":
      case "Jefe":
        this.#_cargo = nuevoCargo;
        break;
      default:
        throw "¡Cargo no válido!";
    }//end switch
  } //end set cargo(nuevoCargo)
  /*----------------------------------------------------------------------------*/
  /* GETTERS */
  get cargo() {
    return this.#_cargo;
  } //end get cargo()
  /*----------------------------------------------------------------------------*/
  /* toString() */
  toString() {
    return super.nombre + " es un " + this.#_cargo + " del siglo " + super.siglo + 
        " de la realidad " + super.realidad + ".";
  }//end toString()
  /*----------------------------------------------------------------------------*/
} //end class Eterno
/*----------------------------------------------------------------------------*/
