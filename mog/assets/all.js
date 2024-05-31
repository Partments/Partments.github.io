document.getElementById("button").addEventListener("click", function () {
  var button = this;
  button.style.animation = "fadeout 1s forwards";

  var bgAudio = document.getElementById("video-background"); 
  document.getElementById("video-background").style.display = "block";
  bgAudio.play();
});

const titles = ["~louis vuitton 💎 - nigger.xyz", "skid me >_<", "hit this site!", "skidiot", "smokin your deads!", "ManiK❤️" ];

function changeTitle() {
    let index = 0;
    return function() {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    };
}

setInterval(changeTitle(), 150);