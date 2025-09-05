import greeting, { info } from "./15_modules_export.js";

console.log(greeting());
console.log(`Name: ${info.name}, Age: ${info.age}`);