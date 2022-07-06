// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников,
//  и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.
    
// // sort(function(a, b) { return a > b });
// // 1, 2, 3, 5, 10, 14
// // 1, 10, 14, 2, 3,

var company = [
    emp1 = {
        name: a = prompt("Введіть Ваше ім'я:"), 
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Вкажіть Ваш вік:"),
        occupation: d = prompt("Ваша професія:"),
    },
    emp2 = {
        name: a = prompt("Введіть Ваше ім'я:"), 
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Вкажіть Ваш вік:"),
        occupation: d = prompt("Ваша професія:")
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

for (var i = 0; i < company.length; i++) {
    console.log("Ім'я: " + company[i].name);
    console.log("Прізвище: " + company[i].sName);
    console.log("Вік: " + company[i].age + " скільки років");
    console.log("Професія : " + company[i].occupation);
    console.log("Зарплата: " + company[i].salary);
}