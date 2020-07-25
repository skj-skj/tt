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

timeTable = [

    ['Monday','B2 PROJECT(KP)','EEDM(SU) or QM(RJ)','B2 SEMINAR(RJ)'],
    ['Tuesday','B2 SEMINAR(RJ)','IOT(RB)','B2 PROJECT(KP)'],
    ['Wednesday','B2 SEMINAR(RJ)','EEDM(SU) or QM(RJ)','VERBAL (Prof. Mamta Sharma)'],
    ['Thursday','B2 PROJECT(KP)','IOT(RB)','VERBAL (Prof. Bhavani Singh)'],
    ['Friday','EEDM(SU) or QM(RJ)','IOT(RB)','QUANT (Prof. Abhishek Karwa)'],
    ['Saturday','IOT(RB)','EEDM(SU) or QM(RJ)','QUANT (Prof. Abhishek Karwa)'],
    ['Sunday','Its Sunday','Its Sunday','Its Sunday'],

];
let lecCount = 1;
let weekDay = getWeekDay();

timeTable.forEach(element => {
    if(element[0]==weekDay){
        element.forEach(lec => {
            if(lec != weekDay){
                let mainDivBody = document.querySelector('div.lectures');
                let aTag = document.createElement('a');
                aTag.className = 'collection-item';
                aTag.href = '#';
                aTag.textContent = `${lecCount}) ${lec}`;
                mainDivBody.appendChild(aTag);
                lecCount++;                
            }
            else{
                let mainDivBody = document.querySelector('div#weekDay');
                let aTag = document.createElement('a');
                aTag.className = 'collection-item';
                aTag.href = '#';
                aTag.textContent = `${lec}:`
                mainDivBody.appendChild(aTag);
            }
            

        })
        

    }
});









