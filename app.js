//Welcome to Time Table B2 Project

//It returns current weekDay Name like: Monday,Tuesday etc.
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
    videoBanner = document.querySelector('video.video-banner');
    // empties the videoBanner element
    videoBanner.pause();
    videoBanner.innerHTML = "";
    videoBanner.load();

    sourceVid = document.createElement('source');

    // Generate Random no between 1-8
    let num = ((Math.random()*7)+1);
    num = Math.round(num);

    sourceVid.setAttribute("src",`./assest/${num}.mp4`);
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

//Logo element is Selected used to rebuild the "div#weekDay"
let logo = document.querySelector('div#weekDay').firstElementChild;


/*
Subjects:
B2 PROJECT(KP)
EEDM(SU) or QM(RJ)
B2 SEMINAR(RJ)
IOT(RB)
VERBAL (Prof. Mamta Sharma)
VERBAL (Prof. Bhavani Singh)
QUANT (Prof. Abhishek Karwa)
Its Sunday
*/

//authuser value used in the meetlink
let authuser = 2;

// Heart of the project!!
/*
 Column:
 1) Days
 rest) Periods

 Row:
 Each Day Periods including WeekDay
 */
timeTable = [

    ['Monday','EEDM(SU) or QM(RJ)','B2 PROJECT(KP)','B2 SEMINAR[AC]'],
    ['Tuesday','IOT(RB)','B2 SEMINAR(AC)','B2 PROJECT(KP)'],
    ['Wednesday','EEDM(SU) or QM(RJ)','B2 SEMINAR(AC)','VERBAL (Prof. Mamta Sharma)'],
    ['Thursday','IOT(RB)','B2 PROJECT(KP)','VERBAL (Prof. Bhavani Singh)'],
    ['Friday','IOT(RB)','EEDM(SU) or QM(RJ)','QUANT (Prof. Abhishek Karwa)'],
    ['Saturday','EEDM(SU) or QM(RJ)','IOT(RB)','QUANT (Prof. Abhishek Karwa)'],
    ['Sunday','Its Sunday','Its Sunday','Its Sunday'],

];

// Google Meet Link of the lectures
/*
these link are made by using nicknames:
https://meet.google.com/lookup/nickname

authuser attribute is to specify the account,
user can have multiple gmail account in one system.
By default authuser = 2

TODO: save the value of authuser to cookies
*/
meetLinks = {
    'B2 PROJECT(KP)': 'https://meet.google.com/lookup/danco6xf7j?authuser=',
    'B2 SEMINAR[AC]':'https://meet.google.com/lookup/eoehgugsdv?authuser=',
    'B2 SEMINAR(AC)': 'https://meet.google.com/lookup/c7mwo6raen?authuser=',
    'EEDM(SU)': 'https://meet.google.com/lookup/esfasmvt7s?authuser=',
    'QM(RJ)': 'https://meet.google.com/lookup/f43zwuvuqk?authuser=',
    'IOT(RB)': 'https://meet.google.com/lookup/cqbbzdwt6l?authuser=',
    'VERBAL (Prof. Mamta Sharma)': 'https://meet.google.com/lookup/ms-sst?authuser=',
    'VERBAL (Prof. Bhavani Singh)': '#',
    'QUANT (Prof. Abhishek Karwa)': 'https://meet.google.com/lookup/sst_cse_coe?authuser='
}


// Timing of the periods
// here value in 0th index if buffer value to facilitate the DOM Manipulation
let timing = ['0','09:00 AM - 09:50 AM','10:00 AM - 10:50 AM','12:20 AM - 1:10 PM'];

// It is the DOM Manipulation Funciton
/*
it take the week day number as a parameter
is is responsible for showing timetable on the webpage
*/
function timeTableDisplay(weekDay){
    // it empties the 'div.lectures' tag/element
    document.querySelector('div.lectures').innerHTML='';
    //'div#weekDay' tag/element's content overrided by logo element 
    document.querySelector('div#weekDay').innerHTML = logo.innerHTML;
    
    // Generate weekDay between the range of 0-6
    if(weekDay>6 || weekDay<0){
        weekDay = Math.abs(weekDay%7);
    }
    // convert weekDay which is number to weekDay as a name
    // ex: 0 => Sunday, 1 => Monday, 2 => Tuesday etc.
    weekDay = getWeekDayNameByNumber(weekDay);

    // setting lecture count to 1, lecCount-1 variable at end of the loop shows current day's total no of period/lectures  
    let lecCount = 1;

    // Iterating each value of time table row by row
    timeTable.forEach(element => {
        // if value at the 0th index of the element matches the weekDay, then that element is used to process the periods.
        if(element[0]==weekDay){
            element.forEach(item => {

                // for displaying the week day on the webpage
                if(item == weekDay){

                    // Selecting a mainDivBody element which is 'div.lectures'
                    let mainDivBody = document.querySelector('div#weekDay');

                    // Creating 'a' tag element
                    let aTag = document.createElement('a');
                    aTag.className = 'lecItem weekDay';
                    aTag.href = '#';
                    aTag.textContent = `${item} ${shuffle(['😄','😍','😅','😎','😥','🙄',
                                                          '😫','😪','🤐','😴','🥱','😝',
                                                          '😒','😕','🙃','😲','😖','😤',
                                                          '🤯','🤪','😵','🤬','🥺','😇',
                                                          '🤫','🤭','🧐','😈','🤳','🙏',
                                                          '💻','🔞','💔',])[0]}`;

                    mainDivBody.appendChild(aTag);
                }

                // for EEDM & QM Lectors only
                else if(item == 'EEDM(SU) or QM(RJ)'){

                    // Select a mainDivBody element which is 'div.lectures'
                    let mainDivBody = document.querySelector('div.lectures');

                    //Creating 'a' tag for EEDM
                    let aTagEEDM = document.createElement('a');
                    aTagEEDM.href = `${meetLinks['EEDM(SU)']}${authuser}`;
                    aTagEEDM.textContent = 'EEDM(SU)';
                    aTagEEDM.target = '_blank';

                    //Creating 'a' tag for QM
                    let aTagQM = document.createElement('a');
                    aTagQM.href = `${meetLinks['QM(RJ)']}${authuser}`;
                    aTagQM.textContent = 'QM(RJ)';
                    aTagQM.target = '_blank';

                    //Creating 'span' tag for displaying timing
                    let spanTag = document.createElement('span');
                    spanTag.textContent = `{${timing[lecCount]}}`;
    
                    // Creating a 'p' tag to add/append all 'a' and 'span' tags
                    let basePTag  = document.createElement('p');
                    basePTag.className = 'lecItemSplit'
                    basePTag.appendChild(spanTag);
                    basePTag.append(document.createElement('br'));
                    basePTag.append(` ${lecCount}) `);
                    basePTag.appendChild(aTagEEDM);
                    basePTag.append(' OR ');
                    basePTag.appendChild(aTagQM);
    
                    // appending base 'p' tag in mainDivBody
                    mainDivBody.appendChild(basePTag);
                    
                    lecCount++;
                }

                // For rest of the lectures
                else{

                    // Select a mainDivBody element which is 'div.lectures'
                    let mainDivBody = document.querySelector('div.lectures');

                    // Creating 'a' Tag for the lecture/period
                    let aTag = document.createElement('a');
                    aTag.className = 'lecItem';
                    aTag.target = '_blank';
                    aTag.href = `${meetLinks[item]}${authuser}`;

                    //Creating 'span' Tag for timing of the lecture/period
                    let spanTag = document.createElement('span');
                    spanTag.textContent = `{${timing[lecCount]}}`;
                    
                    // adding 'span' Tag and lecture/period name
                    aTag.appendChild(spanTag);
                    aTag.append(document.createElement('br'));
                    aTag.append(` ${lecCount}) ${item}`);
    
                    // appending 'a' tag in mainDivBody
                    mainDivBody.appendChild(aTag);
                    
                    lecCount++;
                }
            })
        }
    });

    // Displays the Gif/Videos
    setVideo();

}

// variable for current week day number
let weekDayNumber = getWeekDayOnlyNumber();

// Displaying the Timetable by passing the week day number as parameter
timeTableDisplay(weekDayNumber);

// selecting all authuser 'li' tag
allAuthuser = document.querySelectorAll('footer ul.authuser li');
// adding event listener to each 'li' tag
allAuthuser.forEach(authUserElement => {
    authUserElement.addEventListener('click', (e)=>{
        // updating the value of authuser
        authuser = parseInt(authUserElement.textContent);
        // Displaying the Timetable with updated value of authuser
        timeTableDisplay(getWeekDayOnlyNumber());
    });
});

// selecting left,right arrow and 'div#weekDay'
prevButton = document.querySelector('button.left');
nextButton = document.querySelector('button.right');
resetDivButton = document.querySelector('div#weekDay');

//Adding event listener to prevButton (left arrow),
//Decrement the value of weekDayNumber and facilitates the navigation of timetable between days
prevButton.addEventListener('click',(e)=>{
    weekDayNumber--;
    timeTableDisplay(weekDayNumber);
});

//Adding event listener to nextButton (right arrow)
//Increment the value of weekDayNumber and facilitates the navigation of timetable between days
nextButton.addEventListener('click',(e)=>{
    weekDayNumber++;
    timeTableDisplay(weekDayNumber);
});

//Adding event listener to 'div#weekDay' (div where logo is situated)
resetDivButton.addEventListener('click',(e)=>{
    weekDayNumber = getWeekDayOnlyNumber();
    timeTableDisplay(getWeekDayOnlyNumber());
})



