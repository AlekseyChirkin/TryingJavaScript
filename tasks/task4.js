// Создать массив, каждый элемент которого равен квадрату своего номера. Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.

let testArr = [];
let filteredArr = [];
for (let index = 0; index < 20; index++) {
    testArr[index] = index * index;
    if ((testArr[index] % 3 == 0) && (testArr[index] % 7 != 0)) {
        filteredArr.push(testArr[index]);
    }
    
}
console.log(testArr);
console.log(filteredArr);
console.log('Количество чисел в массиве, которые делятся на 3, но не делятся на 7 (кроме 0): ' + (filteredArr.length - 1));

