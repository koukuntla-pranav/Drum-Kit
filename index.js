var drums_num = document.querySelectorAll(".drum").length;


function handle_click(){
    
    var button_html = this.innerHTML;
    make_sound(button_html);
    animation_button(button_html)
    
}

for(var i=0;i<drums_num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handle_click);
    
}


document.addEventListener("keypress",function(event){
    //console.log(event);
    make_sound(event.key);
    animation_button(event.key)
})




function make_sound(button_html){
    switch (button_html) {
        case "w":
            var tom1  = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2  = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3  = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
                var tom4  = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":
            var snare  = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash  = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick  = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
        console.log(button_html);
    }
}


function animation_button(cur_key){
    var active_button = document.querySelector("."+cur_key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");

    },150);
   
}