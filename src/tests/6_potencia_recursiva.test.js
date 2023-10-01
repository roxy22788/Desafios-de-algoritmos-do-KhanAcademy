const potenciaRecursiva = require('../desafios/6_potencia_recursiva.js');

test('potencia recursiva 3^0', () => {
    expect(potenciaRecursiva(3, 0)).toBe(1);
});

test('potencia recursiva 3^1', () => {
    expect(potenciaRecursiva(3, 1)).toBe(3);
});

test('potencia recursiva 3^2', () => {
    expect(potenciaRecursiva(3, 2)).toBe(9);
});

test('potencia recursiva 3^3', () => {
    expect(potenciaRecursiva(3, 3)).toBe(27);
});

test('potencia recursiva 3^-1', () => {
    expect(potenciaRecursiva(3, -1)).toBe(1/3);
});

test('potencia recursiva 3^-2', () => {
    expect(potenciaRecursiva(3, -2)).toBe(1/9);
});

test('potencia recursiva 3^-3', () => {
    expect(potenciaRecursiva(3, -3)).toBe(1/27);
});

test('potencia recursiva 2^10', () => {
    expect(potenciaRecursiva(2, 10)).toBe(1024);
});