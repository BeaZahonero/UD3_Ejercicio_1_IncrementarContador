//   No sé si tenemos que hacer la parte de test. No lo hemos visto en la teoría.
function sum(a, b){
  return a+b;
}

test('La suma de 2+2 es 4', () => {
  expect(sum(2,2)).toBe(4)
})