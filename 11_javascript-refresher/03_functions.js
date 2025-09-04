function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Romar"));

const square = (num) => num * num;
console.log("Square of 4:", square(4));

function calculator(a, b) {
  return {
    sum: a + b,
    product: a * b
  };
}
console.log(calculator(3, 5));