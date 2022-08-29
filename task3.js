// Вывести квадрат 7 на 7 из случайных букв.

function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 25 + 65));
}

function randomSymbolsRaw(countOfRaw) {
    let result = '';
    for (let index1 = 0; index1 < countOfRaw; index1++) {
        result += getRandomSymbol();
    }
    return result;
}

for (let index1 = 0; index1 < 7; index1++) {
    console.log(randomSymbolsRaw(7));
}