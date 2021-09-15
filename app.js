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
    $(".issue-link").css("font-weight", "400");
    $(`#issue--${destination.index + 1}`).css("font-weight", "700");
  },
});

document.addEventListener("change", function () {
  console.log("change");
});
