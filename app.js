function getWeekDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var weekDay = weekday[d.getDay()];
    return weekDay;
}

function getWeekDayOnlyNumber(){

    return new Date().getDay();
}

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

function setVideo(){
    videoBanner = document.querySelector('video.video-banner');
    videoBanner.innerHTML = "";
    sourceVid = document.createElement('source');
    let num = ((Math.random()*7)+1);
    num = Math.round(num);
    sourceVid.setAttribute("src",`./assest/${num}.mp4`);
    sourceVid.setAttribute("type","video/mp4");
    sourceVid.textContent = "Your browser does not support the video tag.";
    videoBanner.appendChild(sourceVid);
}

//Logo P tag elemnet
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
//authuser
let authuser = 2;

timeTable = [

    ['Monday','EEDM(SU) or QM(RJ)','B2 PROJECT(KP)','B2 SEMINAR(RJ)'],
    ['Tuesday','IOT(RB)','B2 SEMINAR(RJ)','B2 PROJECT(KP)'],
    ['Wednesday','EEDM(SU) or QM(RJ)','B2 SEMINAR(RJ)','VERBAL (Prof. Mamta Sharma)'],
    ['Thursday','IOT(RB)','B2 PROJECT(KP)','VERBAL (Prof. Bhavani Singh)'],
    ['Friday','IOT(RB)','EEDM(SU) or QM(RJ)','QUANT (Prof. Abhishek Karwa)'],
    ['Saturday','EEDM(SU) or QM(RJ)','IOT(RB)','QUANT (Prof. Abhishek Karwa)'],
    ['Sunday','Its Sunday','Its Sunday','Its Sunday'],

];

meetLinks = {
    'B2 PROJECT(KP)': 'https://meet.google.com/lookup/danco6xf7j?authuser=',
    'B2 SEMINAR(RJ)':'https://meet.google.com/lookup/eoehgugsdv?authuser=',
    // 'B2 SEMINAR(RJ)': 'https://meet.google.com/lookup/c7mwo6raen?authuser=2',
    'EEDM(SU)': 'https://meet.google.com/lookup/esfasmvt7s?authuser=',
    'QM(RJ)': 'https://meet.google.com/lookup/f43zwuvuqk?authuser=',
    'IOT(RB)': 'https://meet.google.com/lookup/cqbbzdwt6l?authuser=',
    'VERBAL (Prof. Mamta Sharma)': 'https://meet.google.com/lookup/ms-sst?authuser=',
    'VERBAL (Prof. Bhavani Singh)': '#',
    'QUANT (Prof. Abhishek Karwa)': 'https://meet.google.com/lookup/sst_cse_coe?authuser='
}


let timing = ['0','09:00 AM - 09:50 AM','10:00 AM - 10:50 AM','12:20 AM - 1:10 PM'];
// let weekDay = getWeekDay();

function timeTableDisplay(weekDay){
    // removing all element in lectures div
    document.querySelector('div.lectures').innerHTML='';
    document.querySelector('div#weekDay').innerHTML = logo.innerHTML;
    
    if(weekDay>6 || weekDay<0){
        weekDay = Math.abs(weekDay%7);
    }

    let lecCount = 1;
    weekDay = getWeekDayNameByNumber(weekDay);

    timeTable.forEach(element => {
        if(element[0]==weekDay){
            element.forEach(lec => {
                if(lec == weekDay){
                    let mainDivBody = document.querySelector('div#weekDay');
                    let aTag = document.createElement('a');
                    aTag.className = 'lecItem weekDay';
                    aTag.href = '#';
                    aTag.textContent = `${lec}: (Updated)`;

                    mainDivBody.appendChild(aTag);
                }
                else if(lec == 'EEDM(SU) or QM(RJ)'){
                    let mainDivBody = document.querySelector('div.lectures');
                    let aTagEEDM = document.createElement('a');
                    let aTagQM = document.createElement('a');
                    let spanTag = document.createElement('span');
                    spanTag.textContent = `{${timing[lecCount]}}`;
    
                    aTagEEDM.href = `${meetLinks['EEDM(SU)']}${authuser}`;
                    aTagEEDM.textContent = 'EEDM(SU)';
                    aTagEEDM.target = '_blank';
    
                    aTagQM.href = `${meetLinks['QM(RJ)']}${authuser}`;
                    aTagQM.textContent = 'QM(RJ)';
                    aTagQM.target = '_blank';
                    let basePTag  = document.createElement('p');
                    basePTag.className = 'lecItemSplit'
                    basePTag.appendChild(spanTag);
                    basePTag.append(document.createElement('br'));
                    basePTag.append(` ${lecCount}) `);
                    basePTag.appendChild(aTagEEDM);
                    basePTag.append(' OR ');
                    basePTag.appendChild(aTagQM);
    
                    mainDivBody.appendChild(basePTag);
    
                    lecCount++;
    
                }
                else{
                    let mainDivBody = document.querySelector('div.lectures');
                    let aTag = document.createElement('a');
                    let spanTag = document.createElement('span');
                    spanTag.textContent = `{${timing[lecCount]}}`;
                    aTag.className = 'lecItem';
                    aTag.target = '_blank';
                    aTag.href = `${meetLinks[lec]}${authuser}`;
                    aTag.appendChild(spanTag);
                    aTag.append(document.createElement('br'));
                    aTag.append(` ${lecCount}) ${lec}`);
    
                
                    mainDivBody.appendChild(aTag);
                    
                    
                    lecCount++;
                }
                
    
            })
            
    
        }
    });
    
}

let weekDayNumber = getWeekDayOnlyNumber();

timeTableDisplay(weekDayNumber);
setVideo();



allAuthuser = document.querySelectorAll('footer ul.authuser li');

allAuthuser.forEach(authUserElement => {
    authUserElement.addEventListener('click', (e)=>{
        authuser = parseInt(authUserElement.textContent);
        timeTableDisplay(getWeekDayOnlyNumber());
    });
});

prevButton = document.querySelector('button.left');
nextButton = document.querySelector('button.right');
resetDivButton = document.querySelector('div#weekDay');

prevButton.addEventListener('click',(e)=>{
    weekDayNumber--;
    timeTableDisplay(weekDayNumber);
});

nextButton.addEventListener('click',(e)=>{
    weekDayNumber++;
    timeTableDisplay(weekDayNumber);
});

resetDivButton.addEventListener('click',(e)=>{
    timeTableDisplay(getWeekDayOnlyNumber());
})



