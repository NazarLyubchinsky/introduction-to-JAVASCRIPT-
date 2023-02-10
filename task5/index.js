// Запросить у пользователя 10 чисел и подсчитать, сколько 
// он ввел положительных, отрицательных и нулей. При этом 
// также посчитать, сколько четных и нечетных. Вывести 
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 1; i <= 10; i++) {
	const num = prompt("Введите число");

	if (num > 0) {
		positive++;
	};
	if (num < 0) {
		negative++;
	};
	if (num == 0) {
		zero++;
	};
	if (num % 2 == 0) {
		even++;
	};
	if (num % 2 !== 0) {
		odd++;
	}
};

alert(` Of the entered figures - positive: ${positive}, negative: ${negative}, zero: ${zero}, even: ${even}, odd: ${odd}.`)

