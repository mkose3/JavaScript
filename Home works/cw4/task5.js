// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от 0 до 10 (на дз от -10)
// Выведите массив в консоль
// Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

// Math.floor(Math.random() * 10)

function getSum () {
    let arr = [];

    for (let i = 0; i > -10; i++) {
        let randomNum = Math.floor(Math.random() * 9) - 10;
        arr.push(randomNum);
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(getSum());
