"use strict";

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

  if (currentSection !== pastSection) changeColor(currentColor);
});

const changeColor = (color) => {
  pastSection = currentSection;
  $("body").css("background-color", `#${color}`);
};

/////////////////////////////////////////////
// scroll on click link

const links = document.querySelectorAll(".issue-link");
const container = document.querySelector(".container");

let sectionsArr = [];

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollOnLink(link.dataset.num);
  });
});

const getHeightOfSections = function () {
  links.forEach((link) => {
    console.log(link);

    const targetSection = document.querySelector(`#book-${link.dataset.num}`);
    console.log(targetSection);

    const sectionPosition = targetSection.getBoundingClientRect();
    console.log(sectionPosition);

    sectionsArr.push(sectionPosition.top);
    console.log(sectionsArr);
    // link.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   scrollOnLink(link);
    // });
  });
};

getHeightOfSections();

sectionsArr.reverse();
console.log(sectionsArr);

const scrollOnLink = (targetIndex) => {
  const scrollHeight = sectionsArr[targetIndex - 1];
  container.style.transform = `translate3D(0 , calc(${scrollHeight}px), 0)`;
  sectionsArr = [];
  getHeightOfSections();
};

// const scrollOnLink = (choice) => {
//   const num = choice.dataset.num;
//   console.log(num);

//   const targetSection = document.querySelector(`#book-${num}`);
//   console.log(targetSection);
//   const bottom = targetSection.getBoundingClientRect().bottom;
//   console.log(bottom);

//   container.style.transform = `translateY(100vh)`;
// };
