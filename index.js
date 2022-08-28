
const favoriteLanguage = 'JS';
const senseOfHumor = false;

const human = {
    name: "Aleksey",
    age: 36,
    gitUser: true
}

console.table(human)

human.weight = 90

console.table(human)

delete human.weight

console.log (human)

human["weight"] = 90

console.log (human)

const humanFace = "face"
const haveWork = "work"

human[humanFace] = "nice"
human[haveWork] = true

console.table(human)

human.pc = {
    laptop: true,
    desktop: true
}

console.table(human)
console.log(human)

human.clothes = {
    pans: 'military',
    shorts: 'red'
}

const newMan = {
    senseOfHumor,
    favoriteLanguage
}


console.table(newMan)