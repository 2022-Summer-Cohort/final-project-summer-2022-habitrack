export default function habitSummary(habit){
return`
<div class="habit-container">
       
            <div class="habit-form">
            <div class="back-button">
                <p class="fa-solid fa-x">&#x2715;</p>
            </div>
            <h1>${habit.name}</h1>
            <input type="hidden" class="habit-color" name="background-color" value="${habit.color}">
            
            <div class="goal">
                <h3>Current Goal:</h3>
                <p class="repetitions">${habit.reps}</p>
                <p class="per">times per</p>
                <p class="frequency">${habit.frequency}</p>
            </div>
            <div class="complete">
                <div class="current-streak">
                    <h3>Current Streak:</h3>
                    <p class="streak">number</p>
                </div>
                <h3>Completed</h3>
                <div class="progress-bar">
                    <div id="my-bar">
                        
                    </div>
                </div>
            </div>
            
            </div>
        
            </div>

`

}