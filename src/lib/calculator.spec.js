const {sum} = require('./calculator');

// Exemplos com igualdades

it('Deveria somar dois mais dois e o resultado ser quatro', () => {

  expect(sum(2, 2)).toBe(4);
  
  expect(sum(2, 2)).toEqual(4);
});

it('Deveria somar dois mais dois e o resultado nao ser seis', () => {
  
  expect(sum(2, 2)).not.toBe(6);

  expect(sum(2, 2)).not.toEqual(6);
});
