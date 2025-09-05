export default function greeting() {
  return "Hello from the module!";
}

export const info = {
  name: "Romar",
  age: 20
};

console.log(greeting(), info);