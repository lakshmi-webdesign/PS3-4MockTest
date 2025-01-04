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

app.get('/students', async (req, res) => {

    let result1 = [
        await findFirstGradeAStudent(students),
        await findMathAndScienceStudent(students),
        await findStudentWithNameStartingC(students)
    ];

    let result2 = [
        await findIndexOfStudentAge21(students),
        await findIndexOfGradeC(students),
        await findIndexOfHistoryStudent(students),
    ];

    let result3 = [
        await validateStudentNames(students),
        await validateGradeEligibility(students),
        await validateStudentSubjects(students),
    ];

    let result4 = [
        await getStudentsBySubject(students, 'Math'),
        await getStudentsBySubject(students, 'History'),
        await getStudentsBySubject(students, 'Art'),

        await getStudentsAboveAge(students, 20),
        await getStudentsAboveAge(students, 18),
        await getStudentsAboveAge(students, 22),

        await calculateAverageAge(students)
    ]
    res.status(200).json({ result1, result2, result3, result4 })
});

app.listen(4000, async () => {
    console.log("server running at port", 4000)
});