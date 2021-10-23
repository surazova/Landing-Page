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
    liElement.id = `${sectionIdArray[i]}_nav`.toLowerCase();

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
navbar = document.querySelectorAll(".nav-link");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

// Add active class to navbar item when in viewport while scrolling
const links = document.querySelectorAll(".nav-link");
const sectionsss = document.querySelectorAll("section");
function changeLinkState() {
  let index = sectionsss.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);
