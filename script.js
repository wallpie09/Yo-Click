var image=document.getElementById("image");
var score=document.getElementById("score");
image.style.display = "none";
var color=["black","white"];
var i = 0;
var timer;
var inter;
var time = 5;
var z = 0;
var check;
var t;
var zzz;
var score;

document.oncontextmenu = function() {
  return false;
};

function start() {

  var n = confirm("Do you want to start the game ?");
  if (n == true) {
    var x = Math.floor(17.99 * Math.random());
    var y = Math.floor(13.99 * Math.random());
    x = 6.25 + 4.5*x;
    y = 9.3+6.25*y;
    z = Math.round(Math.random());
    z++;
    if (z == 1)
      t = 0;
    else
      t = 2;

    timer = setTimeout(red, 4950);
    inter = setTimeout(gameover, 5010);
    image.style.fill= color[z-1];
    image.setAttribute("cx", x+"%");
    image.setAttribute("cy", y+"%");
    image.style.display = "block";
    changetimer(time);

    zzz = setInterval(changetimer, 1000);
  } else {
    window.close();
  }
}



function handleMouseDown(e) {

    if (e.button == t) {

      if (i < 10)
        time = 5;
      else if (i >= 10 && i < 25)
        time = 4;
      else if (i >= 25 && i < 50)
        time = 3;
      else
        time = 2;

      clearInterval(zzz);
      clearTimeout(inter);
      clearTimeout(timer);
      changetimer(time);
      var x = Math.floor(17.99 * Math.random());
      var y = Math.floor(13.99 * Math.random());
      x = 6.25 + 4.5*x;
      y = 9.3+6.25*y;
      z = Math.round(Math.random());
      z++;
      if (z == 1)
        t = 0;
      else
        t = 2;
      alpha = (time + 1) * 1000 - 150;
      beta = (time + 1) * 1000 + 130;

      timer = setTimeout(red, alpha);
      inter = setTimeout(gameover, beta);
      zzz = setInterval(changetimer, 1000);
      image.style.fill= color[z-1];
      image.setAttribute("cx", x+"%");
      image.setAttribute("cy", y+"%");

      i++;
      score.innerHTML=i;
    } else {
      red();
      setTimeout(gameover, 100);
    }

}

image.addEventListener('mousedown',handleMouseDown);


function gameover() {
  clearTimeout(timer);
  clearTimeout(inter);

  score = i;
  alert("Your final score is " + score);
  x = confirm("Do you want to play again ?");
  if (x == true)
    location.reload();
  else
    window.close();

}

function red() {
  image.style.fill= "red";
}

function changetimer() {
  if (time >= 0) {
    document.getElementById('time').innerHTML = time;
    time--;
  } else {
    clearInterval(zzz);

  }

}
