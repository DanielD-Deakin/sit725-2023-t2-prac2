// This function evaluates the sum of two given numbers (floats)
function calculate() {
    console.log('Button Has been pressed') // DEBUG

    // Getting user field inputs
    const user_input_1 = document.getElementById('num1').value;
    const user_input_2 = document.getElementById('num2').value;

    // Converting user inputs to floats
    const num1 = parseFloat(user_input_1);
    const num2 = parseFloat(user_input_2);

    // Checking if fields are populated
    if (!isNaN(num1) && !isNaN(num2)) {
        // Checking if values are numerical
        if (isInputNumerical(user_input_1) && isInputNumerical(user_input_2)) {
            const resultDiv = document.getElementById('result');
            const sum = num1 + num2; // Sum evaulation

            // Determining if the result is an integer, if true, print the result
            // as an integer. If false, print the result as a float rounded to 
            // three decimal places.
            const result = Number.isInteger(sum) ? sum : sum.toFixed(3); 
            resultDiv.innerText = result;
        } else {
            alert("Please enter valid numbers");
        }
    } else {
        alert("Please supply numbers both respective fields");
    }
}

// This function determines if the input value is numerical
function isInputNumerical(input) {
    return /^[0-9]+(\.[0-9]+)?$/.test(input);
}
