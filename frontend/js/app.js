import header from "./header.js";
import dashboard from "./dashboard.js";
const navbar = document.querySelector(".body")
const container = document.querySelector(".container");


// Show the dashboard with all habits
function makeDashboardView() {
    fetch("http://localhost:8080/api/habits")
    .then(res => res.json())
    .then(habits => {
        showDashboardViewFromJson(habits);
    })
}

function showDashboardViewFromJson(habits) {
    navbar.innerHTML = header();
    navbar.innerHTML += dashboard(habits);

    const addHabitSection = document.querySelector(".add-habit-section");
    const newHabitButton = document.querySelector(".add-habit-button");
    newHabitButton.addEventListener("click", () => {
        addHabitSection.classList.remove("hide");
    })
}

makeDashboardView();