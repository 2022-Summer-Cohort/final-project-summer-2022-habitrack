import header from "./header.js";
import logEntry from "./logEntry.js";
import newHabit from "./newHabit.js";

const container = document.querySelector(".container");
container.innerHTML = header();
container.innerHTML += newHabit();

const button = document.querySelector(".dropbtn");
button.addEventListener("click", ()=>{myFunction()});




     
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  