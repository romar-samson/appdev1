let hobbies = ["Reading", "Gaming", "Cooking"];
hobbies.map(hobby => console.log(hobby));

let student = { name: "Romar", age: 20 };
let { name, age } = student;
console.log(name, age);

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);