// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

var company = [
    emp1 = {
        name: a = prompt("Введіть Ваше ім'я:"), 
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Вкажіть Ваш вік:"),
        occupation: d = prompt("Ваша професія:"),
        show: function() {
            console.log("Ім'я: " + this.name);
            console.log("Прізвище: " + this.sName);
            console.log("Вік: " + this.age + " years old");
            console.log("Професія: " + this.occupation);
        }
    },
    emp2 = {
        name: a = prompt("Введіть Ваше ім'я:"), 
        sName: b = prompt("Введіть прізвище:"),
        age: c = prompt("Вкажіть Ваш вік:"),
        occupation: d = prompt("Ваша професія:"),
        show: function() {
            console.log("Ім'я: " + this.name);
            console.log("Прізвище: " + this.sName);
            console.log("Вік: " + this.age + " years old");
            console.log("Професія: " + this.occupation);
        }
    }
]

for (var i = 0; i < company.length; i++) {
    company[i].show();
}