function convertTemperature() {
    var tmIp = document.getElementById("temperature").value;
    var uIp = document.getElementById("unit").value;
    var resEle = document.getElementById("result");
    
    // Validate the temperature input
    if (!isNumeric(tmIp)) {
        resEle.innerText = "Enter a number";
      return;
    }
    
    var temperature = parseFloat(tmIp);
    var convertedTemperature;
    
    if (uIp === "celsius") {
      // Convert Celsius to Fahrenheit
      convertedTemperature = (temperature * 9/5) + 32;
      resEle.innerText =  convertedTemperature + "°F.";
    } else if (uIp === "fahrenheit") {
      // Convert Fahrenheit to Celsius
      convertedTemperature = (temperature - 32) * 5/9;
      resEle.innerText = convertedTemperature + "°C.";
    }
  }
  
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }