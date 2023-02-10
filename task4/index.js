//   Определить количество цифр в введенном числе.

let entNumber = Number(prompt('Введите  число : '));
function findDigitAmount(num) {
if (num) {
	var positiveNumber = Math.sign(num) * num;
	var lengthNumber = positiveNumber.toString();
} else {
	alert('It is not number');
}
return lengthNumber.length;
}
alert(findDigitAmount(entNumber));


