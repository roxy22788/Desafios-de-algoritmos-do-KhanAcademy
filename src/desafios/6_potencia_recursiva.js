var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var potenciaRecursiva = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / potenciaRecursiva(x, n * -1);
    }
    if (isOdd(n)) {
        return x * potenciaRecursiva(x, n - 1);
    }
    if (isEven(n)) {
        var result = potenciaRecursiva(x, n/2);
        return result * result;
    }
};

module.exports = potenciaRecursiva;