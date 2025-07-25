function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return Math.ceil(celsius);
}
//  console.log(convertToCelsius(90))

 function describeTemperature(fahrenheit)  {
    const celsius = convertToCelsius(fahrenheit);
    if (celsius < 0 ) {
       return "very cold";
    } 
    else if (celsius < 20 ) {
       return "cold";
    } 
    else if (celsius < 30 ) {
       return "warm";
    } 
     else if (celsius < 40 ) {
       return "hot";
    } 
    else if (celsius >= 40 )
       return "very hot";
 }
//  console.log(describeTemperature(90))

 let fahrenheit = prompt("Enter fahrenheit: ");
 let celsius = convertToCelsius(fahrenheit);
 let description = describeTemperature(fahrenheit);
 alert(`It's ${celsius}°C, that's ${description}!`);