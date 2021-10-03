
let btns = document.getElementsByClassName("btno");
window.addEventListener("keydown", wave);
let keyid = [81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86];
let chkbox = document.getElementById("flexCheckDefault");

let beats = [
  "ahh.mp3",
  "boom.mp3",
  "breath.mp3",
  "buff.mp3",
  "clap.mp3",
  "click.mp3",
  "crack.mp3",
  "hat.mp3",
  "hiss.mp3",
  "kick.mp3",
  "pop.mp3",
  "snare.mp3",
];
let data = [];
for (let i = 0; i < 12; i++) {
  data[i] = { id: keyid[i], btn: btns[i], sound: beats[i] };
}
function wave(e) {
  let getid = e.keyCode;
  let result = keyid.includes(getid);
  if (result) {
    data.map((item) => {
      if (item.id == getid) {
        let finaud = item.sound;
        var audio = new Audio(finaud);
        let decision = chkbox.checked;
        if (chkbox.checked) {
          let inter = setInterval(() => {
            audio.play();
          }, 500);
          function turnOff() {
            clearInterval(inter);
          }
          chkbox.addEventListener("change", turnOff);
        } else {
          audio.play();
        }
      }
    });
  }
}
