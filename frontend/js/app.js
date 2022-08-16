import header from "./header.js";
import logEntry from "./logEntry.js";
import newHabit from "./newHabit.js";
import login from "./login.js";
import userDashboard from "./userDashboard.js";
import habitSummary from "./habit-summary.js";
import logPage from "./log-page.js";

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
          username: newUser,
          password: password,
          "habits": [],
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
            makeAccountView(account.habits, account.username);
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

  const habitColorChange = document.querySelectorAll(".my-habit-progress");
  
  habitColorChange.forEach((habitColorChoice) => {
    const numReps = habitColorChoice.querySelector(".logs")
    console.log(numReps)
    const percentComplete = numReps.value/66;
    console.log(percentComplete);
    const width = document.querySelector(".habit-progress").offsetWidth;
    const percentProg = habitColorChoice.querySelector(".percent-progress");
    const habitColor = habitColorChoice.querySelector(".habit-color");
    habitColorChoice.style.backgroundColor = habitColor.value;
    habitColorChoice.style.width = "" + percentComplete*width + "px";
    percentProg.innerText = Math.floor(percentComplete*100) + "%";
  });

  const habitsView = document.querySelectorAll(".habit");

  habitsView.forEach((habit) => {
    const logEntry = habit.querySelector(".edit");
    const habitId = habit.querySelector(".habit-id");
    const deleteHabit = habit.querySelector(".delete-habit");
    const habitColorChange = habit.querySelector(".habit-progress");

    logEntry.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/habits/${habitId.value}`)
        .then((res) => res.json())
        .then((habit) => {
          makeLogEntryView(habit);
        });
    });
    deleteHabit.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/habits/${habitId.value}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((habits) => {
          makeAccountView(habits, username);
        });
    });

    habitColorChange.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/habits/${habitId.value}`)
        .then((res) => res.json())
        .then((habit) => {
          makeHabitSummaryView(habit);
        });
    });
  });

  const addHabitButton = document.querySelector(".add-habit-button");
  addHabitButton.addEventListener("click", () => {
    makeNewHabitView(username);
  });

  function makeLogEntryView(habit) {
    console.log(habit);
    container.innerHTML = header();
    container.innerHTML += logEntry(habit);

    const logColor = document.querySelector(".log-form");
    const habitColor = document.querySelector(".habit-color");
    logColor.style.backgroundColor = habitColor.value;
  
    const habitId = document.querySelector(".habit-id");
    const logDate = document.querySelector(".log-date");
    const today = new Date();
    const currentTime = today.getHours() + ':' + today.getMinutes();
    logDate.value = new Date().toISOString().split('T')[0];
    const logTime = document.querySelector(".log-time");
    logTime.value = currentTime;
    console.log(currentTime);

    const logReflection = document.querySelector(".log-reflection");
    const logNote = document.querySelector("#note");

    const saveButton = document.querySelector(".save-button");
    saveButton.addEventListener("click", () => {
      const newLogJson = {
        note: logNote.value,
        time: currentTime,
        date: logDate.value,
        rating: logReflection.value,
      };

      if (logNote.value == []) {
        alert("Please enter note for this log.");
      } else {
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
      }
    });

    const cancelButton = document.querySelector(".back-button");

    cancelButton.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/${username}/habits`)
        .then((res) => res.json())
        .then((habits) => {
          makeAccountView(habits, username);
        });
    });
  }

  function makeNewHabitView(username) {
    container.innerHTML = header();
    container.innerHTML += newHabit();

    const habitName = document.querySelector("#habit-name");
    const colorChoice = document.querySelector("#habit-color");
    const habitFreq = document.querySelector("#numOfTimes");
    const perDayOrWeek = document.querySelector("#per");
    const habitIcon = document.querySelector("#habit-icon");

    const saveButton = document.querySelector(".new-habit-save-button");
    saveButton.addEventListener("click", () => {
      const newHabitJson = {
        name: habitName.value,
        color: colorChoice.value,
        reps: habitFreq.value,
        icon: habitIcon.value,
        frequency: perDayOrWeek.value,
        type: habitType.value,
      };
      console.log(newHabitJson);
      console.log(username);
      fetch(`http://localhost:8080/api/${username}/newHabit`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newHabitJson),
      })
        .then((res) => res.json())
        .then((habits) => {
          makeAccountView(habits, username);
        });
    });

    const cancelButton = document.querySelector(".back-button");

    cancelButton.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/${username}/habits`)
        .then((res) => res.json())
        .then((habits) => {
          makeAccountView(habits, username);
        });
    });
  }
  function makeHabitSummaryView(habit) {
    container.innerHTML = header();
    container.innerHTML += habitSummary(habit);
    const button = document.querySelector(".dropbtn");
    button.addEventListener("click", () => {
      myFunction();})

    const backBtn = document.querySelector(".back-button");
    backBtn.addEventListener("click", ()=> {
      fetch(`http://localhost:8080/api/${username}/habits`)
      .then((res) => res.json())
      .then((habits) => {
        makeAccountView(habits, username);
      })
    })

    const habitColorChange = document.querySelectorAll(".habit-form");

    habitColorChange.forEach((habitColorChoice) => {
      const habitColor = habitColorChoice.querySelector(".habit-color");
      habitColorChoice.style.backgroundColor = habitColor.value;
    });
    const habitID = document.querySelector("#habitID");
    const logBTN = document.querySelector("#log-btn");
    logBTN.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/habits/${habitID.value}/allLogs`)
      .then((res) => res.json())
      .then((habit) => {
        makeAllLogView(habit);
      })
    })

    // const date = new Date();

    // const renderCalendar = () => {
    //   date.setDate(1);
    //   const monthDays = document.querySelector(".days");
    //   const lastDay = new Date(
    //     date.getFullYear(),
    //     date.getMonth() + 1,
    //     0
    //   ).getDate();

    //   const prevLastDay = new Date(
    //     date.getFullYear(),
    //     date.getMonth(),
    //     0
    //   ).getDate();
    //   console.log(prevLastDay);

    //   const firstDayIndex = date.getDay();

    //   const lastDayIndex = new Date(
    //     date.getFullYear(),
    //     date.getMonth() + 1,
    //     0
    //   ).getDay();

    //   const nextDays = 7 - lastDayIndex - 1;

    //   const months = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    //   ];

    //   document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    //   document.querySelector(".date p").innerHTML = new Date().toDateString();

    //   let days = "";

    //   for (let x = firstDayIndex; x > 0; x--) {
    //     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    //   }

    //   for (let i = 1; i <= lastDay; i++) {
    //     if (
    //       i === new Date().getDate() &&
    //       date.getMonth() === new Date().getMonth()
    //     ) {
    //       days += `<div class="today">${i}</div>`;
    //     } else {
    //       days += `<div>${i}</div>`;
    //     }
    //   }

    //   for (let j = 1; j <= nextDays; j++) {
    //     days += `<div class="next-date">${j}</div>`;
    //     monthDays.innerHTML = days;
    //   }

    // };

    // document.querySelector(".prev").addEventListener("click", () => {
    //   date.setMonth(date.getMonth() - 1);
    //   renderCalendar();
    // });
    // document.querySelector(".next").addEventListener("click", () => {
    //   date.setMonth(date.getMonth() + 1);
    //   renderCalendar();
    // });

    // renderCalendar();
   
    const logTotal = habit.logs; 
    const logCount = logTotal.length;
    const repetitions = document.querySelector(".streak")
    repetitions.innerHTML = logCount;
    console.log(logCount)
    const progressBar = document.querySelector(".progress-bar").offsetWidth
    console.log(progressBar);
    const percentDone = logCount/66;
    const myProgress = document.getElementById('my-bar');
    myProgress.style.width = "" + percentDone*progressBar + "px";
    console.log(percentDone);
    
    
    
   
    
  }
  function makeAllLogView(habit){
    container.innerHTML = header();
    container.innerHTML += logPage(habit);
    const logPages = document.querySelectorAll(".log__info");
    const logBackBTN = document.querySelector(".log__back__btn");
    const habitId = document.querySelector(".habit__id");


    logBackBTN.addEventListener("click", () => {
      fetch(`http://localhost:8080/api/habits/${habitId.value}`)
        .then((res) => res.json())
        .then((habit) => {
          makeHabitSummaryView(habit);
        });
    });
    // logPages.forEach(log => {
    //   const logDate = log.querySelector(".log__date");
    //   const logTime = log.querySelector(".log__time");
    //   const logNote = log.querySelector(".log__note");
    //   const logRating = log.querySelector("log-rating");
    //   // const logJSON = log.querySelector("")
    //   console.log(logTime.value);
    // })
    // const logRating = log.querySelector("log-rating");
    // logRating.innerHTML = 
  }
}
