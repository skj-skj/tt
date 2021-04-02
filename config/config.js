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
    Monday: {
        1: "Self Guided Project None",
        2: "Project Lab (KP) Lab-8",
        3: "Project Lab (KP) Lab-8",
        4: "~~~Break~~~",
        5: "SC Lt-21/11 or F&S Lt-2",
        6: "BDA (JG) Lt-2",
        7: "Self Guided Project None",
    },
    Tuesday: {
        1: "BDA (JG) Lt-2",
        2: "TM (NF2) Lt-2",
        3: "Self Guided Project None",
        4: "~~~Break~~~",
        5: "SC Lt-21/11 or F&S Lt-2",
        6: "Project Lab (KP) Lab-8",
        7: "Project Lab (KP) Lab-8",
    },
    Wednesday: {
        1: "STV Lab (RJ) Lab-2",
        2: "STV Lab (RJ) Lab-2",
        3: "STV Lab (RJ) Lab-2",
        4: "~~~Break~~~",
        5: "SC Lt-21/11 or F&S Lt-2",
        6: "Self Guided Project None",
        7: "Self Guided Project None",
    },
    Thursday: {
        1: "BDA (JG) Lt-3",
        2: "Self Guided Project None",
        3: "Self Guided Project None",
        4: "~~~Break~~~",
        5: "SC Lt-21/11 or F&S Lt-2",
        6: "Project Lab (KP) Lab-5",
        7: "Project Lab (KP) Lab-5",
    },
    Friday: {
        1: "BDA (JG) Lt-2",
        2: "Self Guided Project None",
        3: "Self Guided Project None",
        4: "~~~Break~~~",
        5: "Big Data Lab (JG) Lab-1",
        6: "Big Data Lab (JG) Lab-1",
        7: "Big Data Lab (JG) Lab-1",
    },
    Saturday: { 1: "No Class None" },
    Sunday: { 1: "No Class None" },
};

// let timeTableObj = {
//     "Monday":{
//         "1": "Self Guided Project",
//         "2": "Self Guided Project",
//         "3": "Self Guided Project",
//         "4": "SC Lt-21 or F&S Lt-1 or CM",
//         "5": "BDA (JG) Lt-3",
//         "6": "Big Data Lab (JG) Lab-3"
//     },
//     "Tuesday":{
//         "1": "BDA (JG) Lt-3",
//         "2": "TM (RB) Lt-3",
//         "3": "Self Guided Project",
//         "4": "SC Lt-21 or F&S Lt-1 or CM",
//         "5": "Big Data Lab (JG) Lab-3",
//         "6": "Big Data Lab (JG) Lab-3"
//     },
//     "Wednesday":{
//         "1": "Project Lab (KP) Lab-8",
//         "2": "Project Lab (KP) Lab-8",
//         "3": "Self Guided Project",
//         "4": "SC Lt-21 or F&S Lt-1 or CM",
//         "5": "BDA (JG) Lt-2",
//         "6": "Self Guided Project"
//     },
//     "Thursday":{
//         "1": "BDA (JG) Lt-2",
//         "2": "Self Guided Project",
//         "3": "Self Guided Project",
//         "4": "SC Lt-21 or F&S Lt-1 or CM",
//         "5": "Project Lab (KP) Lab-5",
//         "6": "Project Lab (KP) Lab-5"
//     },
//     "Friday":{
//         "1": "No Class"
//     },
//     "Saturday":{
//         "1": "Project Lab (KP) Lab-8",
//         "2": "Project Lab (KP) Lab-8",
//         "3": "Self Guided Project",
//         "4": "STV Lab (RJ) Lab-2",
//         "5": "STV Lab (RJ) Lab-2",
//         "6": "STV Lab (RJ) Lab-2"
//     },
//     "Sunday":{
//         "1": "No Class"
//     }
// }

/*
these link are made by using nicknames:
https://meet.google.com/lookup/nickname

authuser attribute is to specify the account,
user can have multiple gmail account in one system.
By default authuser = 2
*/

let meetLinks = {
    "Self Guided Project None": "#",
    "SC Lt-21/11": "#",
    "F&S Lt-2": "#",
    "BDA (JG) Lt-3": "#",
    "BDA (JG) Lt-2": "#",
    "Big Data Lab (JG) Lab-1": "#",
    "TM (NF2) Lt-3": "#",
    "Project Lab (KP) Lab-8": "#",
    "Project Lab (KP) Lab-5": "#",
    "STV Lab (RJ) Lab-2": "#",
    "No Class None": "#",
    "~~~Break~~~":"#"
};

// let meetLinks = {
//     'Self Guided Project':'#',
//     'SC Lt-21':'#',
//     'F&S Lt-1':'#',
//     'CM':'#',
//     'BDA (JG) Lt-3':'#',
//     'Big Data Lab (JG) Lab-3':'#',
//     'TM (RB) Lt-3':'#',
//     'Project Lab (KP) Lab-8':'#',
//     'BDA (JG) Lt-2':'#',
//     'Project Lab (KP) Lab-5':'#',
//     'STV Lab (RJ) Lab-2':'#',
//     'No Class':'#'
// }
// let meetLinks = {}
// fetch("http://localhost:3000/tt-old/link-null",{}).then(response => meetLinks = response.json());
// fetch("http://localhost:3000/tt-old/link-null")
//   .then(response => response.json())
//   .then(data => meetLinks = data);

/*

let meetLinks = {
    'CYBER SECURITY LAB (SU)': 'https://meet.google.com/lookup/a75muhyyoa?authuser=',
    'IOT LAB (RB)':'https://meet.google.com/lookup/erowg3243c?authuser=',
    'Placement Training':'#',
    'No Class': 'https://youtube.com/'
}*/

// let timings
// // = ['0','08:00 AM - 09:00 AM','09:00 AM - 10:00 AM','10:00 AM - 11:00 AM','11:40 AM - 12:40 PM','12:40 PM - 1:40 PM','1:40 PM - 2:40 PM'];
// fetch("http://localhost:3000/tt-old/timings")
//   .then(response => response.json())
//   .then(data => {timings = data.timings;console.log(timings)});

let timings = [
    "0",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 11:40 AM",
    "11:40 AM - 12:40 PM",
    "12:40 PM - 1:40 PM",
    "1:40 PM - 2:40 PM",
];

let showVideos = true;

let do24HourFormat = false;

// let apiEndPoint = "https://mysterious-falls-79744.herokuapp.com";

// let apiLinks = {
//     "tt":`${apiEndPoint}/tt-old/tt`,
//     "links":`${apiEndPoint}/tt-old/link-null`,
//     "timings":`${apiEndPoint}/tt-old/timings`
// }

// export { showVideos, do24HourFormat, apiLinks };

export { showVideos, do24HourFormat, timeTableObj, meetLinks, timings };
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
