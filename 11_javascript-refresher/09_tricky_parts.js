console.log('"5" == 5 →', "5" == 5);
console.log('"5" === 5 →', "5" === 5); 

let x;
let y = null;
console.log("x:", x); 
console.log("y:", y); 

let obj = {
  name: "Romar",
  regularFunc: function () {
    console.log("regularFunc:", this.name);
  },
  arrowFunc: () => {
    console.log("arrowFunc:", this.name);
  }
};
obj.regularFunc();
obj.arrowFunc();

let arrA = [1, 2, 3];
let arrB = arrA;
arrB.push(4);
console.log("arrA:", arrA, "arrB:", arrB);

let arrC = [1, 2, 3];
let arrD = [...arrC];
arrD.push(4);
console.log("arrC:", arrC, "arrD:", arrD);
