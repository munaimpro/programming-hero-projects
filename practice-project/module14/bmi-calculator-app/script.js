// BMI Calculation

function calculateBMI() {
    let height = document.getElementById('height').value;
    console.log(height);
    let weight = document.getElementById('weight').value;
    console.log(weight);
    const bmiValue = document.getElementById('bmi-value');
    console.log(bmiValue);
    const bmiCategory = document.getElementById('bmi-category');
    console.log(bmiCategory);
    const bmiMessage = document.getElementById('bmi-msg');
    console.log(bmiMessage);

    if (height && weight) {
        // converting height value from feet to meter
        height = height / 3.281;
        bmi = (weight / (height ** 2)).toFixed(1);
        bmiValue.innerText = bmi;

        if (bmi < 18.5) {
            bmiCategory.innerText = "Underweight";
            bmiMessage.innerText = "Woops! Your BMI is not healthy. Focus on your health"
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory.innerText = "Normal";
            bmiMessage.innerText = "Great job! Your BMI is within the healthy range"
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory.innerText = "Overweight";
            bmiMessage.innerText = "Your health is at risk. Try to keep youself fit"
        } else {
            bmiCategory.innerText = "Obesity";
            bmiMessage.innerText = "Oh No! You'r in danger. Please follow a healthy routine"
        }
    }
}