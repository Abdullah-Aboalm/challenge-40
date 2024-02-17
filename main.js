let allGirl = document.querySelectorAll("[class^='girl']");
let allMan = document.querySelectorAll("[class^='man']");

let rightArrow = document.querySelector(".next");
let leftArrow = document.querySelector(".prev");

rightArrow.addEventListener("click", () => {
  if (allGirl[0].style.display == "none") {
    allGirl.forEach((girl) => {
      girl.style.display = "flex";
      girl.style.alignItems = "center";
    });
    allMan.forEach((man) => (man.style.display = "none"));
  } else {
    allMan.forEach((man) => {
      man.style.display = "flex";
      man.style.alignItems = "center";
    });
    allGirl.forEach((girl) => (girl.style.display = "none"));
  }
});

leftArrow.addEventListener("click", () => {
  if (allGirl[0].style.display == "none") {
    allGirl.forEach((girl) => {
      girl.style.display = "flex";
      girl.style.alignItems = "center";
    });
    allMan.forEach((man) => (man.style.display = "none"));
  } else {
    allMan.forEach((man) => {
      man.style.display = "flex";
      man.style.alignItems = "center";
    });
    allGirl.forEach((girl) => (girl.style.display = "none"));
  }
});
