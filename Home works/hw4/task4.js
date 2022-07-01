	// 4. Напишите функцию, которая возвращает n-е число Фибоначчи.
    // Число, которое должна вернуть функция вводит пользователь.
    // Для решения используйте цикл.

    // Пользователь ввел: 6
    // Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
    // Функция должна вернуть: 8


    function fibo(n) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    n = +prompt("Enter n:");
    alert(fibo(n));
  