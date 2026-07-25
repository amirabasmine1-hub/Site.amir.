let clicks = 0;

const tabs = document.querySelectorAll(".nav-btn[data-tab]");
const allTabPanels = document.querySelectorAll(".tab");

function showTab(tabName){
  allTabPanels.forEach(p => {
    p.classList.toggle("hidden", p.id !== `tab-${tabName}`);
  });
}

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    showTab(btn.dataset.tab);
  });
});

// تب پیش‌فرض: پروفایل
showTab("profile");

// حالت خفن
const btnPing = document.getElementById("btnPing");
const heroCard = document.getElementById("heroCard");
const stat1 = document.getElementById("stat1");

btnPing?.addEventListener("click", () => {
  clicks += 1;
  stat1.textContent = clicks;

  heroCard.style.transform = "scale(1.01)";
  heroCard.style.transition = ".15s ease";
  setTimeout(() => {
    heroCard.style.transform = "scale(1)";
  }, 170);
});

// جستجو بین بازی‌ها
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const gameGrid = document.getElementById("gameGrid");
const gameCards = document.querySelectorAll(".game-card");

function filterGames(q){
  q = (q || "").trim().toLowerCase();
  gameCards.forEach(card => {
    const name = (card.dataset.game || "").toLowerCase();
    const show = name.includes(q);
    card.style.display = show ? "" : "none";
  });
}

searchBtn?.addEventListener("click", () => filterGames(search.value));
search?.addEventListener("keydown", (e) => {
  if(e.key === "Enter") filterGames(search.value);
});
