//============================== task1 ====================================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(function (number, index) {
//     totalPrice += orderedItems[index];
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

//============================== task2 ====================================

// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//============================== task3 ====================================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach(function (firstNum) {
//     if (secondArray.includes(firstNum)) {
//       commonElements.push(firstNum);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//============================== task5 ====================================

// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

//============================== task6 ====================================
// Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => (totalPrice += item));

//   return totalPrice;
// };
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

//============================== task7 ====================================
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//============================== task8 ====================================

// Замени объявление функции getCommonElements() и
// коллбек для метода forEach() на стрелочные функции.

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));

//============================== task9 ====================================
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой -
// не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с
// oбновлёнными значениями.

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const numbersEven = [];
//   numbers.forEach(element => {
//     if (element % 2 !== 0) {
//       numbersEven.push(element);
//     }
//     if (element % 2 === 0) {
//       numbersEven.push(element + value);
//     }
//   });
//   return numbersEven;
//   // Пиши код выше этой строки
// }
// changeEven([1, 2, 3, 4, 5], 10);
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//============================== task10 ====================================

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.
// Обязательно используй метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths); /// [5, 4, 6, 6].

//============================== task11 ====================================
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий
// книг(свойство title) из всех объектов массива books.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
// console.log(titles);

//============================== task12 ====================================
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив
// всех жанров книг(свойство genres) из массива книг books.
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

//============================== task13 ====================================
