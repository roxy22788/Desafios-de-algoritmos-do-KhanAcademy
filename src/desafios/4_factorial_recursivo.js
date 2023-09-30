var factorial_recursivo = function(n) {
	// base case: 
	if (n === 0) {
	    return 1;
	}
	
	// recursive case:
    return n * factorial_recursivo(n - 1);
}; 


module.exports = factorial_recursivo;