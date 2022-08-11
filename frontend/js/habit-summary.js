export default function habitSummary(habit){
return`
<div class="habit-container">
       
            <div class="habit-form">
            <div class="back-button">
                <p class="fa-solid fa-x">&#x2715;</p>
            </div>
            <h1>${habit.name}</h1>
            <input type="hidden" class="habit-color" name="background-color" value="${habit.color}">
            <div class="calendar">
                <div class="month">
                    <i class="fas fa-angle-left prev"></i>
                    <div class="date">
                        <h1></h1>
                        <p></p>
                    </div>
                    <i class="fas fa-angle-right next"></i>
                </div>
                <div class="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div class="days">
                  
              
                    <div class="next-date">1</div>
                    <div class="next-date">2</div>
                    <div class="next-date">3</div>
                    <div class="next-date">4</div>
                    <div class="next-date">5</div>
                    <div class="next-date">6</div>
                </div>
            </div>
            <div class="goal">
                <h3>Current Goal:</h3>
                <p class="repetitions">${habit.reps}</p>
                <p class="per">times per</p>
                <p class="frequency">${habit.frequency}</p>
            </div>
            <div class="current-streak">
                ${ 
                    habit.logs.map(log=> {
                        return `

                        <div class="note">
                            <h3>${log.note}</h3>
                            
                        </div>
                        
                        `
                    }).join("")
                }

               
            </div>
            <div class="complete">
                <h3>Completed</h3>
                <p></p>
                <div class="progress-bar">
                    <div id="my-bar">

                    </div>
                </div>
            </div>
            
            </div>
        
            </div>

`

}