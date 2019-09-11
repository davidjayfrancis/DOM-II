// Your code goes here
// 1. copy
document.querySelector("body").addEventListener("copy", e => {
  alert("Hey! I know you're copying!!!");
});

//2. click
window.addEventListener("click", e => {
  console.log(e.target.textContent);
});

//3. mouseover
mainImage = document.querySelector(".intro img");

mainImage.addEventListener("mouseover", e => {
  e.target.src = "img/destination.jpg";
  e.target.style.width = "100%";
  e.target.style.borderRadius = "12px";
});

//3b mouseleave
mainImage.addEventListener("mouseleave", e => {
  e.target.src = "img/fun-bus.jpg";
});
//4. keydown
// checks to see if a certain keystroke order is met, and updates the title if so
document.addEventListener("keydown", e => {
  if (pass(e.key)) {
    partyRock();
  }
});
//5. load
image = document.querySelectorAll(".img-content img");
image[0].addEventListener("load", e => {
  console.log("images loaded! ");
});

//6: dblclick[]
contentText = document.querySelectorAll(".text-content p");
contentTextHeader = document.querySelectorAll(".content-section h2");
image[0].addEventListener("dblclick", e => {
  contentTextHeader[0].style.color = "dodgerblue";
  contentText[0].style.color = "green";
  contentText[1].style.color = "purple";
});

//6. select
para = document.querySelector("p");
para.addEventListener("select", e => {
  console.log("working");
});
//7. drag
image[1].addEventListener("drag", e => {
  e.target.src = "";
  e.target.alt = "Goodbye my dear image";
});

//8. focus

//9. resize
let body = document.querySelector("body");
window.addEventListener("resize", e => {
  body.style.color = "red";
});
//10. scroll
let intro = document.querySelector(".intro");
scrollCountP = intro.appendChild(document.createElement("p"));
scrollCountP.textContent = "The yScroll of the screen is: ";
let scrollNum = scrollCountP.appendChild(document.createElement("span"));
scrollNum.className = "scroll";
window.addEventListener("scroll", e => {
  scrollNum.textContent = Math.round(window.scrollY * 10) / 10;
});

let logoHeading = document.querySelector(".logo-heading");
let navContainer = document.querySelector(".nav-container");

navContainer.addEventListener("click", e => {
  alert(`clicked nav`);
});

logoHeading.addEventListener("click", e => {
  alert("clicked logo");
  e.stopPropagation();
});

// helper functions
temp = "";
function pass(key) {
  if (temp.length < 10) {
    temp += key;
  } else {
    temp = temp.slice(1, 10) + key;
  }
  console.log(
    temp
      .split()
      .reverse()
      .join()
  );
  return (
    temp ===
    "davidrocks"
      .split()
      .reverse()
      .join()
  );
}

function partyRock() {
  let header = document.querySelector(".logo-heading");
  header.textContent = "PARTY BUS MOTHER FUCKERS! LETS GOOO!";
}
