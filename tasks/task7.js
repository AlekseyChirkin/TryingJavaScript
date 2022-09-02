/* Дан список студентов. Элемент списка содержит фамилию, имя, отчество, год рождения, курс, номер группы, оценки по пяти предметам.
Упорядочите студентов по курсу, причем студенты одного курса располагались в алфавитном порядке.
Найдите средний балл каждой группы по каждому предмету. Определите самого старшего студента и самого младшего студентов.
Для каждой группы найдите лучшего с точки зрения успеваемости студента. 
*/

const students = [];

const fs = require('fs');
fs.readFile ('tasks/textsForTasks/students.txt', 'utf-8', (err, data) => {
    const studentsByLines = data.split('\n');
    studentsByLines.forEach((elem) => {
        const student = elem.split(' ');

        const currentStudentFromFile = {
            name: student[0] + ' ' + student[1] + ' ' + student[2],
            birthYear: student[3],
            year: student[4],
            group: student[5],
            grade1: student[6],
            grade2: student[7],
            grade3: student[8],
            grade4: student[9],
            grade5: student[10],
        }
        students.push(currentStudentFromFile);
    });

    students.sort();

    console.log(students);
});
