var progress = 30; 
var progressEl = document.querySelector('.progress'); 
var increaseProgress = function() { 
  progress = progress + 10; 
  progressEl.style.transform = 'rotate('+progress+'deg)'; 
} 

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+ Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "- Read less";
    moreText.style.display = "inline";
  }
}
function myFunction_1() {
  var dots = document.getElementById("dots_1");
  var moreText = document.getElementById("more_1");
  var btnText = document.getElementById("myBtn_1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+ Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "- Read less";
    moreText.style.display = "inline";
  }
}
function myFunction_2() {
  var dots = document.getElementById("dots_2");
  var moreText = document.getElementById("more_2");
  var btnText = document.getElementById("myBtn_2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+ Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "- Read less";
    moreText.style.display = "inline";
  }
}


