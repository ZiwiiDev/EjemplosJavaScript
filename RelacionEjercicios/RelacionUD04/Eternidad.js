/*----------------------------------------------------------------------------*/
import { Eterno } from "./Eterno.js";
/*----------------------------------------------------------------------------*/
/* CLASE ETERNIDAD (Es la clase que va a guardar los eternos) */
export class Eternidad {
  /*----------------------------------------------------------------------------*/
  /* ATRIBUTOS DE LA CLASE */
  #_objeto_jefe;
  #_descripcion;
  /*----------------------------------------------------------------------------*/
  /* CONSTRUCTOR */
  constructor(objeto_jefe, descripcion) {
    this.objeto_jefe = objeto_jefe;
    this.descripcion = descripcion;
    this._eternos = []; // Array donde se almacenarán los eternos
  } //end constructor(objeto_jefe,  descripcion)
  /*----------------------------------------------------------------------------*/
  /* SETTER */
  /* El objeto_jefe es el que va a tener que ser del tipo Eterno y del cargo jefe */
  set objeto_jefe(nuevoObjetoJefe) {
    // Si el objeto jefe coincide con las características solicitadas
    // Utilizo "instanceof" para objetos ("typeof" para literales)
    if (nuevoObjetoJefe instanceof Eterno && nuevoObjetoJefe.cargo === "Jefe") {
      this.#_objeto_jefe = nuevoObjetoJefe;
    } else {
      throw "¡El Objeto Jefe debe ser de tipo Eterno y de cargo Jefe!";
    }//end else
  }//end set objeto_jefe (nuevoObjetoJefe)

   /* Una descripción de la eternidad.  No puede ser superior a 200 caracteres. 
  Si tiene más de 200 se corta y no provoca una excepción. 
  Si es menor de 10 provoca excepción. */
  set descripcion(nuevaDescripcion) {
    // Si la descripción coincide con las características solicitadas
    if (nuevaDescripcion.length > 10) {
      // Si es superior a 200 caracteres se corta y no lanza excepción.

      // slice() lo que hace es devolver una copia de una parte del array
      // dentro de un nuevo array empezando por el inicio hasta fin (fin no incluido).
      this.#_descripcion = nuevaDescripcion.slice(0, 200);

      // Si la descripción es mayor a 200 caracteres
      if (nuevaDescripcion.length >= 200) {
        console.warn("¡La descripción se ha truncado a 200 caracteres!");
      }//end if
    } else {
      throw "¡La descripción no puede ser menor a 10 caracteres!";
    }//end else
  }//end set descripcion (nuevaDescripcion)
  /*----------------------------------------------------------------------------*/
  /* GETTERS */
  get objeto_jefe() {
    return this.#_objeto_jefe;
  }//end get objeto_jefe()

  get descripcion() {
    return this.#_descripcion;
  }//end get descripcion()
  /*----------------------------------------------------------------------------*/
  /* MÉTODOS */
  /* Introduce la producción si no estaba anteriormente. NO provoca excepción. 
  Devuelve true si se ha podido insertar y false si no se ha podido insertar. */
  reclutarEterno(eterno) {
    // Compruebo si es de tipo Eterno
    if (eterno instanceof Eterno) {
      // some() busca en el array un elemento con ese nombre y si coincide devuelve "true"
      if (!this._eternos.some(miEterno => miEterno.nombre === eterno.nombre)) {
        // Introduzco el objeto en el array de eternos si no existe ya un eterno con ese nombre
        this._eternos.push(eterno);
        return true;
      }//end else
    }//end if

    return false; // Si no se pudo reclutar al eterno (por no ser de tipo "Eterno")
  }//end reclutarEterno(eterno)

  /* Busca el nombre y elimina los eternos que lo tengan. 
  Devuelve true si se ha podido eliminar y false si no. */
  cesarEterno(titulo) {
    // Busco el nombre del eterno
    // findIndex() devuelve el índice del primer elemento del array
    // que cumpla con las condiciones proporcionadas.
    let eternoEliminado = this._eternos.findIndex(miEterno => miEterno.nombre === titulo);

    // Si se ha podido encontrar al eterno lo elimino
    if (eternoEliminado.length > 0) {
      // splice() elimina elementos del array.
      // El "1" es la cantidad de elementos que se desea eliminar
      this._eternos.splice(eternoEliminado, 1);
      return true;
    }//end if

    return false;
  }//end cesarEterno(titulo)

  /* Busca los eternos que tengan ese cargo y
  devuelves un string con todos los datos */
  listadoCargo(cargo) {
    // Busco los eternos que tengan ese cargo
    // filter() crea un nuevo array con todos los elementos que cumplan la condición.
    let eternoConEseCargo = this._eternos.filter(miEterno => miEterno.cargo === cargo);
    let mensajeError = "¡No existen Eternos con ese cargo!";

    // Si se ha podido filtrar correctamente los eternos
    if (eternoConEseCargo.length > 0) {
      // map() itera los elementos del array
      // Es como un bucle para avanzar de un elemento a otro en el array, manteniendo el orden y la posición de cada elemento.
      return eternoConEseCargo.map(miEterno => miEterno.nombre + " - " + miEterno.cargo).join("\n");
    }//end if

    // Si no existen eternos con ese cargo determinado
    return mensajeError;
  }//end listadoCargo(cargo)

  /* Devuelve un string con todos los datos de los eternos 
  ordenados por nombre del eterno */
  listadoOrdenado() {
    // Busco el nombre de los eternos
    // sort() ordena los elementos del arra y lo devuelve ordenado
    // localeCompare() devuelve un número indicando si una cadena de carateres
    // va antes, después o si es la misma que la cadena dada en orden alfabético
    let eternosOrdenados = this._eternos.slice().sort((unEterno, otroEterno) => unEterno.nombre.localeCompare(otroEterno.nombre));

    // Si se ha podido ordenar los eternos por nombre
    if (eternosOrdenados.length > 0) {
      // map() itera los elementos del array
      // Es como un bucle para avanzar de un elemento a otro en el array, manteniendo el orden y la posición de cada elemento.
      return eternosOrdenados.map(miEterno => miEterno.nombre + " - " + miEterno.cargo).join("\n");
    }//end if
  }//end listadoOrdenado()
  /*----------------------------------------------------------------------------*/
  /* Muestra todos los datos en una tabla.  */
  toString() {
    // Abro la tabla
    let tablaEternos = "<table border='2'>";
    let resultado;

    // Encabezado de la tabla
    tablaEternos += 
    "<tr>" +
      "<th>" + "Nombre" + "</th>" +
      "<th>" + "Siglo" + "</th>" +
      "<th>" + "Realidad" + "</th>" +
      "<th>" + "Cargo" + "</th>" +
    "</tr>";

    // Filas de la tabla para cada eterno
    // forEach() itera los elementos del array
    this._eternos.forEach(miEterno => {
      tablaEternos +=
      "<tr>" +
        "<td>" + miEterno.nombre + "</td>" +
        "<td>" + miEterno.siglo + "</td>" +
        "<td>" + miEterno.realidad + "</td>" +
        "<td>" + miEterno.cargo + "</td>" +
      "</tr>";
    });

    // Cierro la tabla
    tablaEternos += "</table><br>";

    // Asigno el resultado final a la variable
    resultado ="<br><strong>Descripción:</strong> " + this.#_descripcion + "<br><br><strong>Jefe:</strong> " + this.#_objeto_jefe.toString() + "<br><br><strong>- Eternos -</strong><br><br>" + tablaEternos;

    // Devuelvo el resultado final de la tabla entera
    return resultado;
  }//end toString()
  /*----------------------------------------------------------------------------*/
}//end class Eternidad
/*----------------------------------------------------------------------------*/
