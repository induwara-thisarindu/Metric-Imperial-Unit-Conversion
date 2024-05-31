const inputBtn = document.getElementById("input_btn")
const numValue = document.getElementById("get_number")
const lengthResult = document.getElementById("Length")
const volumeResult = document.getElementById("Volume")
const massResult = document.getElementById("Mass")
const errorText = document.getElementById("error")
const toggleBtn = document.getElementById("toggle_btn");

let value
let meterToFeet
let footToMeter
let litersToGallons
let gallonsToLiters
let kilosToPounds
let poundToKilo

function applyLightMode(isLight) {
    document.body.classList.toggle("light-mode", isLight);
    document.querySelector(".container_body").classList.toggle("light-mode", isLight);
    numValue.classList.toggle("light-mode", isLight);
    inputBtn.classList.toggle("light-mode", isLight);
    lengthResult.classList.toggle("light-mode", isLight);
    volumeResult.classList.toggle("light-mode", isLight);
    massResult.classList.toggle("light-mode", isLight);
    document.querySelectorAll('#cards').forEach(card => card.classList.toggle('light-mode', isLight));
}

toggleBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    applyLightMode(isLight);
    localStorage.setItem("lightMode", isLight ? "enabled" : "disabled");
});

window.addEventListener("DOMContentLoaded", () => {
    const lightMode = localStorage.getItem("lightMode");
    if (lightMode === "enabled") {
        applyLightMode(true);
    }
});


inputBtn.addEventListener("click", function getValue() {
    value = numValue.value
    meterToFeet = (value * 3.281).toFixed(3)
    footToMeter = (value / 3.281).toFixed(3)
    litersToGallons = (value * 0.264).toFixed(3)
    gallonsToLiters = (value / 0.264).toFixed(3)
    kilosToPounds = (value * 2.204).toFixed(3)
    poundToKilo = (value / 2.204).toFixed(3)

    if (value.length === 0 ) {
        console.log("Enter a number")
        errorText.innerHTML = "Please enter a number!" 
        lengthResult.textContent = ""
        volumeResult.textContent = ""
        massResult.textContent = ""

    } else {
        errorText.innerHTML = ""
        lengthResult.textContent = `${value} meters = ${meterToFeet} feet | ${value} feet = ${footToMeter} meters`
        volumeResult.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`
        massResult.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundToKilo} kilos` 
    }
})