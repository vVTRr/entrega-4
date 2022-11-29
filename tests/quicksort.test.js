const quicksort = require('../funcoes/quicksort');

test('o array passado deve ser ordenado corretamente', () => {
  expect(quicksort([10, 50, 35, 40, 20])).toMatchObject([10, 20, 35, 40, 50]);
});

test('o array passado deve ser ordenado corretamente', () => {
    expect(quicksort([10, 3, 2, 1])).toMatchObject([1, 2, 3, 10]);
  });