var cars = ['Ford', 'Audi', 'BMW'];

console.log(cars);
console.log(cars[0]);
console.log(cars.length);








var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');

text1.innerHTML = "Array = " + cars;
text2.innerHTML = "Array Index 0 = " + cars[0];
text3.innerHTML = "Array Length = " + cars.length;
