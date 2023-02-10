//  Запросить у пользователя число и вывести все делители этого числа.
let number = Number(prompt('Введіть число '));

function numberDelitors(...params) {
	if (!number) {
		alert('Не дійсне число');
	}
	else {
		let arr = [];
		for (let i = 1; i <= number; i++) {
			if (number % i == 0) {
				arr.push(i);
			}
		}
		alert(arr);
	}
}
numberDelitors();
