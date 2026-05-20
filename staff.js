// Show current date
const currentDate = new Date();

document.getElementById("currentDate").innerHTML =
    currentDate.toDateString();


// Staff data
let staff = [

["Brielle Williamson", "Integration Specialist", "New York", "$372,000"],
["Herrod Chandler", "Sales Assistant", "San Francisco", "$137,500"],
["Rhona Davidson", "Integration Specialist", "Tokyo", "$327,900"],
["Colleen Hurst", "Javascript Developer", "San Francisco", "$205,500"],
["Sonya Frost", "Software Engineer", "Edinburgh", "$103,600"],
["Jena Gaines", "Office Manager", "London", "$90,560"],
["Quinn Flynn", "Support Lead", "Edinburgh", "$342,000"],
["Tiger Nixon", "System Architect", "Edinburgh", "$320,800"],
["Garrett Winters", "Accountant", "Tokyo", "$170,750"],
["Ashton Cox", "Junior Technical Author", "San Francisco", "$86,000"],
["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "$433,060"],
["Airi Satou", "Accountant", "Tokyo", "$162,700"],
["Charde Marshall", "Regional Director", "San Francisco", "$470,600"],
["Haley Kennedy", "Senior Marketing Designer", "London", "$313,500"],
["Tatyana Fitzpatrick", "Regional Director", "London", "$385,750"],
["Michael Silva", "Marketing Designer", "London", "$198,500"],
["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "$725,000"],
["Gloria Little", "Systems Administrator", "New York", "$237,500"],
["Bradley Greer", "Software Engineer", "London", "$132,000"],
["Dai Rios", "Personnel Lead", "Edinburgh", "$217,500"],
["Jenette Caldwell", "Development Lead", "New York", "$345,000"],
["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "$675,000"],
["Caesar Vance", "Pre-Sales Support", "New York", "$106,450"],
["Doris Wilder", "Sales Assistant", "Sidney", "$85,600"],
["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "$1,200,000"],
["Gavin Joyce", "Developer", "Edinburgh", "$92,575"],
["Jennifer Chang", "Regional Director", "Singapore", "$357,650"],
["Brenden Wagner", "Software Engineer", "San Francisco", "$206,850"],
["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "$850,000"],
["Shou Itou", "Regional Marketing", "Tokyo", "$163,000"],
["Michelle House", "Integration Specialist", "Sidney", "$95,400"],
["Suki Burks", "Developer", "London", "$114,500"],
["Prescott Bartlett", "Technical Author", "London", "$145,000"],
["Gavin Cortez", "Team Leader", "San Francisco", "$235,500"],
["Martena Mccray", "Post-Sales support", "Edinburgh", "$324,050"],
["Unity Butler", "Marketing Designer", "San Francisco", "$85,675"]

];

// Display staff table
function displayStaff() {

    let tableBody =
        document.getElementById("staffTableBody");

    tableBody.innerHTML = "";

    for (let person of staff) {

        tableBody.innerHTML += `
        <tr>
            <td>${person[0]}</td>
            <td>${person[1]}</td>
            <td>${person[2]}</td>
            <td>${person[3]}</td>
        </tr>
        `;
    }
}



// Sort by name
let nameAscending = true;

function sortByName() {

    staff.sort(function(a, b) {

        if (nameAscending) {
            return a[0].localeCompare(b[0]);
        }

        return b[0].localeCompare(a[0]);
    });

    nameAscending = !nameAscending;

    displayStaff();
}


// Sort by salary
let salaryAscending = true;

function sortBySalary() {

    staff.sort(function(a, b) {

        let salaryA =
            parseInt(a[3].replace(/[$,]/g, ""));

        let salaryB =
            parseInt(b[3].replace(/[$,]/g, ""));

        if (salaryAscending) {
            return salaryA - salaryB;
        }

        return salaryB - salaryA;
    });

    salaryAscending = !salaryAscending;

    displayStaff();
}
// Load staff
displayStaff();