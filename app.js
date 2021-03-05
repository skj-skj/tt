//Welcome to Time Table B2 Project

import { showVideos, do24HourFormat, apiLinks } from "./config/config.js";
//foo is for functions which are returning some values
//DOMfoo is for DOM Manipulation functions
import foo from "./js/functions.js";
import DOMfoo from "./js/DOMFunctions.js";
import eventFoo from "./js/eventListenerFunctions.js";


//Async funtions to get api data
//Get meetlink data
async function getMeetLinksData() {
    const response = await fetch(apiLinks["links"]);
    let data = await response.json();
    return data;
}

//Get timings data
async function getTimingsData() {
    const response = await fetch(apiLinks["timings"]);
    let data = await response.json();
    return data.timings;
}

//Get TT data
async function getTTData() {
    const response = await fetch(apiLinks["tt"]);
    let data = await response.json();
    return data;
}

//Declaring variable for meetlinks,timing,tt
let meetLinks;
let timings;
let timeTableObj;
// (async ()=>{
//     meetLinks = await getMeetLinksData();
//     timings = await getTimingsData();
//     timeTableObj = await getTTData();
//     // console.log(meetLinks)
//     // console.log(timings)
//     // console.log(timeTableObj)
// })();

//authuser value used in the meetlink
let authuser = 2;
// TODO: save the value of authuser to cookies

//Todays Classes
let todayClasses;

// variable for current week day number
let weekDayNumber = foo.getWeekDayOnlyNumber();

//Funtion to Display/Render timetable to the HTML
async function timeTableDisplay(weekDay) {
    if(meetLinks==undefined || timings==undefined || timeTableObj == undefined){
        meetLinks = await getMeetLinksData();
        timings = await getTimingsData();
        timeTableObj = await getTTData();
    }
    

    DOMfoo.DOMReset(logo);
    weekDay = foo.weekDayConverter(weekDay);
    DOMfoo.weekDayDOM(weekDay);

    todayClasses = timeTableObj[weekDay];

    for (let lectureNumber in todayClasses) {
        // Select a mainDivBody element which is 'div.lectures'
        let mainDivBody = document.querySelector("div.lectures");
        // Span Tag for timings Details Display
        let spanTag = DOMfoo.spanTag(timings[lectureNumber], do24HourFormat);

        //When there is multiple classes in one given time period
        if (todayClasses[lectureNumber].includes(" or ")) {
            // Creating basePTag for Multiple Class using by appending spanTag of timeing and lecture Number
            let basePTagOfMultipleClass = DOMfoo.basePTagOfMultipleClass(
                spanTag,
                lectureNumber
            );
            // Creating Array of Class in the same time period which are spearated by 'or'
            let theClasses = todayClasses[lectureNumber].split(" or ");
            // Mapping each class with its anchor Tag using Class name, meetlink, authuser
            let aTags = theClasses.map((theClass) =>
                DOMfoo.aTagDOM(theClass, meetLinks[theClass], authuser)
            );
            // appendig anchor tag to basePTag
            aTags.forEach((aTag) => {
                basePTagOfMultipleClass.append(aTag);
                basePTagOfMultipleClass.append(" OR ");
            });
            // removing last child which is OR
            basePTagOfMultipleClass.removeChild(
                basePTagOfMultipleClass.lastChild
            );
            // appending basePTag to the main Div Body
            mainDivBody.appendChild(basePTagOfMultipleClass);
        }
        //When there is only one class in the given time period
        else {
            // Gets the Class name
            let theClass = todayClasses[lectureNumber];
            // Creating Anchor Tag of the Class using Class name, meetlink, authuser
            let aTag;
            //if there is no class
            if (theClass == "No Class") {
                aTag = DOMfoo.aTagDOM(theClass, meetLinks[theClass], "");
            } else {
                aTag = DOMfoo.aTagDOM(theClass, meetLinks[theClass], authuser);
            }

            // Creating basePTag in which appending spanTag, Lecture Number, aTag
            let basePTag = DOMfoo.basePTag(aTag, spanTag, lectureNumber);
            // appending basePTag to the main Div Body
            mainDivBody.appendChild(basePTag);
        }
    }

    // TO show videos on the webpage or not, you can set the value in the config/config.js file
    if (showVideos) {
        DOMfoo.setVideo();
    } else {
        DOMfoo.videoHide();
    }
}

// Displayes/Render the TimeTable accoring to given week day, here it is current week day
timeTableDisplay(weekDayNumber);

// selecting all authuser 'li' tag
let allAuthuser = document.querySelectorAll("footer ul.authuser li");
// adding event listener to each 'li' tag
allAuthuser.forEach((authUserElement) => {
    authUserElement.addEventListener("click", (e) => {
        // updating the value of authuser
        authuser = parseInt(authUserElement.textContent);
        // Displaying the Timetable with updated value of authuser
        timeTableDisplay(foo.getWeekDayOnlyNumber());
    });
});

// selecting left,right arrow and 'div#weekDay'
let prevButton = document.querySelector("button.left");
let nextButton = document.querySelector("button.right");
let resetDivButton = document.querySelector("header");

//Adding event listener to prevButton (left arrow),
//Decrement the value of weekDayNumber and facilitates the navigation of timetable between days
eventFoo.elementAndKeycodeEventBind(prevButton, "ArrowLeft", () => {
    weekDayNumber--;
    timeTableDisplay(weekDayNumber);
});

//Adding event listener to nextButton (right arrow)
//Increment the value of weekDayNumber and facilitates the navigation of timetable between days
eventFoo.elementAndKeycodeEventBind(nextButton, "ArrowRight", () => {
    weekDayNumber++;
    timeTableDisplay(weekDayNumber);
});

//Adding event listener to 'div#weekDay' (div where logo is situated)
eventFoo.elementAndKeycodeEventBind(resetDivButton, "ArrowUp", () => {
    weekDayNumber = foo.getWeekDayOnlyNumber();
    timeTableDisplay(foo.getWeekDayOnlyNumber());
});

//Adding Event Listener to directly join the meet or open links, And set authuser
document.addEventListener("keyup", (e) => {
    if (e.code.includes("Digit") || e.code.includes("Numpad")) {
        var keyNum = e.code.slice(-1);
        var isNumPad = e.code.includes("Numpad") ? true : false;
    } else {
        return;
    }

    if (isNumPad) {
        authuser = keyNum;
        timeTableDisplay(foo.getWeekDayOnlyNumber());
    } else {
        let theClass = todayClasses[keyNum];
        // open link only for while meetLinks exis.
        if (theClass && meetLinks[theClass] != "#") {
            window.open(`${meetLinks[theClass]}${authuser}`, "_blank");
        }
    }
});

//Join Current Class using Space Bar
document.addEventListener("keyup", (e) => {
    if (e.code == "Space" && !e.ctrlKey) {
        let currentClassNumber = foo.currentClassNumber(timings);
        let theClass =
            currentClassNumber != -1
                ? todayClasses[currentClassNumber]
                : "NULL";
        let link = meetLinks[theClass];
        if (link != "#" && !theClass.includes("or")) {
            window.open(`${link}${authuser}`, "_blank");
        }
    }
});

//Navigate Through Current Class/Lecture/Period which are/have 'OR'
let orClassCounter = 0;
let aTags;
let orJoinLink = "#";
document.addEventListener("keyup", (e) => {
    if (e.ctrlKey && e.code == "Space") {
        let currentClassNumber = foo.currentClassNumber(timings);
        let theClass =
            currentClassNumber != -1
                ? todayClasses[currentClassNumber]
                : "NULL";

        if (theClass.includes("or")) {
            let totalClassesInCurrentPeriod = theClass.split(" or ").length;
            let iterateValue = orClassCounter % totalClassesInCurrentPeriod;
            let iterateValuePlusOne =
                (orClassCounter + 1) % totalClassesInCurrentPeriod;
            aTags = document.querySelectorAll("p.lecItemSplit a");
            aTags[iterateValue].style = "border:1px solid #fff !important;";
            orJoinLink = aTags[iterateValue].href;
            aTags[iterateValuePlusOne].style = "";
            orClassCounter++;
        }
    }

    if (e.code == "ControlLeft" && aTags != null) {
        aTags.forEach((element) => {
            element.style = "";
        });
    }

    if (e.code == "ControlLeft" && orJoinLink != "#") {
        orClassCounter = 0;
        aTags = null;
        window.open(orJoinLink, "_blank");
        orJoinLink = "#";
    }
});
