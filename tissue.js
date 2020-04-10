let imagCarou = ["1.jpg", "2.jpg", "3.png"];
let num = 0;

function next() {
  let slider = document.getElementById("slider");
  num++;
  if (num >= imagCarou.length) {
    num = 0
  }
  slider.src = imagCarou[num];
}

function prev() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = imagCarou.length - 1;
  }
  slider.src = imagCarou[num];
}
