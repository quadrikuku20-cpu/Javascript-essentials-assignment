setTimeout(function () {
    document.getElementById("profileImage").style.display = "block";
}, 10000);

// Display current date
const currentDate = new Date();

document.getElementById("currentDate").innerHTML =
    currentDate.toDateString();