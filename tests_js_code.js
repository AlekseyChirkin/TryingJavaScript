class Student {
    constructor(name, birthYear, year, group, grade1, grade2, grade3, grade4, grade5) {
        this.name = name;
        this.birthYear = parseInt(birthYear);
        this.year = parseInt(year);
        this.group = parseInt(group);
        this.grade1 = parseInt(grade1);
        this.grade2 = parseInt(grade2);
        this.grade3 = parseInt(grade3);
        this.grade4 = parseInt(grade4);
        this.grade5 = parseInt(grade5);
    }

    static alwaysDrink
}

const students = [];

const fs = require('fs');
const studentsByLines = fs.readFileSync('tasks/textsForTasks/students20.txt').toString().split('\n');

studentsByLines.forEach((elem) => {
    const student = elem.split(' ');

    const tempName = student[0] + ' ' + student[1] + ' ' + student[2];
    const tempBirthYear = student[3];
    const tempYear = student[4];
    const tempGroup = student[5];
    const tempGrade1 = student[6];
    const tempGrade2 = student[7];
    const tempGrade3 = student[8];
    const tempGrade4 = student[9];
    const tempGrade5 = student[10];

    const currentStudentFromFile = new Student(tempName, tempBirthYear, tempYear, tempGroup, tempGrade1, tempGrade2, tempGrade3, tempGrade4, tempGrade5);

    students.push(currentStudentFromFile);
});

console.log(students[0].__proto__ === Student.prototype);

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.error(error)); */

  