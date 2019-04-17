"use strict";

var data = [
  {
    url: "https://jgarage.herokuapp.com/",
    gitHubUrl: "https://github.com/Chiuri254/Photo-Garage",
    img: "img/garage.png",
    title: "The Photo Garage",
    desc:
      "Web app built with the MERN stack. Add /admin to the URL and login as admin to modify the data by sending HTTP requests to the server, contact me for the admin credentials."
  },
  {
    url: "https://cawards.herokuapp.com/",
    gitHubUrl: "https://github.com/Chiuri254/The-awards",
    img: "img/AWARDS.png",
    title: "The Awards",
    desc:
      "Single Page Application (SPA) implemented with React, I used the movie database API to fetch dynamic data to the app. Check repo on GitHub for more information."
  },
  {
    url: "https://foodiem.herokuapp.com/",
    gitHubUrl: "https://github.com/Chiuri254/foodie-2",
    img: "img/foodie.png",
    title: "Foodie",
    desc:
      "I built this website thinking about real estate, it has galleries and individual listing pages. I integrated some vanilla JavaScript functionalities."
  },
  
];

var flexGrid = document.querySelector(".flex-grid");

data.forEach(function(el) {
  return (flexGrid.innerHTML +=
    '<article class="card">\n<div class="card__thumbnail">\n  <a href=' +
    el.url +
    ' target="_blank">\n    <img src=' +
    el.img +
    " alt=" +
    el.title +
    ' class="card__img">\n  </a>\n</div>\n<div class="card__description">\n  <h3 class="card__heading">\n    <a href=' +
    el.url +
    ' target="_blank" class="card__link">' +
    el.title +
    '</a>\n  </h3>\n  <p class="card__text">' +
    el.desc +
    "</p>\n  <a href=" +
    el.gitHubUrl +
    ' target="_blank" class="card__github">\n    GitHub\n    <i class="fab fa-github"></i>\n  </a>\n</div>\n</article>');
});

// Browser support
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) {
    return self.pageYOffset;
  }
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  }
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) {
    return document.body.scrollTop;
  }

  return 0;
}

// Determine the position of the destination element
function elmYPosition(eID) {
  var elm = document.querySelector(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

// Function to do the scrolling
function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
  return false;
}

// Triggering scroll function
document.querySelector(".user-nav").addEventListener("click", function(event) {
  var target = event.target;
  var anchorID = target.getAttribute("href");

  if (target.nodeName === "I" || target.nodeName === "SPAN") {
    anchorID = target.parentElement.getAttribute("href");
  }

  smoothScroll(anchorID);
});

document
  .querySelector(".footer-nav")
  .addEventListener("click", function(event) {
    var target = event.target;
    var anchorID = target.getAttribute("href");
    smoothScroll(anchorID);
  });

document.querySelector("#cta").addEventListener("click", function() {
  smoothScroll("#portfolio");
});

// Submit form
// document.querySelector(".form__submit").addEventListener("click", function() {
//   var formInputs = document.querySelectorAll(".form__input");

//   for (var i = 0; i < formInputs.length; i++) {
//     if (formInputs[i].value === "" && formInputs[i].hasAttribute("required")) {
//       return false;
//     }
//   }
//   document.querySelector(".expand").classList.add("show-expand");
// });

// document.querySelector(".close-btn").addEventListener("click", function() {
//   document.querySelector(".expand").classList.remove("show-expand");
// });
// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var header = document.getElementById("header");

// // Get the offset position of the navbar
// var sticky = hearder.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }