// 1-vazifa

// 1-masala - o'xshamadi


// 2-masala

// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];
// const newArr = [...arr1, ...arr2];
// let sum = 0;
// newArr.map(item => {
//   if (typeof item === 'number' || item === true ) {
//     sum += item;
//   }
// });
// console.log("Yig'indi:", sum);


// 3-masala

// let numbers = [3, 10, 14, 31, 6, 1, 13, 7, 11];
// let minIndex = 0;
// let minValue = numbers[0];
// numbers.map((num, index) => {
//   if (num < minValue) {
//     minValue = num;
//     minIndex = index;
//   }
// });
// console.log("Minimum qiymatning indexi", minIndex);


// 5-masala

// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];
// let arr = [...arr1, ...arr2];
// let newArr = [];

// arr.map(() => {
//   let min = Math.min(...arr);
//   newArr.push(min);
//   arr = arr.filter((num, index) => num !== min || index > arr.indexOf(min));
// });
// console.log(newArr);


// 6-masala

// let carsArr = [
//     { name: "Lasetti", price: 9000 },
//     { name: "Damas", price: 7800 },
//     { name: "Cobalt", price: 12500 },
//     { name: "Gentra", price: 14000 },
//     { name: "Onix", price: 17000 }
// ];
  
// let names = carsArr.map(car => car.name);
// console.log("Names:", names);
// let prices = carsArr.map(car => car.price);
// console.log("Prices:", prices);
  

// 7-masala

// let arr = ["Salom", "Raxmat"];
// function fn(arr, word1, word2) {
//   return arr.slice(0, 1).concat(word1, word2, arr.slice(1));
// }
// let result = fn(arr, "Hello", "World");
// console.log(result);


// 8-masala

// function reversePrompt() {
//     let promt = prompt("Ixtiyoriy son yoki So'z kiriting:");
//     let reversed = promt.split('').map((_, i) => promt[promt.length - 1 - i]).join('');
//     return reversed
// }
// console.log(reversePrompt());


// 2-vazifa 


// 1-maslaa

// const list = [
//     { id: 1, name: "Eshmat", age: 15, salary: 5000 },
//     { id: 2, name: "Toshmat", age: 25, salary: 6000 },
//     { id: 3, name: "Bolta", age: 30, salary: 7000 },
//     { id: 4, name: "Aesha", age: 20, salary: 3000 }
// ];

// function getSalaries(arr) {
//     const salaries = arr.map(employee => employee.salary);
//     const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
//     return { salaries, totalSalary };
// }
// console.log(getSalaries(list));


// 2-masala

// function fn(arr) {
//     const result = arr.reduce((max, employee) => (employee.salary > max.salary ? employee : max));
//     console.log(result.name);
// }
// fn(list);


// 3-masala

// function fn(arr, key) {
//     const sorted = arr.sort((a, b) => a[key] - b[key]);
//     console.log(sorted);
// }
// fn(list, 'salary'); ////// age yoki salary bo'yicha tartiblab beradi, birdaniga age uchun ham,name uchun ham ,salary uchun ham  qilolmadim
  

// 4-masala

// const numbers = [43, 12, 76, 23, 97, 28, 11];
// function sortArray(arr) {
//     const sortedArray = arr.sort((a, b) => a - b);
//     console.log(sortedArray);
// }
// sortArray(numbers);


// 5-masala

// const numbers = [43, 12, 76, 23, 97, 28, 11];
// function fn(arr) {
//     const minValue = arr.reduce((min, value) => (value < min ? value : min), arr[0]);
//     console.log(minValue);
// }
// fn(numbers);


// 6-masala

// function fn() {
//     let size = parseInt(prompt("Array o'lchamini kiriting:"));
//     const arr = [];
//     function addObject(index) {
//       if (index < size) {
//         let name = prompt(`${index + 1}- Ismni kiriting:`);
//         arr.push({ name });
//         addObject(index + 1);
//       }
//     }
//     addObject(0);
//     return arr.map(item => item.name);
// }
// console.log(fn());


// 7-masala

// let findID = prompt("id kiriting ") - 0
// function findItem(id) {
//     const result = list.find(emp => emp.id === id);
//     console.log(result || `id: ${findID} bolgan foydalanuvchi topilmadi`);
// }  
// findItem(findID);
