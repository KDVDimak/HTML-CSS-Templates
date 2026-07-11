const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});
