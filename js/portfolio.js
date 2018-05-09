var menu = document.getElementById('menu');
var hamburger = document.getElementById('hamburger');
var crosshair = document.getElementById('crosshair');

hamburger.addEventListener("click", function(){
  menu.style.display = "block";
  setTimeout(function(){
    menu.style.right = "-15px";
    hamburger.style.display = "none";
  }, 200);
});

crosshair.addEventListener("click", function(){
  menu.style.right = "-800px";
  hamburger.style.display = "block";
  setTimeout(function(){
    menu.style.display = "none";
  }, 800);
});
