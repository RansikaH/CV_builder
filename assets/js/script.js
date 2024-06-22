

$(document).ready (function(){
    $('.repeater').repeater({
        initEmpty:false,
        defaultValues: {
            'text-input':''
        },
        show:function(){
            $(this).slideDown();
        },
        hide : function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(()=>{
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable :true
    })
})

//hide form block

function contactHideFunction(){
    var hide = document.getElementById("contact-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}

function aboutHideFunction(){
    var hide = document.getElementById("about-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}
function achiveHideFunction(){
    var hide = document.getElementById("achive-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}
function expHideFunction(){
    var hide = document.getElementById("exp-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}
function eduHideFunction(){
    var hide = document.getElementById("edu-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}
function projHideFunction(){
    var hide = document.getElementById("proj-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}
function skillsHideFunction(){
    var hide = document.getElementById("skills-blk");
    if(hide.style.display==="none"){
        hide.style.display = "block"
    }
    else{
        hide.style.display ="none"
    }
}





// preview title 

//Input items
const emailInput = document.getElementById("email");
const aboutInput = document.getElementById("about-text");
const achiveInput = document.getElementById("achive-title");
const expInput = document.getElementById("exp-title");
const eduInput = document.getElementById("edu-school");
const projInput = document.getElementById("proj-title");
const skillsInput = document.getElementById("skill-name");

//topic items
const contactTopic = document.getElementById("con-topic");
const aboutTopic = document.getElementById("about-topic");
const achiveTopic = document.getElementById("achive-topic");
const expTopic = document.getElementById("exp-topic");
const eduTopic = document.getElementById("edu-topic");
const projTopic = document.getElementById("proj-topic");
const SkillTopic = document.getElementById("skill-topic");

//contact topic preview
emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() !== '') {
        contactTopic.style.display = "block";
    } 
    else {
        contactTopic.style.display = "none";
    }
});

//about topic preview
aboutInput.addEventListener('input', function() {
    if (aboutInput.value.trim() !== '') {
        aboutTopic.style.display = "block";
    } 
    else {
        aboutTopic.style.display = "none";
    }
});

//achivement topic preview
achiveInput.addEventListener('input', function() {
    if (achiveInput.value.trim() !== '') {
        achiveTopic.style.display = "block";
    } 
    else {
        achiveTopic.style.display = "none";
    }
});

//experience topic preview
expInput.addEventListener('input', function() {
    if (expInput.value.trim() !== '') {
        expTopic.style.display = "block";
    } 
    else {
        expTopic.style.display = "none";
    }
});

//education topic preview
eduInput.addEventListener('input', function() {
    if (eduInput.value.trim() !== '') {
        eduTopic.style.display = "block";
    } 
    else {
        eduTopic.style.display = "none";
    }
});

//project topic preview
projInput.addEventListener('input', function() {
    if (projInput.value.trim() !== '') {
        projTopic.style.display = "block";
    } 
    else {
        projTopic.style.display = "none";
    }
});

//skill topic preview
skillsInput.addEventListener('input', function() {
    if (skillsInput.value.trim() !== '') {
        SkillTopic.style.display = "block";
    } 
    else {
        SkillTopic.style.display = "none";
    }
});