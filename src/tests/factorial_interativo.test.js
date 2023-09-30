const factorialInterativo = require('../desafios/3_factorial_interativo.js');


test('factorial 0', () => {
    expect(factorialInterativo(0)).toBe(1);
});

test('factorial 5', () => {
    expect(factorialInterativo(5)).toBe(120);
})

test('factorial 10', () => {
    expect(factorialInterativo(10)).toBe(3628800);
})

test('factorial 2', () => {
    expect(factorialInterativo(2)).toBe(2);
})

test('not factorial 0', () => {
    expect(factorialInterativo(0)).not.toBe(0);
})