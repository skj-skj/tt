import foo from './functions.js';

function weekDayDOM(weekDay){
    // Selecting a mainDivBody element which is 'div.lectures'
    let mainDivBody = document.querySelector('div#weekDay');

    // Creating 'p' tag element
    let pTag = document.createElement('p');
    pTag.className = 'lecItem weekDay';
    pTag.textContent = `${weekDay} ${foo.shuffle(['😄','😍','😅','😎','😥','🙄',
                                          '😫','😪','🤐','😴','🥱','😝',
                                          '😒','😕','🙃','😲','😖','😤',
                                          '🤯','🤪','😵','🤬','🥺','😇',
                                          '🤫','🤭','🧐','😈','🤳','🙏',
                                          '💻','🔞','💔',])[0]}`;

    mainDivBody.appendChild(pTag);
}

function aTagDOM(theClass,link,authuser){
    // Creating 'a' Tag for the lecture/period
    let aTag = document.createElement('a');
    aTag.target = '_blank';
    aTag.href = `${link}${authuser}`;
    aTag.append(`${theClass}`);

    return aTag;
}

function spanTag(time){
    //Creating 'span' Tag for timing of the lecture/period
    let spanTag = document.createElement('span');
    // ${timing[lecCount]}
    spanTag.textContent = `{${time}}`;

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

function DOMReset(logo){
    // it empties the 'div.lectures' tag/element
    document.querySelector('div.lectures').innerHTML='';
    //'div#weekDay' tag/element's content overrided by logo element 
    document.querySelector('div#weekDay').innerHTML = logo.innerHTML;
}

export default{
    weekDayDOM, aTagDOM, spanTag, basePTag, basePTagOfMultipleClass, DOMReset
};