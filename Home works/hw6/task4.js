// 4. Массив watchList содержит объекты с информацией о нескольких фильмах. Используйте map, 
// чтобы извлечь заголовок и рейтинг из списка наблюдения и сохранить новый массив в переменной рейтинга.
// В результате, должен получится новый массив объектов, но каждый из объектов содержит 2 поля: title и imdbRating
// [
//     {
//         title: "test",
//         imdbRating: "8.8
//     },
//     {
//         title: "test2",
//         imdbRating: "5.1"
//     }
// ]

function changeRating (arr) {
    var remove = arr.map(function(item) {
        var newObj = new Object();
        newObj.title = item.Title;
        newObj.imdbRating = item.imdbRating;
  
        return newObj;
    });
    return remove;    
  }
  
console.log(changeRating(watchList));