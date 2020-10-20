function getWeekDay() {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var weekDay = weekday[new Date().getDay()];
    return weekDay;
}

//It returns current weekDay Number like 0,1,2...6 where 0 is Sunday, 1 is Monday and so on.
function getWeekDayOnlyNumber(){
    return new Date().getDay();
}

//It returns weekDay Name according to given number provided in the parameter
function getWeekDayNameByNumber(num){
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[num];
}

//It shuffles the given array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

//weekDay Converter
function weekDayConverter(weekDay){
    // Generate weekDay between the range of 0-6
    if(weekDay>6 || weekDay<0){
        weekDay = Math.abs(weekDay%7);
    }
    // convert weekDay which is number to weekDay as a name
    // ex: 0 => Sunday, 1 => Monday, 2 => Tuesday etc.
    return getWeekDayNameByNumber(weekDay);
}

//To get current time in AM / PM format, currently not in use: to reduce the conversions.
function getCurrentTimeInAmPm(){
    let time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

//To get current time in 24 Hour in format
function getCurrentTimeIn24Hour(){
    let time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
}

// this funciton will convert the time in AM / PM format to 24 Hours format ex: '8:00 PM' to '21:00'
function to24Hour(time){
    /*
    spliting the time variable
    index 0: time
    index 1: AM/PM
    ex: ['8:00','PM']
    */
    time = time.split(' ');
    // if the time is in PM and not 12:00 PM to 12:59 PM
    if(time[1]=="PM" && !time[0].includes('12:')){
        /*
        spliting time and hour by ':'
        index 0: hour
        index 1: minute
        ex: ['8','00']
        */
        let timeHourMinute = time[0].split(":");
        // adding 12 to hour
        timeHourMinute[0] = Number(timeHourMinute[0])+12;
        //creating the String as hour:minute
        timeHourMinute = `${timeHourMinute[0]}:${timeHourMinute[1]}`
        return timeHourMinute;
    }else {
        // no need to convet AM, so just return the time part.
        return time[0];
    }
}

// to convert time to decimal, like 10:30 to 10.5, for ease of calcution in the isTimeinTheGivenRange.
function timeToDecimal(time){
    time = time.split(':');
    let hour = Number(time[0]);
    let minute = Number(time[1]);
    // to convert minute to decimal and Math.trunc() to ignore the value after decimal point, if we dont do that 'NaN' Error occur ex: hour = 1, decimalMinute = 1.66 the value which will return will be 1.1.66 which is not a number.
    let decimalMinute = Math.trunc(5/3*minute); // 5 divideBy 3 is to calculate min to Decimal ex: 30 * (5/3) = 50, as we know 30 is half hour
    return Number(`${hour}.${decimalMinute}`)
}

// to check if the given time is in the give time range, like 10:00(24 hour format) is in the range '9:00 AM - 1:00 PM', here it return true
function isTimeinTheGivenRange(time,timeRange){
    // converting the given time to decimal using timeToDecimal()
    time = timeToDecimal(time);

    // creating array of timeRange where at 
    //index 0: start time
    //index 1: end time
    timeRange = timeRange.split(" - ");

    // conveting time to 24 hour formate, then to Decimal using to24Hour() and timeToDecimal function respectively.
    timeRange[0] = timeToDecimal(to24Hour(timeRange[0]));
    timeRange[1] = timeToDecimal(to24Hour(timeRange[1]));
    
    // if the start time is large, it generally happen when timeRage include the midnight like: 22.00 to 1.00,
    // where the start time is before the midnight, and end time is after the midnight
    if(timeRange[0] > timeRange[1]){
        // checking if the given time is greater that the start time, OR
        // if the given time is smaller than the end time
        /* 
        why OR?
        Example 1 (in 24 hour format): given time = 23:00, timeRange = 21:00 to 2:00
                                        here given time is in the timeRange and given time is bigger than start time, hence it can't be smaller than end time
        Example 2 (in 24 hour format): given time = 1:00, timeRange = 21:00 to 2:00
                                        here given time is ine the timeRage and smaller than end time, hence it can't be larger than start time
        */
        if(time>timeRange[0] || time<timeRange[1]){
            return true;
        }
    }
    // here the start time is less than end time
    else{
        // checking if the given time is greater that the start time, AND
        // if the given time is smaller than the end time
        /* 
        why AND?
        Example (in 24 hour format): given time = 10:00, timeRange = 9:00 to 12:00
                                    here given time is in the timeRange and given time is bigger than start time and smaller than end time.
        */
        if(time>timeRange[0] && time<timeRange[1]){
            return true;
        }
    }
    // if not in range it will return false
    return false;


}

export default{
    getWeekDay, getWeekDayOnlyNumber, getWeekDayNameByNumber, shuffle, weekDayConverter, getCurrentTimeInAmPm, isTimeinTheGivenRange, to24Hour, timeToDecimal, getCurrentTimeIn24Hour
}