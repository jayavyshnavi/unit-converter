function kmToMiles() {
    let km = document.getElementById("km").value;
    let miles = km * 0.621371;
    document.getElementById("milesResult").innerText = 
        km + " km = " + miles.toFixed(2) + " miles";
}

function cToF() {
    let c = document.getElementById("celsius").value;
    let f = (c * 9/5) + 32;
    document.getElementById("fahrenheitResult").innerText = 
        c + "°C = " + f.toFixed(2) + "°F";
}