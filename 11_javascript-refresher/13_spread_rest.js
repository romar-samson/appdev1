const numbers = [1, 2, 3];
const user = { name: "Romar", age: 20 };

const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const newUser = { ...user, city: "Tarlac" };
console.log(newUser);

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
