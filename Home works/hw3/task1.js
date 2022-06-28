// 1. Сделать собственные примеры методов применяемых для массивов.

var products = ["молоко", "хліб", "макарони", "гречка"];
console.log(products);

var changedArray = products.join(" + ");
console.log("after join");
console.log(changedArray);

var newArr = changedArray.split(" ");
console.log(newArr);

console.log("********contact*****");

var cars = ["легкові автомобілі", "вантажівки", "маршрутки"];
var boats = ["яхти", "пароплави", "пором"];

var transport = cars.concat(boats);
console.log(transport);


console.log("********reverse*****");

var cars = ["легкові автомобілі", "вантажівки", "маршрутки"];
console.log(cars);
console.log(cars[0]);


cars = cars.reverse(); 
console.log(cars);


console.log("********slice*****");

var cars = ["легкові автомобілі", "вантажівки", "маршрутки"];

document.write(cars + "<br />");

var begin = 1;
var finish = -1;

var changedArray = cars.slice(begin, finish);
document.write(changedArray);



console.log("********splice*****");

var products = ["молоко", "хліб", "макарони", "гречка"];
console.log(products);

var del = products.splice(1, 2);   // Будут удалены: "Volvo", "BMW", "Ford"
console.log(del);
console.log("stay: " +  products);

products.splice(1, 0, "олія");
console.log("after: " + products);


console.log("********sort*****");

var letters = ["V", "F", "A", "L", "X"];

console.log(letters);
console.log(letters + " first item before sort: " + letters[0]);
console.log("###########");
letters.sort();
console.log(letters + " first item after sort: " + letters[0]);


console.log("********push*****");

var products = ["молоко", "хліб", "макарони", "гречка"];
console.log(products);

var newArrival = products.push("огірки");
console.log("after arrival: " + products);
console.log(newArrival);

console.log("********pop*****");

var products = ["молоко", "хліб", "макарони", "гречка", "огірки"];
console.log(products);

var delprod = products.pop("огірки");
console.log("after deleted: " + products);
console.log(delprod);


console.log("********unshift*****");

var cars = ["легкові автомобілі", "вантажівки", "маршрутки"];
console.log(cars);

var newLength = cars.unshift("пікап");
console.log("after enter пікап : " + cars);
console.log(newLength);

console.log("********shift*****");
var products = ["молоко", "хліб", "макарони", "гречка", "огірки"];
console.log(products);

var delprod  = products.shift();
console.log("deleteValue :" + delprod);










