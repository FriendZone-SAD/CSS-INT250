// Temperature Conversion Function (Celsius to Fahrenheit)
function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    
    const celsius = parseFloat(celsiusInput.value);
    
    if (isNaN(celsius)) {
        alert("Please enter a valid number");
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
}

// Weight Conversion Function (Kilograms to Pounds)
function convertWeight() {
    const kilogramsInput = document.getElementById("kilograms");
    const poundsOutput = document.getElementById("pounds");
    
    const kilograms = parseFloat(kilogramsInput.value);
    
    if (isNaN(kilograms)) {
        alert("Please enter a valid number");
        return;
    }
    
    const pounds = kilograms * 2.2;
    poundsOutput.value = pounds.toFixed(2);
}

// Distance Conversion Function (Kilometers to Miles)
function convertDistance() {
    const kilometersInput = document.getElementById("kilometers");
    const milesOutput = document.getElementById("miles");
    
    const kilometers = parseFloat(kilometersInput.value);
    
    if (isNaN(kilometers)) {
        alert("Please enter a valid number");
        return;
    }
    
    const miles = kilometers * 0.62137;
    milesOutput.value = miles.toFixed(2);
}

// Add event listeners when page loads
document.addEventListener("DOMContentLoaded", function() {
    const convertTempBtn = document.getElementById("convertTemp");
    const convertWeightBtn = document.getElementById("convertWeight");
    const convertDistanceBtn = document.getElementById("convertDistance");
    
    if (convertTempBtn) {
        convertTempBtn.addEventListener("click", convertTemperature);
    }
    
    if (convertWeightBtn) {
        convertWeightBtn.addEventListener("click", convertWeight);
    }
    
    if (convertDistanceBtn) {
        convertDistanceBtn.addEventListener("click", convertDistance);
    }
});
