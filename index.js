const links = document.querySelectorAll(".nav-link");
const clearActiveClasses = () => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
};
for (let link of links) {
  link.addEventListener("click", () => {
    clearActiveClasses();
    link.classList.add("active");
  });
}

const navbar = document.querySelector("#navbar");
const burger = document.querySelector(".burger");
const navCloseItem = document.querySelector(".nav-close");
burger.addEventListener("click", () => {
  navbar.classList.add("active");
});
navCloseItem.addEventListener("click", () => {
  navbar.classList.remove("active");
});

navbar.addEventListener("click", (event) => {
  if (event.target.closest(".nav-link")) {
    navbar.classList.remove("active");
  }
});
