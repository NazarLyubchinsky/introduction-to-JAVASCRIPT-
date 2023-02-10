// Игра «Угадай число». Предложить пользователю загадать 
// число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя 
// «Ваше число > N, < N или == N?». В зависимости от того 
// что указал пользователь, уменьшаете диапазон. Начальный 
// диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, то изменили 
// диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

let guessedNum = Number(alert("Загадайте число от 1 до 100"));
let lowerLimit = 0;
let upperLimit = 100;
let N = 50;

while (guessedNum !== N) {
	let answer = prompt(`Ваше число >, <, или равно ${N}`, '>, <, =');
	if (answer == '>') {
		lowerLimit = N;
		N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
	} else if (answer == '<') {
		upperLimit = N;
		N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
	} else {
		break;
	};
};
alert(`Задуманное число ${N}`);