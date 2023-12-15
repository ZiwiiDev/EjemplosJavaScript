// Archivo 21.js
// 5! = 5 * 4 * 3 * 2 * 1
/// NO ME CAMBIES
function factorial(valor) {
    
    if (valor == 1) // Caso base
        return (1);
    else
        return (factorial(valor - 1) * valor);

}

function MCD(a, b) {

    if (b > a) {
        return MCD(b, a);
    } else
    if (b == 0) {
        return a;
    } else {
        return MCD(a - b, b);
    }
}
