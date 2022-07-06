// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств:
//  name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

var company = [
    emp1 = {
        name: a = prompt("Введіть ім'я:"), 
        sName: b = prompt("Введіть прізвище:"),
        age: c = +prompt("Вкажіть вік:"),
        occupation: d = prompt("Професія:"),
    },
    emp2 = {
        name: a = prompt("Введіть ім'я:"), 
        sName: b = prompt("Введіть прізвище:"),
        age: c = +prompt("Вкажіть вік:"),
        occupation: d = prompt("Професія:"),
    }
]

function assignSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].occupation) {
            case "директор":
                arr[i].salary = 3000;
                break;
            case "менеджер":
                arr[i].salary = 1500;
                break;
            case "програміст":
                arr[i].salary = 2000;
                break;
            default:
                arr[i].salary = 1000;
        }
    }
}

assignSalary(company);

var criter = prompt("Введіть критерій (name, sName, age, occupation, salary): ");
company.sort(function (a, b) {
    switch (criter) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else { return 0; }
            break;
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else { return 0; }
            break;
        case "occupation":
            if (a["occupation"] > b["occupation"]) {
                return 1;
            }
            else if (a["occupation"] < b["occupation"]) {
                return -1;
            } else { return 0; }
            break;
        case "age":
            return a["age"] - b["age"];
            break;
        case "salary":
            return a["salary"] - b["salary"];
            break;
        default:
            alert("None");
    }
})
console.log(company);
    


