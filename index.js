var drums = document.querySelectorAll(".drum");

// for(var i = 0;i < drums.length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",handleclick);
// }
var i = 0;
while(i<drums.length){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
    i++; 
}

function handleclick(){
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    animationOnClicking(buttoninnerhtml);
    
}

document.addEventListener("keypress",keypress1);
function keypress1(event1){
   makesound(event1.key);
   animationOnClicking(event1.key);
    
}

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
        default:
            break;
       } 
}
function animationOnClicking(currentkey){
    var animate = document.querySelector("."+ currentkey);
    animate.classList.add("pressed");
    setTimeout(function(){
        animate.classList.remove("pressed");
    },100);
}