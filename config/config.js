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
        1: "Project Lab (KP) None",
        2: "Project Lab (KP) None",
        3: "BDA (RG) None",
        4:"~~~Break~~~",
        5: "No Class",
        6: "SC (RC) None or F&S (GG) None",
        7: "No Class",
    },
    Tuesday: {
        1: "Project Lab (KP) None",
        2: "Project Lab (KP) None",
        3: "BDA (RG) None",
        4:"~~~Break~~~",
        5: "No Class",
        6: "SC (RC) None or F&S (GG) None",
        7: "No Class",
    },
    Wednesday: {
        1: "BDA Lab (RG) None",
        2: "BDA Lab (RG) None",
        3: "BDA (RG) None",
        4:"~~~Break~~~",
        5: "No Class",
        6: "SC (RC) None or F&S (GG) None",
        7: "No Class",
    },
    Thursday: {
        1: "BDA (RG) None",
        2: "STV Lab (HP) None",
        3: "STV Lab (HP) None",
        4:"~~~Break~~~",
        5: "No Class",
        6: "SC (RC) None or F&S (GG) None",
        7: "No Class",
    },
    Friday: {
        1: "No Class None",
    },
    Saturday: {
        1: "No Class None",
    },
    Sunday: {
        1: "No Class None",
    },
};

/*
these link are made by using nicknames:
https://meet.google.com/lookup/nickname

authuser attribute is to specify the account,
user can have multiple gmail account in one system.
By default authuser = 2
*/
let meetLinks = {
    "Project Lab (KP) None": "https://meet.google.com/lookup/danco6xf7j?authuser=",
    "BDA (RG) None": "#",
    "~~~Break~~~": "#",
    "No Class": "#",
    "SC (RC) None or F&S (GG) None": "#",
    "BDA Lab (RG) None": "#",
    "STV Lab (HP) None": "#",
};

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


export { showVideos, do24HourFormat, timeTableObj, meetLinks, timings };