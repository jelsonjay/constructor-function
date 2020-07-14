'use strict';
// Constructor function for Car objects
function Car(color, mark, year, plate) {
	this.color = color;
	this.mark = mark;
	this.plate = plate;
	this.year = year;
	this.name = function () {
		return this.plate + '' + this.mark;
	};
}

// Create a Person object
let audi = new Car('Blue', 'Audi A7', 2014, 'AQW85421');
let mercedes = new Car('Whait', 'Mercedes - Benz', 2018, 'HGV58741');
let lexuus = new Car('Black', 'Lexus', 2019, 'QKU8541');
let bmw = new Car('Orange', 'BMW 3 Series‎', 2016, 'WSDF258');
let porche = new Car('Red', 'Porsche 911', 2011, 'TRD2547');
let lambor = new Car('Gray', 'Lamborghini', 2013, 'KYT7854');
let jaguar = new Car('Yellow', 'Jaguar XE', 2018, 'HTJ8562');
let landerRover = new Car('White', 'Rover Range Rover Sport', 2020, 'OUY87412');
let ferrari = new Car('Yellow', 'Ferrari Enzo', 2015, 'GTO5562');

// Display result
document.querySelector('#app').innerHTML = 'My Favourite car is ' + jaguar.mark;
console.log(jaguar);
