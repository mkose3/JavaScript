// 5. Массив watchList содержит объекты с информацией о нескольких фильмах. 
// Используйте filter и map для возврата нового массива объектов только с title и rating, 
// но где imdbRating больше или равен 8.0.
// Результат должен быть таким же как и в 4м задании - массив объектов на 2 поля, но отфильтрованный, 
// чтобы рейтинг был больше или равен 8.0

var filteredList1 = watchList.filter(function(item) {
    return item.imdbRating>=8.0;
  });
  
  var filteredList = filteredList1.map(function(item) {
    return {title: item.Title, rating: item.imdbRating};
  })
  
  
console.log(filteredList); 