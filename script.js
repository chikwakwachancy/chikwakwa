function calculateGPA() {

    let c1 = Number(document.getElementById("course1").value);
    let c2 = Number(document.getElementById("course2").value);
    let c3 = Number(document.getElementById("course3").value);
    let c4 = Number(document.getElementById("course4").value);
    let c5 = Number(document.getElementById("course5").value);
    let c6 = Number(document.getElementById("course6").value);

    let average = (c1 + c2 + c3 + c4 + c5 + c6) / 6;

    let gpa;

    if (average >= 80) {
        gpa = 4.0;
    }
    else if (average >= 70) {
        gpa = 3.5;
    }
    else if (average >= 60) {
        gpa = 3.0;
    }
    else if (average >= 50) {
        gpa = 2.0;
    }
    else {
        gpa = 0.0;
    }

    document.getElementById("result").innerHTML =
        "Average: " + average.toFixed(2) +
        "<br> GPA: " + gpa;
}
