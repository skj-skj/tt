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

//It is DOM Manipulation fuction for Video Element
function setVideo(){
    let videoBanner = document.querySelector('video.video-banner');
    // empties the videoBanner element
    videoBanner.pause();
    videoBanner.innerHTML = "";
    videoBanner.load();

    let sourceVid = document.createElement('source');

    // Generate Random no between 1-8
    let num = ((Math.random()*7)+1);
    num = Math.round(num);

    sourceVid.setAttribute("src",`./assets/${num}.mp4`);
    sourceVid.setAttribute("type","video/mp4");
    sourceVid.textContent = "Your browser does not support the video tag.";
    videoBanner.appendChild(sourceVid);
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



export default{
    getWeekDay, getWeekDayOnlyNumber, getWeekDayNameByNumber, setVideo, shuffle, weekDayConverter
}