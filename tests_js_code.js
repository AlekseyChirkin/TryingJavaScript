const jsStudent = {
    name: 'Aleksei',
    age: 36,
    sex: 'male',
    language: 'RU',
}
try {
    setTimeout(() => {throw new Error('Прошло 3 секунды со старта программы, хватит!!!')}, 3000);
    
    throw new Error ('ОШИБКА!');
} catch (error) {
    // console.error(error);
    console.log('УУУУУ!!! Попался, ска! Вот что орёт: "' + error.message + '"');
}

const jsStudentIsStudyingTime = (student, studyTime = Date()) => ({
    ...student,
    studyTime,
})

const jsStudentIsStudyingTime2 = (student, studyTime = Date()) =>  {return {
    ...student,
    studyTime,
}}

console.log(jsStudentIsStudyingTime(jsStudent));