const somatorio = require('../funcoes/somatorio');

test('Resultado de 10 + 20 + 30', () => {
  expect(somatorio([10,20,30])).toBe(60);
});

test('Resultado de 10 + 3 + 2 + 1', () => {
    expect(somatorio([10, 3, 2, 1])).toBe(16);
  });