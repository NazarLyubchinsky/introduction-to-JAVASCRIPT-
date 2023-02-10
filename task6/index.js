// Зациклить калькулятор. Запросить у пользователя 2 числа 
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока 
// пользователь не откажется.

do {
	let firstNumber = prompt(' Enter the first number');
	let secondNumber = prompt(' Enter a second number');
	let operator = prompt(' Enter a mathematical operator', '+, -, *, /')
	let answer = eval(`${firstNumber} ${operator} ${secondNumber}`);
	alert(`Answer ${answer}`);
	
} while (confirm(' Solve another example?'));