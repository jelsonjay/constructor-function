'use strict';
function Car(color, mark, year) {
	this.color = color;
	this.mark = mark;
	this.year = year;
}

let audi = new Car('Blue', 'Audi A7', 2014);
let mercedes = new Car('Whait', 'Mercedes - Benz', 2018);
let lexuus = new Car('Black', 'Lexus', 2019);
let bmw = new Car('Orange', 'BMW 3 Series‎', 2016);
let porche = new Car('Red', 'Porsche 911', 2011);
let lambor = new Car('Gray', 'Lamborghini', 2013);
let jaguar = new Car('Yellow', 'Jaguar XE', 2018);
let landerRover = new Car('White', 'Rover Range Rover Sport', 2020);

console.log(audi);
document.querySelector('#app').innerHTML = audi;
