let imagCarou = ["images/Aishah-cropped.jpg", "images/Rita-Aishah-Omar.jpg", "images/screencast.jpg", "images/group.jpg", "images/medal.jpg", "images/Green-Man-A.jpg", "images/trophy.jpg"];
let captions = [
  "March 2019: Securing my place in the ladies final",
  "February 2020: Securing my place in the ladies final",
  "February 2017: Womens Team Trophy Final - Universities Pool Council",
  "February 2018: UCL 2nds Pool Team",
  "February 2017: Womens Team Trophy Final Silver Medal",
  "June 2019: CFPL Division 2 Team Winners",
  "June 2019: CFPL Ladies Individual Championship Trophy"
]
let num = 0;
let checkOn = 0;

function next() {
  let slider = document.getElementById("slider");
  let cappy = document.getElementById("caption");
  num++;
  if (num >= imagCarou.length) {
    num = 0
  }
  slider.src = imagCarou[num];
  cappy.innerHTML = captions[num];
}

function prev() {
  let slider = document.getElementById("slider");
  let cappy = document.getElementById("caption");
  num--;
  if (num < 0) {
    num = imagCarou.length - 1;
  }
  slider.src = imagCarou[num];
  cappy.innerHTML = captions[num];
}

function slideshow() {
  if (checkOn == 0) {
    auto = window.setInterval(function() {next()},2000); //can be written without window prefix
    checkOn = 1
  }
}

function pause() {
  if (checkOn == 1)
    clearInterval(auto);
    checkOn = 0
}

window.addEventListener("keydown", function(event) {
  if (event.key == "ArrowLeft") {
    prev();
  } else if (event.key == "ArrowRight") {
    next();
  }
});

window.onload = slideshow();
document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}
