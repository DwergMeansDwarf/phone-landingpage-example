let phoneImg = document.getElementById("prodImage");
let blue = document.getElementById("blueButton");
let silver = document.getElementById("silverButton");
let pink = document.getElementById("pinkButton");
let green = document.getElementById("greenButton");
let red = document.getElementById("redButton");
let gold = document.getElementById("goldButton");
let header = document.getElementById("header");

blue.onclick = function () {
  phoneImg.src = "./img/navy.png";
  header.style.fontFamily = "'Recursive', sans-serif";
  header.style.color = "#005f87";
};
red.onclick = function () {
  phoneImg.src = "./img/red.png";
  header.style.fontFamily = "'Bebas Neue', cursive";
  header.style.color = "#ff7b7b";
};
green.onclick = function () {
  phoneImg.src = "./img/green.png";
  header.style.fontFamily = "'Lobster', cursive";
  header.style.color = "#96be8c";
};
pink.onclick = function () {
  phoneImg.src = "./img/pink.png";
  header.style.fontFamily = "'Lora', serif";
  header.style.color = "#7d2480";
};
gold.onclick = function () {
  phoneImg.src = "./img/gold.png";
  header.style.fontFamily = "'Poppins', sans-serif";
  header.style.color = "#dcb478";
};
silver.onclick = function () {
  phoneImg.src = "./img/white.png";
  header.style.fontFamily = " 'Pacifico', cursive";
  header.style.color = "#c9c9c9";
};

let featureList = document.getElementById("featList");
let featButton = document.getElementById("features");
featButton.onclick = function () {
  if (featureList.style.display === "none") {
    featButton.innerText = "Show Less";
    featureList.style.display = "block";
  } else {
    featureList.style.display = "none";
    featButton.innerText = "Show More";
  }
};
