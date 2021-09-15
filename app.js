"use strict";

const links = document.querySelectorAll(".issue-link");
const container = document.querySelector(".container");

new fullpage("#fullpage", {
  //options here
  anchors: ["section1", "section2", "section3", "section4", "section5"],
  menu: "#myMenu",
  autoScrolling: true,
  scrollHorizontally: true,
  dropEffect: true,

  afterSlideLoad: function (section, origin, destination, direction) {
    var loadedSlide = this;

    //first slide of the second section
    if (section.anchor == "section2" && destination.index == 1) {
      console.log("First slide loaded");
    }

    //second slide of the second section (supposing #secondSlide is the
    // //anchor for the second slide)
    // if (section.index == 1 && destination.anchor == "secondSlide") {
    //   console.log("Second slide loaded");
    // }
  },
});

document.addEventListener("change", function () {
  console.log("change");
});

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
