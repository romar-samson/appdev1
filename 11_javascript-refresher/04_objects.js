let aboutMe = {
  name: "Romar",
  age: 20,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

aboutMe.introduce();

aboutMe.hobby = "Photography";
console.log(aboutMe);