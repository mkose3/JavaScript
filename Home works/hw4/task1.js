// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

function calculate(a, b, sign) {
    var result;
    if (isNaN(a) || isNaN(b) )
    {
        alert("One of arguments is not a number!");
        return;
    }
    switch (sign) {
        case "+" : {
            result = a + b;
            break;
        }
        case "-" : {
            result = a - b;
            break;
        }
        case "/" : {
            result = a / b;
            break;
        }
        case "*" : {
            result = a * b;
            break;
        }
        default: {
            alert("error");
            return;
        }
    }
    return result;
}
var a = +prompt("Enter number:");
var b = +prompt("Enter number:");
var sign = prompt("Enter sign:");
result = calculate(a, b, sign);
if (result != undefined) {
    alert(result);
}

console.log(calculate);
