'use strict';
function Car(name, mark) {
	this.name = name;
	this.mark = mark;
}

let audi = new Car({ name: 'Audi', mark: 'A7' });

console.log(audi);
