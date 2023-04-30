// EUR to CHF = EUR * 1.1
    function chfEur(euros) {
    return euros * 1.1;
    }
    
    // Celsius to Farenheit = (celsius * 9/5) + 32
    function celsiusFarenheit(celsius) {
    return (celsius * 9/5) + 32;
    }
    
    // Liters to Gallion = liters / 3.785
    function litersGallon(liters) {
    return liters / 3.785;
    }
    
 
    // Do you want to convert?
    function display() {
    var answer = window.prompt("Do you need to convert? (yes/no)");
    if (answer == "yes"){
    return true;
    } else {
    return false;
    }
    }
    
    // Select what conversion
    function whatConversion() {
    var answer = window.prompt("Which conversion is needed?(euros/celsius/liters)");
    return answer;
    }
    
    // User input
    function inputValue() {
    var answer = window.prompt("Enter a value");
    return answer;
    }
    
    // Main
    // COntinue 
    while(askContinue()){
    var conversionType = whatConversion();
    var conversionValue = inputValue();
    var resultMessage = "The result is ";
    
    
    if(conversionType == "euros") {
        resultMessage += chfEur(Number(conversionValue)).toString;
    } else if (conversionType == "celsius"){
        resultMessage += celsiusFarenheit(Number(conversionValue)).toString;
    } else if (conversionType == "liters"){
        resultMessage += litersGallon(Number(conversionValue)).toString;
    } else {
        resultMessage = "Sorry I can not answer";
    }
    
    console.log(resultMessage);
    }