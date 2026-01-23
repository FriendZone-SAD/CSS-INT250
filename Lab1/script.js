let type = "cel"
const celBut = document.getElementById("cel")
const gramsBut = document.getElementById("grams")
const meterBut = document.getElementById("meter")
const submitBut = document.getElementById("submit")

const parameter = document.getElementById("parameter")
const inputValue = document.getElementById("parameterInput")
const resultType = document.getElementById("resultType")
const result = document.getElementById("result")

celBut.addEventListener("click", () => {
    parameter.textContent = "Celcius";
    resultType.textContent = "Farenheit";
    inputValue.value = 0;
    result.textContent = "";
    type = "cel";
})

gramsBut.addEventListener("click", () => {
    parameter.textContent = "Kilograms";
    resultType.textContent = "Pounds";
    inputValue.value = 0;
    result.textContent = "";
    type = "grams";
})

meterBut.addEventListener("click", () => {
    parameter.textContent = "Kilometers";
    resultType.textContent = "Miles";
    inputValue.value = 0;
    result.textContent = "";
    type = "meter";
})

submitBut.addEventListener("click", (e) => {
    e.preventDefault();
    const value = inputValue.value;
    if (type === "cel") {
        result.textContent = (value * 9/5) + 32;
    } else if (type === "grams") {
        result.textContent = value * 2.20462;
    } else if (type === "meter") {
        result.textContent = value * 0.621371;
    }
})