// Students file generator
// фамилию, имя, отчество, год рождения, курс, номер группы, оценки по пяти предметам

const fs = require('fs');
fs.readFile('tasks/textsForTasks/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }

    const namesArray = data.split('\n');
    let content = '';

    namesArray.forEach(element => {
        content += element.slice(0, -1) + ' ' + Math.round(Math.random() * 5 + 2000) + ' ' + Math.round(Math.random() * 4 + 1) + ' ' + Math.round(Math.random() * 6 + 1) + ' ' + Math.round(Math.random() * 3 + 2) + ' ' + Math.round(Math.random() * 3 + 2) + ' ' + Math.round(Math.random() * 3 + 2) + ' ' + Math.round(Math.random() * 3 + 2) + ' ' + Math.round(Math.random() * 3 + 2) + '\n';
    });

    fs.writeFile('tasks/textsForTasks/students.txt', content, err => {
        if (err) {
          console.error(err);
        }
    });    

    console.log(namesArray);
});