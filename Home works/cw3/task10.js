// 10. Сумма введённых чисел

// Создайте массив
// Через цикл запрашивайте у пользователя цифры
// Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитайте и верните сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
let numbers = [];
  
while (true) {
  
let value = prompt("Введите число", 0);
  
if (value === "" || value === null || !isFinite(value)) break;
  
numbers.push(+value);
}
  
let sum = 0;
for (let number of numbers) {
sum += number;
}
return sum;
}  
alert( sumInput() ); 