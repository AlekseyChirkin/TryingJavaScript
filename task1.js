// Пользователь вводит три числа. Найти сумму тех чисел, которые делятся на 5. Если таких чисел нет, то вывести error.
let num1 = prompt("Введите первое число: ");
let num2 = prompt("Введите второе число: ");    
let num3 = prompt("Введите третье число: ");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

let result = 0;

if (num1 % 5 == 0) result += num1;
if (num2 % 5 == 0) result += num2;
if (num3 % 5 == 0) result += num3;
if (result != 0) alert(result);
else alert('Error!!!');

