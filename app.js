//Welcome to Time Table B2 Project

// 
import {timeTableObj,meetLinks,timing} from './config/config.js';
import foo from './js/functions.js';
import DOMfoo from './js/DOMFunctions.js';

//It returns current weekDay Name like: Monday,Tuesday etc.


//Logo element is Selected used to rebuild the "div#weekDay"
let logo = document.querySelector('div#weekDay').firstElementChild;

//authuser value used in the meetlink
let authuser = 2;
// TODO: save the value of authuser to cookies


// variable for current week day number
let weekDayNumber = foo.getWeekDayOnlyNumber();


function timeTableDisplay(weekDay){

    DOMfoo.DOMReset(logo);
    weekDay = foo.weekDayConverter(weekDay);
    DOMfoo.weekDayDOM(weekDay);

    let todayClasses = timeTableObj[weekDay];

    for(let lectureNumber in todayClasses){

        // Select a mainDivBody element which is 'div.lectures'
        let mainDivBody = document.querySelector('div.lectures');
        // Span Tag for Timing Details Display
        let spanTag = DOMfoo.spanTag(timing[lectureNumber]);
        

        //When there is multiple classes in one given time period
        if(todayClasses[lectureNumber].includes('or')){
            let basePTagOfMultipleClass = DOMfoo.basePTagOfMultipleClass(spanTag,lectureNumber);
            let theClasses = todayClasses[lectureNumber].split(' or ');
            let aTags = theClasses.map(theClass => DOMfoo.aTagDOM(theClass,meetLinks[theClass],authuser));
            aTags.forEach(aTag => {
                basePTagOfMultipleClass.append(aTag);
                basePTagOfMultipleClass.append(' OR ');
            })
            basePTagOfMultipleClass.removeChild(basePTagOfMultipleClass.lastChild);
            mainDivBody.appendChild(basePTagOfMultipleClass);
        }
        //When there is only one class in the given time period
        else{
            let theClass = todayClasses[lectureNumber];
            let aTag = DOMfoo.aTagDOM(theClass,meetLinks[theClass],authuser);
            let basePTag = DOMfoo.basePTag(aTag,spanTag,lectureNumber);
            // appending 'p' tag in mainDivBody
            mainDivBody.appendChild(basePTag);
        }

        
        
    }

    foo.setVideo();

}

timeTableDisplay(weekDayNumber)

// selecting all authuser 'li' tag
let allAuthuser = document.querySelectorAll('footer ul.authuser li');
// adding event listener to each 'li' tag
allAuthuser.forEach(authUserElement => {
    authUserElement.addEventListener('click', (e)=>{
        // updating the value of authuser
        authuser = parseInt(authUserElement.textContent);
        // Displaying the Timetable with updated value of authuser
        timeTableDisplay(foo.getWeekDayOnlyNumber());
    });
});

// selecting left,right arrow and 'div#weekDay'
let prevButton = document.querySelector('button.left');
let nextButton = document.querySelector('button.right');
let resetDivButton = document.querySelector('div#weekDay');

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
    weekDayNumber = foo.getWeekDayOnlyNumber();
    timeTableDisplay(foo.getWeekDayOnlyNumber());
})