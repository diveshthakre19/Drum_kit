var allKeys = document.querySelectorAll(".keys").length;
for (let i = 0; i < allKeys; i++) {
  document.querySelectorAll(".keys")[i].addEventListener("click", () => {
    let buttonType = this.innerHTML;
    sound(buttonType);
  });
}

document.addEventListener("keypress", function (event) {
  sound(event.key);
  Animation(event.key)
});

function sound(key) {
  switch (key) {
    case "w":
      let soundBoom = new Audio("../sounds/boom.wav");
      soundBoom.play();
      break;
    case "a":
      let soundTom = new Audio("../sounds/tom.wav");
      soundTom.play();
      break;
    case "s":
      let soundClap = new Audio("../sounds/clap.wav");
      soundClap.play();
      break;
    case "d":
      let soundKick = new Audio("../sounds/kick.wav");
      soundKick.play();
      break;
    case "i":
      let soundRide = new Audio("../sounds/ride.wav");
      soundRide.play();
      break;
    case "j":
      let soundSnare = new Audio("../sounds/snare.wav");
      soundSnare.play();
      break;
    case "k":
      let soundTink = new Audio("../sounds/tink.wav");
      soundTink.play();
    case "l":
      let soundOpenhat = new Audio("../sounds/openhat.wav");
      soundOpenhat.play();
      break;

    default:
      break;
  }
}

function Animation(currKey){
  let playedKey = document.querySelector("."+currKey);
  playedKey.classList.add("playing");
  setTimeout(()=>{playedKey.classList.remove("playing")},100)
}