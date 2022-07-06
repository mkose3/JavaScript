// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant,
// вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, 
// изменяя значения его координат, и повторно вызавая метод GetQuadrant.


a = +prompt("ВВедіть (x):");
b = +prompt("Введіть (y):");
    if (isNaN(a) || isNaN(b)) {
        console.log("Помилка!");
    } 
    // else if (a == "" || b == "") {
    //     console.log("поля пусті");
    // }
    

    var point = {x: a, y: b};

    var GetQuadrant = function(x, y) {
        if (point.x > 0 && point.y > 0) {
            console.log("Point в першому квадранті");
        }
        else if (point.x > 0 && point.y < 0) {
            console.log("Point в другому квадранті");
        }
        else if (point.x < 0 && point.y < 0) {
            console.log("Point в другому квадранті");
        } 
        else if (point.x < 0 && point.y > 0 ) {
            console.log("Point в другому квадранті");
        }
        else if (point.x == 0 && point.y == 0) {
            console.log("Point в цунтрі");
        }

    }
    GetQuadrant();