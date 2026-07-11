const b = document.querySelector(".menu");
const n = document.querySelector("nav");

b.onclick = () => {
    n.classList.toggle("open");
};

const o = new IntersectionObserver((e) => {
    e.forEach((x) => {
        if(x.isIntersecting){
            x.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((x) => {
    o.observe(x);
});
