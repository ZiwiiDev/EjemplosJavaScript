/*----------------------------------------------------------------------------*/
/* CLASE HUMANO */
export class Humano {
  /*----------------------------------------------------------------------------*/
  /* ATRIBUTOS DE LA CLASE */
  #_nombre;
  #_siglo;
  #_realidad;
  /*----------------------------------------------------------------------------*/
  /* CONSTRUCTOR */
  constructor(nombre, siglo, realidad) {
    /* Se llama directamente al setter */
    this.nombre = nombre;
    this.siglo = siglo;
    this.realidad = realidad;
  } //end constructor(nombre, siglo, realidad)
  /*----------------------------------------------------------------------------*/
  /* SETTER */
  /* String. No menos de 5 caracteres. Si no se cumple se lanza una excepción. Privado. */
  set nombre(nuevoNombre) {
    // Si el nombre coincide con las características solicitadas
    // El nombre puede ser literal (typeof) u objeto de clase String (instanceof)
    if ((typeof(nuevoNombre) === "string" || nuevoNombre instanceof String) && nuevoNombre.length >= 5) {
      this.#_nombre = nuevoNombre;
    } else {
      throw "¡El nombre debe ser una cadena y no debe superar los 5 caracteres!";
    } //end else
  } //end set nombre(nuevoNombre)

  /* Number. El siglo en el que vive. Privado. */
  set siglo(nuevoSiglo) {
    // Si el siglo coincide con las características solicitadas
    if (!isNaN(nuevoSiglo) && nuevoSiglo > 0) {
      this.#_siglo = nuevoSiglo;
    } else {
      throw "¡El siglo debe ser numérico y positivo!";
    } //end else
  } //end set siglo(nuevoSiglo)

  /* Number. Los múltiples cambios en el mundo provocan cambios 
  en la realidad. La realidad original es la realidad 1. 
  A mayor valor indica mayor número de cambios. 
  No puede ser ni 0 ni número negativo. Lanza una excepción 
  si no se cumple. Privado. */
  set realidad(nuevaRealidad) {
    // Realidad original
    this.#_realidad = 1;

    // Si la realidad coincide con las características solicitadas
    if (!isNaN(nuevaRealidad) && nuevaRealidad > 0) {
      this.#_realidad = nuevaRealidad;
    } else {
      throw "¡La realidad debe ser un número positivo!";
    } //end else
  } //end set realidad(nuevaRealidad)
  /*----------------------------------------------------------------------------*/
  /* GETTERS */
  get nombre() {
    return this.#_nombre;
  } //end get nombre()

  get siglo() {
    return this.#_siglo;
  } //end get siglo()

  get realidad() {
    return this.#_realidad;
  } //end get realidad()
  /*----------------------------------------------------------------------------*/
  /* toString() */
  toString() {
    return this.#_nombre + " es del siglo " + this.#_siglo + " y de la versión " +
      this.#_realidad + " de la realidad.";
  } //end toString()
  /*----------------------------------------------------------------------------*/
} //end class Humano
/*----------------------------------------------------------------------------*/
  