const students = [
    { name: "Airene", grades: [85, 90, 78] },
    { name: "Chares", grades: [60, 70, 65] },
    { name: "Keanu", grades: [95, 92, 88] },
    { name: "Jatomie", grades: [45, 55, 50] }
];


function calculateAverage(student) {
    const sum = student.grades.reduce((a, b) => a + b, 0);
    return sum / student.grades.length;
}


function findExtremes(students) {
    let highest = students[0];
    let lowest = students[0];

    students.forEach(student => {
        const avg = calculateAverage(student);
        if (avg > calculateAverage(highest)) highest = student;
        if (avg < calculateAverage(lowest)) lowest = student;
    });

    return { highest, lowest };
}


function filterAboveThreshold(students, threshold) {
    return students.filter(student => calculateAverage(student) > threshold);
}


function groupByPassFail(students, passMark = 60) {
    return {
        pass: students.filter(student => calculateAverage(student) >= passMark),
        fail: students.filter(student => calculateAverage(student) < passMark)
    };
}


function fetchAdditionalStudents() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { name: "Eloisa", grades: [72, 80, 78] },
                { name: "Elcy", grades: [40, 50, 45] }
            ]);
        }, 2000);
    });
}


(async function main() {
    console.log("Original Students:", students);


    students.forEach(s => {
        console.log(`${s.name}'s Average: ${calculateAverage(s).toFixed(2)}`);
    });


    const { highest, lowest } = findExtremes(students);
    console.log(`Highest Scorer: ${highest.name} (${calculateAverage(highest).toFixed(2)})`);
    console.log(`Lowest Scorer: ${lowest.name} (${calculateAverage(lowest).toFixed(2)})`);


    console.log("Students above 75:", filterAboveThreshold(students, 75).map(s => s.name));


    const groups = groupByPassFail(students);
    console.log("Pass:", groups.pass.map(s => s.name));
    console.log("Fail:", groups.fail.map(s => s.name));


    const newStudents = await fetchAdditionalStudents();
    const merged = [...students, ...newStudents];
    console.log("Merged Student List:", merged.map(s => s.name));
})();