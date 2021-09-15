"use strict";

const links = document.querySelectorAll(".issue-link");
const container = document.querySelector(".container");

let position = $(window).scrollTop();

$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll > position) {
    console.log("scrollDown");
  } else {
    console.log("scrollUp");
  }
  position = scroll;
  console.log(position);
});

new fullpage("#fullpage", {
  //options here
  //autoScrolling: true,
  scrollHorizontally: true,
});

/////////////////////////////////////////////
// scroll snap

// getHeightOfSections();
// let initialScroll = 0,
//   newScroll;

// document.addEventListener("scroll", function (e) {
//   const nextScroll = document.documentElement.scrollTop;
//   console.log(nextScroll, initialScroll);

//   if (nextScroll > initialScroll) {
//     container.style.transform = `translate3d(0, -100vh ,0)`;
//   }

//   if (nextScroll < initialScroll) {
//     container.style.transform = `translate3d(0, 100vh ,0)`;
//   }

//   initialScroll = nextScroll;
// });
// let sectionNow = 0;
// window.onscroll = function (e) {
//   const scrollDirection = this.oldScroll > this.scrollY;
//   console.log(scrollDirection);
//   this.oldScroll = this.scrollY;
//   // if(scrollDirection) s
// };

// document.addEventListener("scroll", function () {
//   console.log("hello");
//   scrollDirection = false;
// });

/////////////////////////////////////////////
//color changing in the background on scroll

const sections = document.querySelectorAll(".section__issue");
const body = document.querySelector("body");

let currentSection,
  pastSection = "section-1";

document.addEventListener("scroll", () => {
  sections.forEach((s) => {
    const section = s.getBoundingClientRect();
    if (section.bottom > 0 && section.bottom < window.innerHeight * 1.2) {
      currentSection = s.id;
    }
  });

  const currentColor = document.getElementById(`${currentSection}`).dataset
    .color;

  if (currentSection !== pastSection) {
    changeColor(currentColor);
    snapScroll(currentSection);
  }
});

const changeColor = (color) => {
  pastSection = currentSection;
  $("body").css("background-color", `#${color}`);
};

/////////////////////////////////////////////
// snap scrolling

const snapScroll = (currentDiv) => {
  const sectionNow = document.getElementById(`${currentDiv}`);
  //console.log(sectionNow.parentElement);
};

/////////////////////////////////////////////
// scroll on click link

let currentBook = 1;

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollOnLink(link.dataset.num);
    //console.log(link.dataset.num);
  });
});

const getHeightOfSections = function () {
  let sectionsArr = [];
  links.forEach((link) => {
    //console.log(link);

    const targetSection = document.querySelector(`#book-${link.dataset.num}`);
    //console.log(targetSection);

    const sectionPosition = targetSection.getBoundingClientRect();
    //console.log(sectionPosition);

    sectionsArr.push(sectionPosition.top);
  });
  return sectionsArr;
};

// let direction;
// window.onscroll = function (e) {
//   const scrollDirection = this.oldScroll > this.scrollY;
//   console.log(scrollDirection);
//   this.oldScroll = this.scrollY;
// };

const scrollOnLink = (targetIndex) => {
  container.style.transform = `translateY(calc(100vh * -${
    Number(targetIndex) - 1
  }))`;
};
