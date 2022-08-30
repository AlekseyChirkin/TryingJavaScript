// В файле содержится совокупность текстовых строк. Изменить первую букву каждого слова на заглавную. Заменить все цифры соответствующими словами.

const fs = require("fs");

fs.readFile("tasks/text4task5.txt", (err, data) => {
    if (err) throw err;

    const onlyWords = numToWords(data.toString());
    console.log(allFirstLettersUp(onlyWords));
});

function allFirstLettersUp (txt) {
    let result = '';
    for (let index = 0; index < txt.length; index++) {
        if ((txt.charAt(index-1) == ' ') && (index > 0)) {
            result += txt.charAt(index).toUpperCase();
        } else {
            result += txt.charAt(index);
        }
    }

    return result;
}

function numToWords (txt) {
    let result = '';
    for (let index = 0; index < txt.length; index++) {
        if (txt.charAt(index) == '0') {
            result += 'ноль';
        } else if (txt.charAt(index) == '1') {
            result += 'один';
        } else if (txt.charAt(index) == '2') {
            result += 'два';
        } else if (txt.charAt(index) == '3') {
            result += 'три';
        } else if (txt.charAt(index) == '4') {
            result += 'четыре';
        } else if (txt.charAt(index) == '5') {
            result += 'пять';
        } else if (txt.charAt(index) == '6') {
            result += 'шесть';
        } else if (txt.charAt(index) == '7') {
            result += 'семь';
        } else if (txt.charAt(index) == '8') {
            result += 'восемь';
        } else if (txt.charAt(index) == '9') {
            result += 'девять';
        } else {
            result += txt.charAt(index);
        }
    }

    return result;
}