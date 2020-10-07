//Time Table in config.js

/*
Subjects:
PROJECT
EEDM or QM
SEMINAR
IOT
Maths
VERBAL
QUANT
Its Sunday
*/

let timeTableObj = {
    "Monday":{
        "1": "EEDM or QM",
        "2": "PROJECT",
        "3":"SEMINAR"
    },
    "Tuesday":{
        "1": "IOT",
        "2": "SEMINAR",
        "3":"PROJECT"
    },
    "Wednesday":{
        "1": "EEDM or QM",
        "2": "SEMINAR",
        "3":"Maths"
    },
    "Thursday":{
        "1": "IOT",
        "2": "PROJECT",
        "3":"VERBAL"
    },
    "Friday":{
        "1": "IOT",
        "2": "EEDM or QM",
        "3":"QUANT"
    },
    "Saturday":{
        "1": "EEDM or QM",
        "2": "IOT",
        "3":"QUANT"
    },
    "Sunday":{
        "1": "Its Sunday"
    }
}



/*
these link are made by using nicknames:
https://meet.google.com/lookup/nickname

example:
nickname = project-class
then link:
https://meet.google.com/lookup/project-class

authuser attribute is to specify the account,
user can have multiple gmail account in one system.
By default authuser = 2
*/

let meetLinks = {
    'PROJECT': 'https://meet.google.com/lookup/PROJECT?authuser=',
    'SEMINAR':'https://meet.google.com/lookup/SEMINAR?authuser=',
    'EEDM': 'https://meet.google.com/lookup/EEDM?authuser=',
    'QM': 'https://meet.google.com/lookup/QM?authuser=',
    'IOT': 'https://meet.google.com/lookup/IOT?authuser=',
    'Maths': 'https://meet.google.com/lookup/Maths?authuser=',
    'VERBAL': '#',
    'QUANT': 'https://meet.google.com/lookup/QUANT?authuser=',
    'Its Sunday': 'https://youtube.com/?'
}

let timing = ['0','09:00 AM - 09:50 AM','10:00 AM - 10:50 AM','12:20 PM - 1:10 PM'];

let showVideos = true;

export {
    timeTableObj, meetLinks, timing, showVideos
};