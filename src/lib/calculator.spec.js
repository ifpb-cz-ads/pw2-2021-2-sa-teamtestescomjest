const {sum} = require('./calculator');

it('Deveria somar dois mais dois e o resultado ser quatro', () => {
  expect(sum(2, 2)).toBe(4);
});

it('Deveria somar dois mais dois e o resultado nao ser seis', () => {
    expect(sum(2, 2)).not.toBe(6);
  });
  