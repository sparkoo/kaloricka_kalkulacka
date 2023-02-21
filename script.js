let maleInput = document.getElementById("maleInput")
maleInput.addEventListener("input", (e) => {calcBMR()})

let femaleInput = document.getElementById("femaleInput")
femaleInput.addEventListener("input", (e) => {calcBMR()})

let heightInput = document.getElementById("heightInput")
let heightInputText = document.getElementById("heightInputText")
heightInput.addEventListener("input", (e) => {
    heightInputText.value = heightInput.value + "  cm"
    calcBMR()
})

let weightInput = document.getElementById("weightInput")
let weightInputText = document.getElementById("weightInputText")
weightInput.addEventListener("input", (e) => {
    weightInputText.value = weightInput.value + "  kg"
    calcBMR()
})

let ageInput = document.getElementById("ageInput")
let ageInputText = document.getElementById("ageInputText")
ageInput.addEventListener("input", (e) => {
    ageInputText.value = ageInput.value + "  let"
    calcBMR()
})

let outputKCal = document.getElementById("outputKCal")

// BMR(ženy) = 655,0955 + (9,5634 × váha v kg) + (1,8496 × výška v cm) - (4,6756 × věk v letech)
// BMR(muži) = 66,473 + (13,7516 × váha v kg) + (5,0033 × výška v cm) - (6,755 × věk v letech)
const fConst = [655.0955, 9.5634, 1.8496, 4.6756, 1.6]
const mConst = [66.473, 13.7516, 5.0033, 6.755, 1.7]

function calcBMR() {
    let gender = document.querySelector('input[name="gender"]:checked').value
    let c = []
    if (gender === "male") {
        c = mConst
    } else {
        c = fConst
    }

    let bmr = (c[0] + (c[1] * weightInput.value) + (c[2] * heightInput.value) - (c[3] * ageInput.value)) * c[4]

    outputKCal.innerHTML = Math.round(bmr)
}

calcBMR()
