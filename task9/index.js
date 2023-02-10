// Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.


let tables = [];

for (let i = 2; i <= 9; i++) {
	tables.push(`\n Таблица умножения ${i}:\n`);
	for (let j = 1; j <= 10; j++) {
		tables.push(`${i} * ${j} = ${i * j}; `);
	};
};
alert(tables.join(''));
console.log(tables.join(''));