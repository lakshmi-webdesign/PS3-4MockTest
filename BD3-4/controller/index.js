
function findFirstGradeAStudent(students) {
    return students.find((obj) => obj.grade === "A");
}

function findMathAndScienceStudent(students) {
    return students.find((student) => (student.subjects.includes("Math") && student.subjects.includes("Science")));
}

function findStudentWithNameStartingC(students) {
    return students.find((student) => student.name.startsWith("C"));
}

function findIndexOfStudentAge21(students) {
    return students.findIndex((obj) => obj.age === 21);
}

function findIndexOfGradeC(students) {
    return students.findIndex((obj) => obj.grade === "C");
}

function findIndexOfHistoryStudent(students) {
    return students.findIndex((obj) => obj.subjects.includes("History"));
}

function validateStudentNames(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === null) {
            return false
        }
        return true;
    }
}

function validateGradeEligibility(students) {
    students.forEach(element => {
        if (element.grade === null) {
            return false;
        }
    });
    return true;
}

function validateStudentSubjects(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].subjects.length === 0) {
            return false
        }
        return true;
    }
}

function getStudentsBySubject(students, subject) {
    return students.filter((obj) => obj.subjects.includes(subject));
}

function getStudentsAboveAge(students, age) {
    return students.filter((obj) => obj.age === age)
}

function calculateAverageAge(students) {
    let totalage = 0;
    let noOfStudents = students.length;
    students.forEach((obj) => {
        totalage += obj.age;
    });
    return (totalage / noOfStudents);
}

module.exports = {
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
}