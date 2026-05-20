// Show current date
const currentDate = new Date();

document.getElementById("currentDate").innerHTML =
    currentDate.toDateString();


    // Convert from Celsius
// Convert from Celsius
function convertFromCelsius() {

    // Clear other fields to prevent chained oninput triggers
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";

    let celsius =
        parseFloat(document.getElementById("celsius").value);


    let fahrenheit =
        (celsius * 9/5) + 32;

    let kelvin =
        celsius + 273.15;

    document.getElementById("fahrenheit").value =
        fahrenheit.toFixed(2);

    document.getElementById("kelvin").value =
        kelvin.toFixed(2);
}

// Convert from Fahrenheit
function convertFromFahrenheit() {

    // Clear other fields to prevent chained oninput triggers
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").value = "";

    let fahrenheit =
        parseFloat(document.getElementById("fahrenheit").value);


    if (isNaN(fahrenheit)) {
        return;
    }

    let celsius =
        (fahrenheit - 32) * 5/9;

    let kelvin =
        celsius + 273.15;

    document.getElementById("celsius").value =
        celsius.toFixed(2);

    document.getElementById("kelvin").value =
        kelvin.toFixed(2);
}

// Convert from Kelvin
function convertFromKelvin() {

    // Clear other fields to prevent chained oninput triggers
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";

    let kelvin =
        parseFloat(document.getElementById("kelvin").value);

    if (isNaN(kelvin)) {
        return;
    }

    let celsius =
        kelvin - 273.15;

    let fahrenheit =
        (celsius * 9/5) + 32;

    document.getElementById("celsius").value =
        celsius.toFixed(2);

    document.getElementById("fahrenheit").value =
        fahrenheit.toFixed(2);
}