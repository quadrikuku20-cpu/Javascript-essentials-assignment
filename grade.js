// Display current date
const currentDate = new Date();

document.getElementById("currentDate").innerHTML =
    currentDate.toDateString();


    // Function to convert mark to grade
function MarkToGrade() {

    // Get user input
    let mark =
        document.getElementById("mark-input-box").value;

    // Get message elements
    let validationMessage =
        document.getElementById("validation-message");

    let result =
        document.getElementById("result");

    // Clear old messages
    validationMessage.innerHTML = "";
    result.innerHTML = "";

    // Convert input to number
    let numericalMark = parseFloat(mark);
     // Validation checks

     if (mark === "") {

    validationMessage.innerHTML =
        "Please enter a mark.";

    setTimeout(function () {

        validationMessage.innerHTML = "";

        document.getElementById("mark-input-box").value = "";

    }, 5000);

    return;
}
if (isNaN(numericalMark)) {

    validationMessage.innerHTML =
        "Please enter numbers only.";

    setTimeout(function () {

        validationMessage.innerHTML = "";

        document.getElementById("mark-input-box").value = "";

    }, 5000);

    return;
}
if (numericalMark < 0) {

    validationMessage.innerHTML =
        "Mark cannot be negative.";

    setTimeout(function () {

        validationMessage.innerHTML = "";

        document.getElementById("mark-input-box").value = "";

    }, 5000);

    return;
}

if (numericalMark > 100) {

    validationMessage.innerHTML =
        "Mark cannot be greater than 100.";

    setTimeout(function () {

        validationMessage.innerHTML = "";

        document.getElementById("mark-input-box").value = "";

    }, 5000);

    return;
}
    


    // Determine grade
    let grade;

    if (numericalMark >= 90) {
        grade = "A";
    }

    else if (numericalMark >= 80) {
        grade = "B";
    }

    else if (numericalMark >= 70) {
        grade = "C";
    }

    else if (numericalMark >= 60) {
        grade = "D";
    }
    else if (numericalMark >= 50) {
        grade = "E";
    }

    else {
        grade = "F";
    }

   


// Display grade
result.innerHTML =
    "Student Grade: " + grade;


// Reset after 5 seconds
setTimeout(function () {

    document.getElementById("mark-input-box").value = "";

    result.innerHTML = "";

    validationMessage.innerHTML = "";

}, 5000);
}
