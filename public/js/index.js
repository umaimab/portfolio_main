//JS code for index.html


var textWrapper = document.querySelector(".title");
if(textWrapper){
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}


anime.timeline().add({
  targets: ".title .letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 3000,
  delay: (el, i) => 1000 + 40 * i,
});