
	// 4. Добавьте ["dog", 3] в конец переменной myArray и выведите в консоль.
    // Выведите в консоль первый элемент в каждом вложенном массиве.

    // // Setup
    // var myArray = [["John", 23], ["cat", 2]];

    var myArray = [["John", 23], ["cat", 2]];
    var newLength = myArray.push(["dog", 3])  ;
    console.log(myArray);

    var myData = myArray[0][0];
    console.log(myData);

    var myData = myArray[1][0];
    console.log(myData);

    var myData = myArray[2][0];
    console.log(myData);


