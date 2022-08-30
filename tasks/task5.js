// В файле содержится совокупность текстовых строк. Изменить первую букву каждого слова на заглавную. Заменить все цифры соответствующими словами.

const fs = require("fs");

fs.readFile("tasks/text4task5.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    
    const text = data.toString();
    const words = text.split(" ");

    words.forEach (elem => {
        elem.toUpperCase();
        console.log(elem);
    });

    //console.log(words);
});



