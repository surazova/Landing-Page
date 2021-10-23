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

const navbarList = document.getElementById("navigation_list");
const sections = document.querySelectorAll("section");

// *** End Global Variables ***/

// *** Begin Main Functions ***/

// Navbar Hamburger Menu toggle
const togglerButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigationbar-links")[0];

togglerButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});

// Programmatically create the navigation bar by obtaining the "h2" element and placing it inside of an array
// The array will be the title of the Navigation Bar Li element
// Encorporate smooth scrolling to sections

const nameOfSections = [];
const idOfSections = [];

for (let section of sections) {
  nameOfSections.push(section.getElementsByTagName("h2")[0].textContent);
  idOfSections.push(section.id);
}
function navigationBarCreate() {
  for (let i = 0; i < 4; i++) {
    const createNavLi = document.createElement("li");
    createNavLi.classList = "navigation_item";
    navbarList.appendChild(createNavLi);
    createNavLi.innerHTML = `<a class="navigation-link">${nameOfSections[i]}</a>`;

    createNavLi.addEventListener("click", function () {
      sections[i].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  }
}
navigationBarCreate();

// Add class 'active' to section when near top of viewport while manually scrolling
const getLinks = document.querySelectorAll(".navigation-link");
const getSection = document.querySelectorAll("section");
function activeToggler() {
  let index = getSection.length;
  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  getLinks.forEach((link) => link.classList.remove("active"));
  getLinks[index].classList.add("active");
}

activeToggler();
window.addEventListener("scroll", activeToggler);

// Add and remove active class for Navigation bar
navigation = document.querySelectorAll(".navigation-link");
console.log(navigation);

navigation.forEach((element) => {
  element.addEventListener("click", function () {
    navigation.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
