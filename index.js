const jsStudent = {
    name: 'Aleksei',
    age: 36,
    sex: 'male',
    language: 'RU',
    greetings() {
        console.log('hello there!')
    },
    study() {
        console.log('Aleksei is learning JS now')
    }
}

console.table(jsStudent);

jsStudent.greetings();
jsStudent.study();
