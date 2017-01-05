function playSound(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //console.log(audio);

  if(!audio){
    return;
  }
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e){

  if(e.propertyName !== "transform"){
    return;
  }
  console.log(e.propertyName);
  this.classList.remove('playing');
}

//getting rid of transition effect of the clicked box
const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
