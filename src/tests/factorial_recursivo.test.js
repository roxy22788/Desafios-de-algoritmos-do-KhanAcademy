const factorialRecursivo = require('../desafios/4_factorial_recursivo.js');

test('factorial recursivo 0', () => {
    expect(factorialRecursivo(0)).toBe(1);
});

test('factorial recursivo 5', () => {
    expect(factorialRecursivo(5)).toBe(120);
});

test('factorial recursivo 2', () => {
    expect(factorialRecursivo(2)).toBe(2);
});

test('factorial recursivo 3', () => {
    expect(factorialRecursivo(3)).toBe(6);
});

test('not factorial recursivo 0', () => {
    expect(factorialRecursivo(0)).not.toBe(0);
});