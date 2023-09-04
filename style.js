var themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    themeBtn.src = "images/sun-icon.png";
  }else {
    themeBtn.src = "images/moon-solid.svg"
  }
}

function barMenu() {
  const bar = document.querySelector('.links');

  if (bar.style.display === "none") {
    bar.style.display = "block";
  } else {
    bar.style.display = "none";
  }
}