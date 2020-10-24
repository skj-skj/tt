import foo from './functions.js';

function weekDayDOM(weekDay){
    // Selecting a mainDivBody element which is 'div.lectures'
    let mainPTag = document.querySelector('header p.weekDay');
    mainPTag.textContent = `${weekDay} ${foo.shuffle(['😄','😍','😅','😎','😥','🙄',
                                          '😫','😪','🤐','😴','🥱','😝',
                                          '😒','😕','🙃','😲','😖','😤',
                                          '🤯','🤪','😵','🤬','🥺','😇',
                                          '🤫','🤭','🧐','😈','🤳','🙏',
                                          '💻','🔞','💔','🐱‍💻'])[0]}`;
}

function aTagDOM(theClass,link,authuser,doBlankTarget=true){
  //if link is not available then Target won't be _blank to make the experience of the user smooth.
  //and remove authuser value to reduce any confusion in link
    if(link=='#'){
        doBlankTarget = false;
        authuser = '';
    }
    // Creating 'a' Tag for the lecture/period
    let aTag = document.createElement('a');
    aTag.target = (doBlankTarget)?'_blank':'';
    aTag.rel = 'noreferrer noopener';
    aTag.href = `${link}${authuser}`;
    aTag.append(`${theClass}`);
    return aTag;
}

function spanTag(time,do24HourFormat){
    if(do24HourFormat){
        time = time.split(' - ');
        time = time.map((element) => {
            return foo.to24Hour(element);
        });

        time = `${time[0]} - ${time[1]}`;
    }
    //Creating 'span' Tag for timing of the lecture/period
    let spanTag = document.createElement('span');
    spanTag.textContent = `// ${time} //`;

    return spanTag;
}

function basePTag(aTag,spanTag,lectureNumber){
    //Creating base 'p' Tag
    let basePTag = document.createElement('p');
    basePTag.className = 'lecItem';
    // appending in basePTag
    basePTag.append(spanTag);
    basePTag.append(document.createElement('br'));
    basePTag.append(`${lectureNumber}) `);
    basePTag.append(aTag);
    return basePTag;
}

function basePTagOfMultipleClass(spanTag,lectureNumber){
    let basePTag  = document.createElement('p');
    basePTag.className = 'lecItemSplit'
    basePTag.appendChild(spanTag);
    basePTag.append(document.createElement('br'));
    basePTag.append(` ${lectureNumber}) `);
    return basePTag;
}

function DOMReset(){
    // it empties the 'div.lectures' tag/element
    document.querySelector('div.lectures').innerHTML='';
}

function videoHide(){
    let vidDiv = document.querySelector('div.videoDiv');
    vidDiv.style.visibility = "hidden";
    vidDiv.style.height = "0";
}

//It is DOM Manipulation fuction for Video Element
function setVideo(){
    let videoBanner = document.querySelector('video.video-banner');
    // empties the videoBanner element
    videoBanner.pause();
    videoBanner.innerHTML = "";
    videoBanner.load();

    let sourceVid = document.createElement('source');

    // Generate Random no between 0-15
    let num = ((Math.random()*15));
    num = Math.round(num);

    sourceVid.setAttribute("src",`./assets/video/${num}.mp4`);
    sourceVid.setAttribute("type","video/mp4");
    sourceVid.textContent = "Your browser does not support the video tag.";
    videoBanner.appendChild(sourceVid);
}

export default{
    weekDayDOM, aTagDOM, spanTag, basePTag, basePTagOfMultipleClass, DOMReset, videoHide, setVideo
};