function clockModule() {
    var currentTime = new Date();
    
    //get the higher timeframes
    var cYear = currentTime.getYear();
    var cMonth = currentTime.getMonth();
    var cDayOfMonth = currentTime.getDate();
    
    //get the lower timeframes
    var cHours = currentTime.getHours();
    var cMinutes = currentTime.getMinutes();
    var cSeconds = currentTime.getSeconds();
    
    //get the week of the day and also the name
    var cDayOfWeek = currentTime.getDay();
    var cNameOfDay = "";
    switch (cDayOfWeek) {
        case 0: cNameOfDay = "Sunday";      break;
        case 1: cNameOfDay = "Monday";      break;
        case 2: cNameOfDay = "Tuesday";     break;
        case 3: cNameOfDay = "Wednesday";   break;
        case 4: cNameOfDay = "Thursday";    break;
        case 5: cNameOfDay = "Friday";      break;
        case 6: cNameOfDay = "Saturday";
    }
    
    //adding leading zeros
    cMinutes = addLeadingZero(cMinutes);
    cSeconds = addLeadingZero(cSeconds);
    document.getElementById('TestDisplay').innerHTML =
    "The time is: " + cHours + ":" + cMinutes + ":" + cSeconds;
    var t = setTimeout(clockModule, 500);
}

function addLeadingZero(numberToCheck) {
    if (numberToCheck < 10) {
        numberToCheck = "0" + numberToCheck
    };
    return numberToCheck;
}