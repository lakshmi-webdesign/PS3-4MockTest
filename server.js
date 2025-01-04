const express = require('express');
const cors = require('cors');
let app = express();
app.use(cors());

const {
    findFirstGradeAStudent,
    findIndexOfGradeC,
    findIndexOfHistoryStudent,
    findIndexOfStudentAge21,
    findMathAndScienceStudent,
    findStudentWithNameStartingC,
    validateGradeEligibility,
    validateStudentNames,
    validateStudentSubjects,
    getStudentsAboveAge,
    getStudentsBySubject,
    calculateAverageAge
} = require("./controller/index")

const students = [
    { id: 1, name: "Alice", age: 20, grade: "A", subjects: ["Math", "English"] },
    { id: 2, name: "Bob", age: 22, grade: "B", subjects: ["Science", "Math"] },
    { id: 3, name: "Charlie", age: 19, grade: "C", subjects: ["History", "English"] },
    { id: 4, name: "Diana", age: 21, grade: "A", subjects: ["Math", "Science"] },
    { id: 5, name: "Ethan", age: 20, grade: "B", subjects: ["English", "History"] }
];

app.listen(4000, async () => {
    console.log("server running at port", 4000)

    console.log(findFirstGradeAStudent(students));
    console.log(findMathAndScienceStudent(students));
    console.log(findStudentWithNameStartingC(students));

    console.log(findIndexOfStudentAge21(students));
    console.log(findIndexOfGradeC(students));
    console.log(findIndexOfHistoryStudent(students));

    console.log(validateStudentNames(students));
    console.log(validateGradeEligibility(students));
    console.log(validateStudentSubjects(students));

    console.log(getStudentsBySubject(students, 'Math'));
    console.log(getStudentsBySubject(students, 'History'));
    console.log(getStudentsBySubject(students, 'Art'));

    console.log(getStudentsAboveAge(students, 20));
    console.log(getStudentsAboveAge(students, 18));
    console.log(getStudentsAboveAge(students, 22));

    console.log(calculateAverageAge(students));

});