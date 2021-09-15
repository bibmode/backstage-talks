"use strict";

const links = document.querySelectorAll(".issue-link");
const container = document.querySelector(".container");

const colors = ["#00c1b5", "#ff651a", "#ffbe00", "#1d3fbb", "#e30512"];

new fullpage("#fullpage", {
  //options here
  anchors: ["section1", "section2", "section3", "section4", "section5"],
  menu: "#myMenu",
  autoScrolling: true,
  scrollHorizontally: true,
  dropEffect: true,

  onLeave: function (origin, destination, direction) {
    let leavingSection = this;

    $("body").css("background-color", colors[destination.index]);

    // if (origin.index == 1 && direction == "down") {
    //   alert("Going to section 3!");
    // } else if (origin.index == 1 && direction == "up") {
    //   alert("Going to section 1!");
    // }
  },
});

document.addEventListener("change", function () {
  console.log("change");
});
