function elementAndKeycodeEventBind(domElement,keyCode,callback){
    domElement.addEventListener('click',()=>{
        callback();
    });
    document.addEventListener('keyup',(e)=>{
        if(e.code == keyCode){
            callback();
        }
    })
}

export default{
    elementAndKeycodeEventBind
};
