const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const industryBtn = document.getElementById("industryBtn");
const industryMenu = document.getElementById("industryMenu");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

industryBtn?.addEventListener("click", () => {
  industryMenu.style.display =
    industryMenu.style.display === "block" ? "none" : "block";
});

//new eventListener line


// Close industries submenu when clicking outside it
document.addEventListener("click", (e) => {
  const clickedInsideSubmenu =
    industryMenu.contains(e.target) || industryBtn.contains(e.target);

  if (!clickedInsideSubmenu) {
    industryMenu.style.display = "none";
  }
});

