/* Дан список студентов. Элемент списка содержит фамилию, имя, отчество, год рождения, курс, номер группы, оценки по пяти предметам.
Упорядочите студентов по курсу, причем студенты одного курса располагались в алфавитном порядке.
Найдите средний балл каждой группы по каждому предмету. Определите самого старшего студента и самого младшего студентов.
Для каждой группы найдите лучшего с точки зрения успеваемости студента. 
*/

let students1year = [];
let students2year = [];
let students3year = [];
let students4year = [];
let studentsSorted = [];

const fs = require('fs');
const studentsByLines = fs.readFileSync('tasks/textsForTasks/students.txt').toString().split('\n');

studentsByLines.forEach((elem) => {
    const student = elem.split(' ');
    const currentStudentFromFile = {
        name: student[0] + ' ' + student[1] + ' ' + student[2],
        birthYear: parseInt(student[3]),
        year: parseInt(student[4]),
        group: parseInt(student[5]),
        grade1: parseInt(student[6]),
        grade2: parseInt(student[7]),
        grade3: parseInt(student[8]),
        grade4: parseInt(student[9]),
        grade5: parseInt(student[10]),
    }
    addStudent (currentStudentFromFile);
});

sortByName(students1year);
sortByName(students2year);
sortByName(students3year);
sortByName(students4year);

studentsSorted.push.apply(studentsSorted, students1year);
studentsSorted.push.apply(studentsSorted, students2year);
studentsSorted.push.apply(studentsSorted, students3year);
studentsSorted.push.apply(studentsSorted, students4year);

studentsSorted.forEach(elem => {
    console.log(`${elem.year} курс, ${elem.group} группа, ${elem.name}`);
});

averageGradeForEveryGroup (studentsSorted);
mostAgedAndMostYoung (studentsSorted);

bestInGroup(studentsSorted);

function bestInGroup(params) {
    const students = params;

    for (let y = 1; y < 5; y++) {
        for (let g = 1; g < 5; g++) {
            let bestAverageGrade = 0;
            let bestStudent = -1;
                
            students.filter(st => st.year === y).filter(st => st.group === g).forEach((elem) => {
                const avrGrade = (elem.grade1
                                + elem.grade2
                                + elem.grade3
                                + elem.grade4
                                + elem.grade5) / 5;

                if (bestAverageGrade < avrGrade) {
                    bestAverageGrade = avrGrade;
                    bestStudent = {...elem}
                }
            });

            if (bestStudent != -1) console.log(`Лучший по успеваемости студент в ${bestStudent.group} группе (${bestStudent.year} курс) - ${bestStudent.name} (${bestAverageGrade} средний балл)`);

            // если лучших студентов в группе несколько 
            students.filter(st => st.year === y).filter(st => st.group === g).forEach((elem) => {
                const avrGrade = (elem.grade1
                                + elem.grade2
                                + elem.grade3
                                + elem.grade4
                                + elem.grade5) / 5;

                if (bestAverageGrade === avrGrade && bestStudent.name != elem.name) {
                    console.log(`Так же в учебе чертовски хорош студент ${elem.group} группы (${elem.year} курса) - ${elem.name} (${bestAverageGrade} средний балл)`);                }
            });

        }
    }
}

function mostAgedAndMostYoung (arr) {
    const students = arr;
    let ma = students[0].birthYear, my = students[0].birthYear;

    students.forEach((elem) => {
        ma = (ma <= elem.birthYear) ? ma : elem.birthYear;
        my = (my >= elem.birthYear) ? ma : elem.birthYear;
    });

    students.filter(elem => elem.birthYear == ma).forEach(elem => console.log(`Самый старший(-ие) студент(-ы) ${elem.name}, ${elem.birthYear} года рождения`));
    students.filter(elem => elem.birthYear == my).forEach(elem => console.log(`Самый молодой(-ые) студент(-ы) ${elem.name}, ${elem.birthYear} года рождения`));
}

function addStudent(student) {
    const st = student;
    switch (parseInt(st.year)) {
        case 1:
            students1year.push(st);
            break;
        case 2:
            students2year.push(st);
            break;
        case 3:
            students3year.push(st);
            break;
        case 4:
            students4year.push(st);
            break;
    }
}

function sortByName(students) {
    students.sort((a,b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;    
    });
}

function averageGradeForEveryGroup (arr) {
    const students = arr;

    for (let y = 1; y < 5; y++) {
        for (let g = 1; g < 5; g++) {
            let stCount = 0
            let averageGrade1 = 0;
            let averageGrade2 = 0;
            let averageGrade3 = 0;
            let averageGrade4 = 0;
            let averageGrade5 = 0; 
    
            students.forEach((elem) => {
                if (parseInt(elem.year) === y && parseInt(elem.group) === g) {
                    ++stCount;
                    averageGrade1 += parseInt(elem.grade1);
                    averageGrade2 += parseInt(elem.grade2);
                    averageGrade3 += parseInt(elem.grade3);
                    averageGrade4 += parseInt(elem.grade4);
                    averageGrade5 += parseInt(elem.grade5);
                }
            });

            averageGrade1 /= stCount;
            averageGrade2 /= stCount;
            averageGrade3 /= stCount;
            averageGrade4 /= stCount;
            averageGrade5 /= stCount; 

            if (stCount > 0) {
                console.log(`Средний балл ${g} группы, ${y} курс (${stCount} человек в группе) по:
                Предмет1: ${averageGrade1}
                Предмет2: ${averageGrade2}
                Предмет3: ${averageGrade3}
                Предмет4: ${averageGrade4}
                Предмет5: ${averageGrade5}`);
            }
        }
    }




}