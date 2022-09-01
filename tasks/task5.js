// В файле содержится совокупность текстовых строк. Изменить первую букву каждого слова на заглавную. Заменить все цифры соответствующими словами.

const fs = require("fs");

fs.readFile("tasks/textsForTasks/text4task5.txt", (err, data) => {
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
    
        const char = txt.charAt(index);

        switch (char) {
            case ('0') :
                result += 'ноль';
                break
            case ('1') :
                result += 'один';
                break
            case ('2') :
                result += 'два';
                break
            case ('3') :
                result += 'три';
                break
            case ('4') :
                result += 'четыре';
                break
            case ('5') :
                result += 'пять';
                break
            case ('6') :
                result += 'шесть';
                break
            case ('7') :
                result += 'семь';
                break
            case ('8') :
                result += 'восемь';
                break
            case ('9') :
                result += 'девять';
                break
            default: result += txt.charAt(index);
        }
    }

    return result;
}