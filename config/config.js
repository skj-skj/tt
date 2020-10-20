//Time Table in config.js

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
/*
Labs:
CYBER SECURITY LAB (SU)
IOT LAB (RB)
*/

let timeTableObj = {
    "Monday":{
        "1": "CYBER SECURITY LAB (SU)",
        "2": "Placement Training"
    },
    "Tuesday":{
        "1": "IOT LAB (RB)",
        "2": "Placement Training"
    },
    "Wednesday":{
        "1": "CYBER SECURITY LAB (SU)",
        "2": "Placement Training"
    },
    "Thursday":{
        "1": "IOT LAB (RB)",
        "2": "Placement Training"
    },
    "Friday":{
        "1": "CYBER SECURITY LAB (SU)",
        "2": "Placement Training"
    },
    "Saturday":{
        "1": "IOT LAB (RB)",
        "2": "Placement Training"
    },
    "Sunday":{
        "1": "No Class"
    }
}

/*
these link are made by using nicknames:
https://meet.google.com/lookup/nickname

authuser attribute is to specify the account,
user can have multiple gmail account in one system.
By default authuser = 2
*/

let meetLinks = {
    'CYBER SECURITY LAB (SU)': 'https://meet.google.com/lookup/a75muhyyoa?authuser=',
    'IOT LAB (RB)':'https://meet.google.com/lookup/erowg3243c?authuser=',
    'Placement Training':'#',
    'No Class': 'https://youtube.com/'
}

let timing = ['0','09:00 AM - 11:30 AM','12:30 PM - 1:20 PM'];

let showVideos = true;

let do24HourFormat = false;

export {
    timeTableObj, meetLinks, timing, showVideos, do24HourFormat
};

/*
let timeTableObj = {
    "Monday":{
        "1": "EEDM(SU) or QM(RJ)",
        "2": "B2 PROJECT(KP)",
        "3":"B2 SEMINAR[AC]"
    },
    "Tuesday":{
        "1": "IOT(RB)",
        "2": "B2 SEMINAR(AC)",
        "3":"B2 PROJECT(KP)"
    },
    "Wednesday":{
        "1": "EEDM(SU) or QM(RJ)",
        "2": "B2 SEMINAR(AC)",
        "3":"VERBAL (Prof. Mamta Sharma)"
    },
    "Thursday":{
        "1": "IOT(RB)",
        "2": "B2 PROJECT(KP)",
        "3":"VERBAL (Prof. Bhavani Singh)"
    },
    "Friday":{
        "1": "IOT(RB)",
        "2": "EEDM(SU) or QM(RJ)",
        "3":"QUANT (Prof. Abhishek Karwa)"
    },
    "Saturday":{
        "1": "EEDM(SU) or QM(RJ)",
        "2": "IOT(RB)",
        "3":"QUANT (Prof. Abhishek Karwa)"
    },
    "Sunday":{
        "1": "Its Sunday"
    }
}
*/

// let timing = ['0','09:00 AM - 09:50 AM','10:00 AM - 10:50 AM','12:20 PM - 1:10 PM'];

/*
let meetLinks = {
    'B2 PROJECT(KP)': 'https://meet.google.com/lookup/danco6xf7j?authuser=',
    'B2 SEMINAR[AC]':'https://meet.google.com/lookup/eoehgugsdv?authuser=',
    'B2 SEMINAR(AC)': 'https://meet.google.com/lookup/c7mwo6raen?authuser=',
    'EEDM(SU)': 'https://meet.google.com/lookup/esfasmvt7s?authuser=',
    'QM(RJ)': 'https://meet.google.com/lookup/f43zwuvuqk?authuser=',
    'IOT(RB)': 'https://meet.google.com/lookup/cqbbzdwt6l?authuser=',
    'VERBAL (Prof. Mamta Sharma)': 'https://meet.google.com/lookup/ms-sst?authuser=',
    'VERBAL (Prof. Bhavani Singh)': '#',
    'QUANT (Prof. Abhishek Karwa)': 'https://meet.google.com/lookup/sst_cse_coe?authuser=',
    'Its Sunday': 'https://youtube.com/?'
}
*/