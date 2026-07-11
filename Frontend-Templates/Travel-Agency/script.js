const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach((element) => {
  observer.observe(element);
});
