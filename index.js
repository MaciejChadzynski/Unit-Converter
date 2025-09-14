/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convInput = document.getElementById("conv-input")
let btnConv = document.getElementById("btn-conv")
let lenRes = document.getElementById("len-res")
let volRes = document.getElementById("vol-res")
let masRes = document.getElementById("mas-res")

btnConv.addEventListener("click", function() {
    if (!convInput.value || isNaN(convInput.value)) {
        lenRes.innerHTML = `<p class="error">Please type your unit first</p>`
        volRes.innerHTML = `<p class="error">Please type your unit first</p>`
        masRes.innerHTML = `<p class="error">Please type your unit first</p>`
    } else {
    let inputValue = Number(convInput.value)
    let meterToFeet = inputValue * 3.281
    let feetToMeter = inputValue / 3.281
    let litersToGallons = inputValue * 0.264
    let gallonsToMeters = inputValue / 0.264
    let kilogramsToPounds = inputValue * 2.204
    let poundsToKilograms = inputValue / 2.204
    
    let resOne = `${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`
    let resTwo = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToMeters.toFixed(3)} liters`
    let resThree = `${inputValue} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilograms.toFixed(3)} kilograms`
    
    lenRes.innerHTML = resOne
    volRes.innerHTML = resTwo
    masRes.innerHTML = resThree
    }
})