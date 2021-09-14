"use strict";

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
