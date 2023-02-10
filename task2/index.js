//  Запросить 2 числа и найти только наибольший общий делитель

const calc = (x, y) => {
	if (y !== 0) {
		const k = x % y;
		return calc(y, k);
	}
	return x;
};

alert('Введите 2 числа, щоб бы найти НОД')
let numb1 = prompt('Введите первое число');
let numb2 = prompt('Введите второе число');
alert('НОД чисел ' + numb1 + ' и ' + numb2 + ' будет: ' + calc(numb1, numb2));