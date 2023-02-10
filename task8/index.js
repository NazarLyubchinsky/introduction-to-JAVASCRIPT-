// Зациклить вывод дней недели таким образом: «День недели. 
// Хотите увидеть следующий день?» и так до тех пор, пока 
// пользователь нажимает OK. 


const days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let currentDay = 0;
let nextDay;
do {
	alert(`День недели - ${days[currentDay]}.`);
	nextDay = confirm(' Хотите увидеть следующий день?');
	currentDay++;
	if (currentDay === days.length) {
		currentDay = 0;
	};

} while (nextDay);