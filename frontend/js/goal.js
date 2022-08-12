function renderGoal(habit){
    const logTotal = habit.logs; 

    const logCount = logTotal.length;
    console.log(logCount);
    return `
    <div class="goal">
        <h3>Current Goal:</h3>
        <p class="repetitions">${habit.reps}</p>
        <p class="per">times per</p>
        <p class="frequency">${habit.frequency}</p>
    </div>
    
    `

}