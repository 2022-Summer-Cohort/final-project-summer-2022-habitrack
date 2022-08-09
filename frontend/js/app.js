import header from "./header.js";
import logEntry from "./logEntry.js";
import newHabit from "./newHabit.js";
import login from "./login.js";
import userDashboard from "./userDashboard.js";

const container = document.querySelector(".container");

function makeLoginView() {
  container.innerHTML = header();
  container.innerHTML += login();
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document
      .querySelector("#linkCreateAccount")
      .addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
      });

    document.querySelector("#linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });
  });
  const createButton = document.querySelector("#create-btn");
  createButton.addEventListener("click", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const password = document.querySelector("#create-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;
    const newUser = document.querySelector("#signupUsername").value;

    if (newUser == "") {
      alert("Please type in username");
    } else if (newUser.length < 10) {
      alert("Username must be atleast 10 charecters long");
    }
    if (newUser.length >= 10) {
      if (password == "") {
        alert("Field cannot be empty.");
      } else if (password != confirmPassword) {
        alert("Password did not match try again.");
      } else if (password == confirmPassword) {
        const newAccountJson = {
          username: newUser.value,
          password: password.value,
          // "habits": [],
        };
        fetch(`http://localhost:8080/api/accounts/newAccount`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(newAccountJson),
        })
          .then((res) => res.json())
          .then((account) => {
            makeAccountView(account, newUser.value);
          });
      }
    }
  });

  const loginButton = document.querySelector("#login-button");
  loginButton.addEventListener("click", () => {
    const username = document.querySelector("#login-username").value;
    const userPassword = document.querySelector("#login-password").value;

    if (username == "") {
      alert("Please type in username");
    } else if (userPassword == "") {
      alert("Please type in Password");
    } else {
      fetch(`http://localhost:8080/api/${username}/habits`)
        .then((res) => res.json())
        .then((habits) => {
          makeAccountView(habits, username);
        });
    }
  });
}

makeLoginView();
const button = document.querySelector(".dropbtn");
button.addEventListener("click", () => {
  myFunction();
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function makeAccountView(habits, username) {
  console.log(habits);
  container.innerHTML = header();
  container.innerHTML += userDashboard(habits);
  const button = document.querySelector(".dropbtn");
  button.addEventListener("click", () => {
    myFunction();
  });

  const habitColorChange = document.querySelectorAll(".progress-bar");

  habitColorChange.forEach((habitColorChoice) => {
    const habitColor = habitColorChoice.querySelector(".habit-color");
    habitColorChoice.style.backgroundColor = habitColor.value;
  });

  const habitsView = document.querySelectorAll(".habit");

  habitsView.forEach((habit) => {
    const logEntry = habit.querySelector(".edit");
    const habitId = habit.querySelector(".habit-id");

    logEntry.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/habits/${habitId.value}`)
        .then((res) => res.json())
        .then((habit) => {
          makeLogEntryView(habit);
        });
    });
  });

  const addHabitButton = document.querySelector(".add-habit-button")
  addHabitButton.addEventListener("click", () => {
   makeNewHabitView(username);
  })

  function makeLogEntryView(habit) {
    console.log(habit);
    container.innerHTML = header();
    container.innerHTML += logEntry(habit);

    const logColor = document.querySelector(".log-form");
    const habitColor = document.querySelector(".habit-color");
    logColor.style.backgroundColor = habitColor.value;

    const habitId = document.querySelector(".habit-id");
    const logDate = document.querySelector(".log-date");
    const logCheckbox = document.querySelector(".log-check-yes");
    const logTime = document.querySelector(".log-time");
    const logReflection = document.querySelector(".log-reflection");
    const logNote = document.querySelector("#note");

    const saveButton = document.querySelector(".save-button");
    saveButton.addEventListener("click", () => {
      const newLogJson = {
        didHabit: logCheckbox.value,
        note: logNote.value,
        timeStamp: logTime.value,
        date: logDate.value,
        rating: logReflection.value,
      };

      fetch(`http://localhost:8080/api/habits/${habitId.value}/newLog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newLogJson),
      })
        .then((res) => res.json())
        .then((habits) => {
          console.log(newLogJson);
          makeAccountView(habits, username);
        });
    });

    const cancelButton = document.querySelector(".cancel-button");

    cancelButton.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/${username}/habits`)
        .then((res) => res.json())
        .then((habits) => {
          makeAccountView(habits, username);
        });
    });


  }

  function makeNewHabitView(username){
    container.innerHTML = header();
    container.innerHTML += newHabit();

    const habitName = document.querySelector("#habit-name")
    const colorChoice = document.querySelector("#habit-color")
    const habitFreq = document.querySelector("#numOfTimes")
    const perDayOrWeek = document.querySelector("#per")
    const habitIcon = document.querySelector("#habit-icon")
    const habitBuild = document.querySelector("#build")
    const habitBreak = document.querySelector("#break")
    

    const saveButton = document.querySelector(".new-habit-save-button")
    saveButton.addEventListener("click", ()=> {

      
      const newHabitJson = {
          "name": habitName.value,
          "color": colorChoice.value,
          "frequency": habitFreq.value,
          "icon": habitIcon.value,
          "time": perDayOrWeek.value,
          
        }
          console.log(newHabitJson)
          console.log(username)
      fetch(`http://localhost:8080/api/${username}/newHabit`, {
        method:'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newHabitJson),
      })
      .then(res=> res.json())
      .then(habits => {
        makeAccountView(habits,username);
      });
    });
  }
}
