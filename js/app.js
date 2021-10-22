// /**
//  *
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  *
//  * Dependencies: None
//  *
//  * JS Version: ES2015/ES6
//  *
//  * JS Standard: ESlint
//  *
//  */

// /**
//  * Comments should be present at the beginning of each procedure and class.
//  * Great to have comments before crucial code sections within the procedure.
//  */

// *** Define Global Variables ***/
const navbarList = document.getElementById("navbar_list");
const sections = document.querySelectorAll("section");

// *** End Global Variables ***/

//  * Begin Main Functions */

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Navbar Hamburger Menu toggle
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// Scroll to section on link click

// Set sections as active

const sectionNameArray = [];
const sectionIdArray = [];

// extract id and names of sections
for (let section of sections) {
  sectionNameArray.push(section.getElementsByTagName("h2")[0].textContent);

  sectionIdArray.push(`${section.id}`);
}

// Build the navbar
function buildNav() {
  for (let i = 0; i < sectionIdArray.length; i++) {
    const liElement = document.createElement("li");
    liElement.classList = "navbar_item";
    // liElement.id = `${sectionIdArray[i]}_nav`.toLowerCase();

    navbarList.appendChild(liElement);

    // adds corresponding id

    liElement.innerHTML = `<a class="nav-link">${sectionNameArray[i]}</a>`;

    // Add smooth scrolling
    liElement.addEventListener("click", () => {
      sections[i].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  }
}

buildNav();

// Add and remove active class for navbar
// navbar = document.querySelector(".navbar_list").querySelectorAll("a");
// console.log(navbar);

// navbar.forEach((element) => {
//   element.addEventListener("click", function () {
//     navbar.forEach((nav) => nav.classList.remove("active"));

//     this.classList.add("active");
//   });
// });

// Add and remove active class for navbar
navbar = document.querySelectorAll(".nav-link");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

// Viewport and Highlight Navbar on Scroll
// const sectionz = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".navbar a");
// window.addEventListener("scroll", () => {
//   let current = "nav-link";

//   sectionz.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((a) => {
//     a.classList.remove("active");
//     if (a.classList.contains(current)) {
//       a.classList.add("active");
//     }
//   });
// });

/////////////////////////////////////////////////////////
// // Get all sections that have an ID defined
// const sectionss = document.querySelectorAll("section");

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//   // Get current scroll position
//   let scrollY = window.pageYOffset;

//   // Now we loop through sections to get height, top and id values for each
//   sectionss.forEach((current) => {
//     const sectionHeight = current.offsetHeight;

//     const sectionTop =
//       current.getBoundingClientRect().top + window.pageYOffset - 50;
//     sectionId = current.getAttribute("id");

//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector(".nav-link").classList.add("active");
//     } else {
//       document.querySelector(".nav-link").classList.remove("active");
//     }
//   });
// }

// Get all sections that have an ID defined
const sectionss = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sectionss.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-link a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-link + sectionId + ")
        .classList.remove("active");
    }
  });
}
