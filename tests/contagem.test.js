const contagem = require('../funcoes/contagem');

test('A contagem de números até 50.55 deve ser 50', () => {
  expect(contagem(50.55)).toBe(50);
});
test('A contagem de números até 0 deve ser 0', () => {
    expect(contagem(0)).toBe(0);
  });