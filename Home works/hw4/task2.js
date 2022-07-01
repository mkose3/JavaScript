// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность.

function pow(a, b) {
    var result = a;
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
}
var a = +prompt("Enter number:");
var b = +prompt("Enter number:");
alert(pow(a ,b));