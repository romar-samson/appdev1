const person = {
  name: "Romar", 
  age: 20
};

const hobbies = ["reading", "coding"];

const { name, age } = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}
printName(person);