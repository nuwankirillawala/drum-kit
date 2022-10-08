var drumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumButtons ; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    chooseSound(buttonInnerHTML);
    // annonymous function
  });
}

document.addEventListener("keypress", function(event){
  chooseSound(event.key);
});

function playAudio(a){
  var audio = new Audio(a);
  audio.play();
}

function chooseSound(key){
  switch(key){
    case 'w':
      playAudio('sounds/tom-1.mp3');
      break;
    case 'a':
      playAudio('sounds/tom-2.mp3');
      break;
    case 's':
      playAudio('sounds/tom-3.mp3');
      break;
    case 'd':
      playAudio('sounds/tom-4.mp3');
      break;
    case 'j':
      playAudio('sounds/snare.mp3');
      break;
    case 'k':
      playAudio('sounds/crash.mp3');
      break;
    case 'l':
      playAudio('sounds/kick-bass.mp3');
      break;
  }
}
