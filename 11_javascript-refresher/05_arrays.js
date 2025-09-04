let foods = ["Pizza", "Burger", "Sushi"];

foods.push("Pasta");

foods.shift();

for (let food of foods) {
  console.log(food);
}

let likedFoods = foods.map(food => `I like ${food}`);
console.log(likedFoods);