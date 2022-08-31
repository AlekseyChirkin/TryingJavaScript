// Дан [файл](https://yadi.sk/i/6ywJqzm93HGmy9)  с логинами и паролями. Найдите топ10 самых популярных паролей.

const fileName = 'tasks/pwd.txt';

const fs = require('fs');
    
fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
    console.error(err);
    return;
    }

    let arrayOfPasswords = [];

    // Сплитим на строки, строки на пары почта/пароль, наполняем массив только паролями
    data.toString().split('\n').forEach(element => {
        let tempPair = element.split(';');
        arrayOfPasswords.push(tempPair[1]);
    });

    console.log ('Топ популярных паролей:');
    for (let j = 0; j < 10; j++) {
        const mf = mostFreq(arrayOfPasswords);

        arrayOfPasswords = removeAllEqualsFromArray(mf, arrayOfPasswords);
        console.log((j + 1) + '. ' + mf);
    }
});

function mostFreq(arr) {
    // Ищем самый частый пароль из массива
    let mostFreqPass = '';
    let mostFreq = 0;

    // Внешний цикл перебираем пароли по очереди
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let freq = 0;

        // Внутренний цикл - смотрим сколько раз повторяется
        for (let i = 0; i < arr.length; i++) {
            if (element == arr[i]) freq++;
        }

        // если самый частый - отправляем во внешнюю переменную
        if ((freq - 1) > mostFreq) {
            mostFreq = freq - 1;
            mostFreqPass = element;
        }
    }

    return mostFreqPass;
}

function removeAllEqualsFromArray (elem, arr) {
    // собираем и возвращаем новый массив без лишнего элемента
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (element != elem) {
            newArr.push(element);
        }
    }
    return newArr;
}