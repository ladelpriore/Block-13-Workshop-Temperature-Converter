


let inputTemperature = prompt('What is your favorite temperature?\nEnter it in degrees Fahrenheit, and we will convert it to Celsius.');
console.log("Degree Fahrenheit:", inputTemperature);

function convertToCelsius(inputTemperature) {     //Create a function to convert the user input to Celsius.
return (inputTemperature - 32) * (5/9);}

let convertedCelsius = convertToCelsius(inputTemperature);  //Create a variable to store the converted temperature.
console.log("Degree Celsius:", convertedCelsius);

function createMessage() {     //The function will run through an If Else statement to match the user input to the right message
    let message = '';
    const numTemperature = inputTemperature * 1;

    if (numTemperature < 32) {
        message = 'very cold';
    } else if (numTemperature < 64) {
    message = 'cold';
    } else if (numTemperature < 86) {
    message = 'warm';
    } else if (numTemperature < 100) {
    message = 'hot';
    } else if (numTemperature <= 100) {
    message = 'very hot';
    } 

    return message;    //The function returns the message matching the user inputted temperature
}


let output = createMessage(inputTemperature, convertedCelsius);   //Define the inputs to the function 
console.log(output);
alert("Your " + inputTemperature + " degree Fahrenheit temperature is " + convertedCelsius + " degrees Celsius which is quite " + output + "!");


