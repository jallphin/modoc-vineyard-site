const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    toggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const values = [
  {
    count: "01 / 05",
    title: "Partner with the Holy Spirit",
    body: "We make room for the presence, gifts, and guidance of the Holy Spirit in everyday life and ministry.",
  },
  {
    count: "02 / 05",
    title: "Experience and Worship God",
    body: "Worship is an environment where we experience God, so we make it a priority in our gatherings.",
  },
  {
    count: "03 / 05",
    title: "Engage in Compassionate Ministry",
    body: "We seek to bring hope and help from Jesus through prayer, practical care, and mercy for people around us.",
  },
  {
    count: "04 / 05",
    title: "Pursue Culturally Relevant Mission",
    body: "We want to serve Modoc County as an outpost of the kingdom of God in ways people can understand and receive.",
  },
  {
    count: "05 / 05",
    title: "Reconcile People with God and Creation",
    body: "We join God's work of restoring people to Himself, to one another, and to the world He made.",
  },
];

const valueTabs = document.querySelectorAll(".value-tab");
const valueDisplay = document.querySelector(".value-display");

valueTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const index = Number(tab.getAttribute("data-value-index"));
    const value = values[index];

    if (!value || !valueDisplay) return;

    valueTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    valueDisplay.innerHTML = `
      <p class="value-count">${value.count}</p>
      <h3>${value.title}</h3>
      <p>${value.body}</p>
    `;
  });
});
