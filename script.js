const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");
const cursorGlow = document.querySelector(".cursor-glow");
const filterButtons = document.querySelectorAll(".filter-button");
const templateCards = document.querySelectorAll(".template-card");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

window.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
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
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    templateCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow =
        selectedFilter === "all" || categories.includes(selectedFilter);

      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});
