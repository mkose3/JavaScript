// 9. Давайте произведём 5 операций с массивом.

// 9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
// 9.2 Добавьте «Рок-н-ролл» в конец.
// 9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 9.4 Удалите первый элемент массива и покажите его.
// 9.5 Вставьте «Рэп» и «Регги» в начало массива.

var styles = [['Jazz'], ['Blues']];

styles.push (['Rock-n-roll']);
console.log(styles);

styles.splice(1, 1 , ['Classic']);
console.log(styles);

var myData = styles.shift(0);
console.log(myData);

styles.unshift(['Rap'],['Raggy']);
console.log(styles);