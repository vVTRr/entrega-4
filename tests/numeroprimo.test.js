const num_primo = require('../funcoes/numeroprimo');

test('4 não é primo', () => {
  expect(num_primo(4)).toBe(false);
});

test('7 é primo', () => {
    expect(num_primo(7)).toBe(true);
  });