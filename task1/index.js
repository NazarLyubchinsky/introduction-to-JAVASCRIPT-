//  Подсчитать сумму всех чисел в заданном пользователем диапазоне. 

let x = Number(prompt("Enter the start range"));
let y = Number(prompt("Enter the end of the range"));

function array(...params) {
	let arr = [];
	for (i = x; i <= y; i++) {
		arr.push(i);
	}
	return arr;
}
function sum(...params) {
	let sumOfArray = 0;
	for (const iterator of array()) {
		sumOfArray += iterator;
	}
	return sumOfArray;
}
alert(sum());