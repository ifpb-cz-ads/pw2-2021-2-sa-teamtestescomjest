const { sum } = require("../calculator");

// Exemplo com comparações entre números

it('Deveria somar dois mais dois e o resultado ser maior que três', () => {
    expect(sum(2, 2)).toBeGreaterThan(3);
});

it('Deveria somar dois mais dois e o resultado ser maior ou igual três', () => {
    expect(sum(2, 2)).toBeGreaterThanOrEqual(3);
});

it('Deveria somar dois mais dois e o resultado ser menor que cinco', () => {
    expect(sum(2, 2)).toBeLessThan(5);
});

it('Deveria somar dois mais dois e o resultado ser menor ou igual cinco', () => {
    expect(sum(2, 2)).toBeLessThanOrEqual(5);
});
